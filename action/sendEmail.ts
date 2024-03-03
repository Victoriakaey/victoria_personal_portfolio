"use server";
import React from "react"
import {Resend} from "resend"
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForumEmail from "@/email/contact-forum-email";
const resend = new Resend(process.env.RESEND_API_KEY)

// used https://resend.com need to modify email to victoriakaey@gmail.com here
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <personalPortfolio@resend.dev>',
            to: 'jduan10@ucsc.edu',
            subject: "Message from contact forum",
            reply_to: senderEmail as string,
            react: React.createElement(ContactForumEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    } catch(error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    };
};