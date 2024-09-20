"use client";
import { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleOpen}
        className="w-full text-left py-4 text-lg font-semibold text-gray-800 flex justify-between"
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="py-2 text-gray-600 transition-all duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQList: React.FC = () => {
  const faqs = [
    {
      question: "What makes the Subscription service unique?",
      answer:
        "This service offers a direct negotiation opportunity with manufacturers right from the initial stages, eliminating intermediaries. This not only saves time and reduces search costs for partners or products but also ensures a transparent process for the buyer.",
    },
    {
      question: "How can I order Subscription service?",
      answer:
        "To express your interest in the Subscription plan, please click on the Request Subscription plan button and fill out the form or send us an email at ",
    },
    {
      question: "What happens after ordering a Subscription plan?",
      answer:
        "After payment for a Subscription plan is received, Pipelinepharma's dedicated team processes all customer requests and promptly contacts the corresponding suppliers. Upon receiving confirmation of the supplier's interest in the business case, both parties are provided with an introductory letter. This letter serves as a formal initiation of direct communication between the customer and the supplier.",
    },
    {
      question:
        "What's the likelihood of a buyer finding the right manufacturer after purchasing a Subscription plan? ",
      answer:
        "The Subscription plan provides you access to all manufacturers with products and dossiers on the Marketplace. The probability of success depends not on Pipelinepharma, but on the specific manufacturer's interest in your specific request, including the product, deal type, market, and planned forecast.",
    },
    {
      question:
        "Can a successful transaction be guaranteed after buying a Subscription plan? ",
      answer:
        "The Subscription plan's primary aim is to empower the buyer to initiate direct negotiations with the manufacturer promptly. The outcome of these negotiations is entirely within the buyer's control, and the guarantee of success rests in the hands of the buyer. Pipelinepharma does not participate in or influence the negotiations.",
    },
    {
      question: "Can we obtain the official documentation for the service? ",
      answer:
        "Certainly, we can provide you with an invoice for the requested services. Additionally, if required, we are able to provide a 1-page agreement to meet any legal requirements.",
    },
  ];

  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Do you still have questions?</h2>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
