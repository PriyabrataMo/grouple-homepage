"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const faqItems = [
    {
      question: "What are group package deals?",
      answer:
        "These are packages specially curated for groups with offers and discounts baked into the pricing. Larger the group, better the deal.",
    },
    {
      question: "Why are group packages beneficial?",
      answer:
        "Group packages offer various advantages, including personalised experiences, and concierge services.",
    },
    {
      question: "What is the required group size for availing deals?",
      answer:
        "The minimum group size required to avail of group deals may vary. In most caases, group packages start at 10 or more people. We recommend you review the terms and conditions for each venue during the reservation process.",
    },
    {
      question: "What is the difference in the packages?",
      answer:
        "Venue offer four distinct package tiers: Silver, Gold, Platinum and Rose Gold. Each tier provides additional benefits and enhanced experiences. To learn more about the specific offerings, please compare the packages.",
    },
    {
      question: "How can I book a group package deal?",
      answer: (
        <>
          Booking is simple and convenient. Just follow along:
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>
              <strong>Pick what&apos;s right for you:</strong> Search by date,
              outlet, time slots, and capacity to suit your group&apos;s needs.
            </li>
            <li>
              <strong>Make it your own:</strong> Compare and personalise package
              to suit your tastes and preferences. Group deals benefit you
              because they are based on group sizes.
            </li>
            <li>
              <strong>Reserve your spot:</strong> Seal the deal and make your
              reservation final.
            </li>
            <li>
              <strong>Invite & show up to enjoy:</strong> Invite your guests to
              an exclusive experience. Get a personalized pre-approved guest
              list for a smooth and effortless check-in experience.
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "Can I customize a group package for my specific needs?",
      answer:
        "Yes, many venues offer customization options for group packages. You can often add special requests or modifications to suit your group's specific requirements. Please contact our customer service for assistance with customization options.",
    },
  ];

  return (
    <section className="w-full py-24 flex justify-center bg-black">
      <div className="w-full max-w-6xl px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-[#191624] rounded-full border border-gray-700">
            <span className="bg-gradient-to-r from-[#4B68FE] to-white bg-clip-text text-transparent font-medium text-sm md:text-base">
              We&apos;ve got you covered
            </span>
          </div>
          <div>
            <h2 className="heading-gradient text-xl md:text-[54px]  lg:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 rounded-lg px-6 overflow-hidden bg-gray-900/30"
            >
              <AccordionTrigger className="font-jakarta font-medium text-2xl py-4 text-white">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-manrope font-normal text-lg text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
