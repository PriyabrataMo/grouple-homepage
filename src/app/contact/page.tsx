"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Demo from "@/components/Demo";
import { FeedbackSchema, FeedbackSchemaType } from "@/types/contact";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState<FeedbackSchemaType>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate subject and message length before parsing
      if (formData.subject.length < 2) {
        toast.error("Subject must be at least 2 characters");
        setIsSubmitting(false);
        return;
      }

      if (formData.subject.length > 100) {
        toast.error("Subject cannot exceed 100 characters");
        setIsSubmitting(false);
        return;
      }

      if (formData.message.length < 100) {
        toast.error("Message must be at least 100 characters");
        setIsSubmitting(false);
        return;
      }

      if (formData.message.length > 2000) {
        toast.error("Message cannot exceed 2000 characters");
        setIsSubmitting(false);
        return;
      }

      // Validate form data with Zod
      const validatedData = FeedbackSchema.parse(formData);

      // Honeypot check
      if (validatedData.honeypot) {
        throw new Error("Bot submission detected");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message submitted successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to send message");
      }
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex-1 text-center ">
        <div className="flex-1 text-center ">
          <div
            className="flex-1 text-center relative pb-15 "
            style={{
              backgroundImage: "url('/background/chatbg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="pt-30 md:px-4 px-8">
              <div className="inline-block mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-[#191624] rounded-full border border-gray-700">
                <span className="bg-gradient-to-r from-[#4B68FE] to-white bg-clip-text text-transparent font-medium text-sm md:text-base">
                  We&apos;re Here For You
                </span>
              </div>

              {/* Main Heading */}
              <div className="flex justify-center items-center mb-4">
                <h1 className="heading-gradient text-2xl xs:text-3xl sm:text-4xl md:text-[64px] font-[650] mb-3 sm:mb-4 md:mb-6 leading-tight px-2 tracking-[-1px] sm:tracking-[-2px]">
                  We&apos;re Ready To
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Listen And Respond
                </h1>
              </div>
              {/* Subheading */}
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4 pt-4 md:pt-8 font-['Manrope'] pb-12 md:pb-20">
                Your voice is important to us, and we look forward to connecting
                with you.
              </p>
            </div>

            {/* Contact Section - Enhanced for mobile */}
            <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-6xl mb-16">
              <div
                className="flex flex-col md:flex-row gap-8 mx-auto rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom right, #191624, #0a090d)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Contact Form */}
                <div className="flex-1 px-5 sm:px-6 md:px-8 py-7 md:py-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 md:space-y-6"
                  >
                    <input
                      type="hidden"
                      name="honeypot"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full font-['Manrope'] text-sm md:text-[16px] bg-[#191624]  rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#191624] font-['Manrope'] text-sm md:text-[16px]  rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#191624]  font-['Manrope'] text-sm md:text-[16px]  rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <textarea
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#191624]  font-['Manrope'] text-sm md:text-[16px]  rounded-xl p-4 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#4B68FE] font-['Manrope'] text-sm md:text-[16px] hover:bg-[#3a59e0] text-white py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-md"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>

                    <p className="text-gray-400 text-xs sm:text-sm text-center font-['Manrope'] mt-2">
                      We will contact you within 24 business hours.
                    </p>
                  </form>
                </div>

                {/* Contact Information - Enhanced for mobile */}
                <div className="flex-1 px-5 sm:px-6 md:px-8 py-7 md:py-8 bg-[#14111c]/50">
                  <h3 className="text-xl sm:text-2xl md:text-[32px] heading-gradient font-bold mb-5 md:mb-6">
                    Contact Information
                  </h3>
                  <p className="font-['Manrope'] text-sm md:text-[18px] text-gray-400 mb-8 md:mb-10">
                    Contact us. Your feedback matters. Let&apos;s build a better
                    future together.
                  </p>

                  <div className="space-y-7 md:space-y-8 text-left">
                    <div className="bg-[#191624]/40 p-4 rounded-xl shadow-sm transform transition-transform hover:scale-[1.02] duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#242133] p-2 rounded-full">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </div>
                        <h2 className="font-semibold font-['Manrope'] text-base md:text-xl text-white">
                          Head Office
                        </h2>
                      </div>
                      <p className="text-sm md:text-[18px] text-gray-400 font-['Manrope'] ml-10">
                        33 London St, Reading RG1 4PS, United Kingdom
                      </p>
                    </div>

                    <div className="bg-[#191624]/40 p-4 rounded-xl shadow-sm transform transition-transform hover:scale-[1.02] duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#242133] p-2 rounded-full">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <h2 className="font-semibold font-['Manrope'] text-base md:text-xl text-white">
                          Phone
                        </h2>
                      </div>
                      <p className="text-sm md:text-[18px] text-gray-400 font-['Manrope'] ml-10">
                        +44 118 950 3925
                      </p>
                    </div>

                    <div className="bg-[#191624]/40 p-4 rounded-xl shadow-sm transform transition-transform hover:scale-[1.02] duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#242133] p-2 rounded-full">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h2 className="font-semibold font-['Manrope'] text-base md:text-xl text-white">
                          Email
                        </h2>
                      </div>
                      <p className="text-sm md:text-[18px] text-gray-400 font-['Manrope'] ml-10">
                        hello@grouple.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
      <Demo />
      <Footer />
    </div>
  );
}
