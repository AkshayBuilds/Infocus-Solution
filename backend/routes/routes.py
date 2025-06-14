from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

@router.post("/api/contact")
async def contact_form(form: ContactForm):
    try:
        # Email configuration
        sender_email = os.getenv("SMTP_EMAIL")
        sender_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        
        if not all([sender_email, sender_password, receiver_email]):
            raise HTTPException(status_code=500, detail="Email configuration missing")

        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = f"New Contact Form Submission from {form.name}"

        # Email body
        body = f"""
        New contact form submission:
        
        Name: {form.name}
        Email: {form.email}
        Phone: {form.phone}
        
        Message:
        {form.message}
        """
        
        msg.attach(MIMEText(body, 'plain'))

        # Send email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)

        return {"message": "Contact form submitted successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
