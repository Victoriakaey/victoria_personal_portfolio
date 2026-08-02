"use server";
import React from "react"
import {Resend} from "resend"
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForumEmail from "@/email/contact-forum-email";
const resend = new Resend(process.env.RESEND_API_KEY)

// Delivery is via https://resend.com.
//
// `to` was jduan10@ucsc.edu — a school address kept past graduation, so anything
// sent through this form would have gone somewhere no longer read. It is the
// public address from the resume now.
//
// `from` is still Resend's shared test domain, which only delivers to the
// address that owns the Resend account. Sending from a verified domain would
// remove that constraint.
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
            to: 'jd.victoria.work@gmail.com',
            subject: "Message from contact forum",
            replyTo: senderEmail as string,
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