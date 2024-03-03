import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactForumEmailProps = {
  message: string;
  senderEmail: string;
};

// Can change this a bit afterwards

export default function ContactForumEmail({
  message,
  senderEmail,
}: ContactForumEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your personal portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-white">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <text>The sender's email is: {senderEmail}</text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
