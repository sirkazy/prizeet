import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Frequent.css';
const faqs = [
    {
        id: 1,
        question: "What is Prizeet?",
        answer: "Prizeet is a smart shopping platform that helps users make informed purchasing decisions by comparing gadgets, features, and prices from multiple trusted vendors. It simplifies the process of finding the best deals by gathering product and price information in one place.",
    },
    {
        id: 2,
        question: "How do I track my order after purchase?",
        answer: "Once your order has shipped, you will receive an email with your order ID, which you can use to view your order status and tracking information on your Prizeet account page—additionally, you can send and receive messages related to your order there.",
    },
    {
        id: 3,
        question: "What payment methods do you accept?",
        answer: "While we are working on integrating a secure and reliable payment system into the platform, all payments should currently be initiated via WhatsApp after you receive an official Prizeet invoice, and for added security you will also receive a two‑factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet—please ensure the email is indeed from team.prizeet@gmail.com before proceeding with any payment.",
    },
    {
        id: 4,
        question: "How can I contact customer support for assistance?",
        answer: "You can reach our customer support team via live chat on our website, by emailing support@prizeet.com, or by calling our support line on +2349114202172. Our team is available 24/7 to assist you with any inquiries.",
    },
];
const Frequent = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (id) => {
        setOpenIndex(prev => (prev === id ? null : id));
    };
    return (_jsx("div", { className: 'frequent', children: _jsx("div", { className: 'content', children: _jsx("div", { className: 'main-content', children: _jsx("div", { className: 'main-main-content', children: _jsxs("div", { className: 'main-main-main-content', children: [_jsx("div", { className: 'body1', children: _jsx("h1", { children: "Frequently asked questions" }) }), _jsx("div", { className: 'body2', children: _jsx("div", { className: 'content', children: _jsxs("div", { className: 'content-main', children: [_jsx("div", { className: 'body', children: faqs.map(faq => (_jsxs("div", { children: [_jsxs("button", { onClick: () => toggleFAQ(faq.id), "aria-expanded": openIndex === faq.id, "aria-controls": `answer-${faq.id}`, children: [_jsx("span", { children: faq.question }), _jsxs("svg", { className: `icon ${openIndex === faq.id ? 'open' : ''}`, width: '52', height: '52', viewBox: '0 0 52 52', xmlns: 'http://www.w3.org/2000/svg', children: [_jsx("path", { d: 'M19 25.5H26L33 25.5', stroke: '#0080ff', strokeWidth: '2', strokeLinecap: 'round' }), _jsx("path", { d: 'M26 18.5L26 25.5L26 32.5', stroke: '#0080ff', strokeWidth: '2', strokeLinecap: 'round' })] })] }), _jsx("div", { id: `answer-${faq.id}`, className: `answer ${openIndex === faq.id ? 'open' : ''}`, children: _jsx("p", { children: faq.answer }) })] }, faq.id))) }), _jsxs("p", { children: ["Can't find what you're looking for?", ' ', _jsx("a", { href: '#', children: _jsx("span", { children: "Contact support" }) })] })] }) }) })] }) }) }) }) }));
};
export default Frequent;
