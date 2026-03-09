"use client";

import Header from "./header";
import { QuickInquiryForm } from "./quick-inquiry-form";

export function QuickInquiry() {
  return (
    <section>
      <Header
        title="Quick Inquiry"
        subtitle="Get in touch with us for product inquiries and we'll respond promptly to your needs."
      />
      <QuickInquiryForm />
    </section>
  );
}