app = FastAPI()

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import FastMail, MessageSchema, MessageType
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr
from .config import email_conf
from .schemas.Quotation import QuotationForm
import os

# ✅ Serve React build folder
if os.path.exists("frontend/dist/assets"):
    app.mount("/assets", StaticFiles(directory="frontend/dist/assets"), name="assets")

@app.get("/")
async def serve_root():
    return FileResponse("frontend/dist/index.html")

@app.get("/{full_path:path}")
async def serve_path(full_path: str):
    file_path = f"frontend/dist/{full_path}"
    if os.path.exists(file_path) and not os.path.isdir(file_path):
        return FileResponse(file_path)
    return FileResponse("frontend/dist/index.html")

# ✅ CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Temporary — tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Contact form schema
class ContactForm(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: str

# ✅ Quotation form schema
class QuotationForm(BaseModel):
    name: str
    phone: str
    email: EmailStr
    brand: str
    model: str
    payment_type: str
    down_payment: float
    tenure: int
    old_vehicle_details: str
    exchange_vehicle: str

# ✅ Contact endpoint
@app.post("/api/contact")
async def send_contact_email(contact: ContactForm):
    try:
        admin_message = MessageSchema(
            subject=f"New Contact Form Submission from {contact.name}",
            recipients=["amsp33478@gmail.com"],
            body=f"""
            New contact form submission:
            
            Name: {contact.name}
            Email: {contact.email}
            Phone: {contact.phone}
            Message: {contact.message}
            """,
            subtype=MessageType.plain
        )

        user_message = MessageSchema(
            subject="Thank you for contacting Infocus Solution",
            recipients=[contact.email],
            body=f"""
            Dear {contact.name},

            Thank you for reaching out to Infocus Solution — 
            Your Global Immigration Expert. We have received 
            your inquiry and will get back to you as soon as possible 
            with the required details.

            Your message:
            {contact.message}

            Best regards,  
            Infocus Solution Team
            """,
            subtype=MessageType.plain
        )

        fm = FastMail(email_conf)
        await fm.send_message(admin_message)
        await fm.send_message(user_message)

        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# ✅ Quotation endpoint
@app.post("/api/quotation")
async def submit_quotation(quotation: QuotationForm):
    try:
        admin_message = MessageSchema(
            subject=f"New Quotation Request from {quotation.name}",
            recipients=["amsp33478@gmail.com"],
            body=f"""
            New quotation request:
            
            Name: {quotation.name}
            Email: {quotation.email}
            Phone: {quotation.phone}
            Brand: {quotation.brand}
            Model: {quotation.model}
            Payment Type: {quotation.payment_type}
            Down Payment: {quotation.down_payment}
            Tenure: {quotation.tenure}
            Exchange Vehicle: {quotation.exchange_vehicle}
            Old Vehicle Details: {quotation.old_vehicle_details}
            """,
            subtype=MessageType.plain
        )

        user_message = MessageSchema(
            subject="Thank you for your quotation request",
            recipients=[quotation.email],
            body=f"""
            Dear {quotation.name},

            Thank you for requesting a quotation from 
            Siddhivinayak Auto World. 
            
            We have received your request and will get back to 
            you shortly with detailed pricing information.

            Your request details:
            Brand: {quotation.brand}
            Model: {quotation.model}
            Payment Type: {quotation.payment_type}

            Best regards,
            Siddhivinayak Auto World Team
            """,
            subtype=MessageType.plain
        )

        fm = FastMail(email_conf)
        await fm.send_message(admin_message)
        await fm.send_message(user_message)

        return {"status": "success", "message": "Quotation request sent successfully"}
    except Exception as e:
        print(f"Error processing quotation: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
