import React, { useState } from 'react'
import './Frequent.css'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Prizeet?",
    answer:
      "Prizeet is a smart shopping platform that helps users make informed purchasing decisions by comparing gadgets, features, and prices from multiple trusted vendors. It simplifies the process of finding the best deals by gathering product and price information in one place.",
  },
  {
    id: 2,
    question: "How do I track my order after purchase?",
    answer:
      "Once your order has shipped, you will receive an email with your order ID, which you can use to view your order status and tracking information on your Prizeet account page—additionally, you can send and receive messages related to your order there.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "While we are working on integrating a secure and reliable payment system into the platform, all payments should currently be initiated via WhatsApp after you receive an official Prizeet invoice, and for added security you will also receive a two‑factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet—please ensure the email is indeed from team.prizeet@gmail.com before proceeding with any payment.",
  },
  {
    id: 4,
    question: "How can I contact customer support for assistance?",
    answer:
      "You can reach our customer support team via live chat on our website, by emailing support@prizeet.com, or by calling our support line on +2349114202172. Our team is available 24/7 to assist you with any inquiries.",
  },
]

const Frequent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenIndex(prev => (prev === id ? null : id))
  }

  return (
    <div className='frequent'>
      <div className='content'>
        <div className='main-content'>
          <div className='main-main-content'>
            <div className='main-main-main-content'>
              <div className='body1'>
                <h1>Frequently asked questions</h1>
              </div>
              <div className='body2'>
                <div className='content'>
                  <div className='content-main'>
                    <div className='body'>
                      {faqs.map(faq => (
                        <div key={faq.id}>
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            aria-expanded={openIndex === faq.id}
                            aria-controls={`answer-${faq.id}`}
                          >
                            <span>{faq.question}</span>
                            <svg
                              className={`icon ${openIndex === faq.id ? 'open' : ''}`}
                              width='52'
                              height='52'
                              viewBox='0 0 52 52'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M19 25.5H26L33 25.5'
                                stroke='#0080ff'
                                strokeWidth='2'
                                strokeLinecap='round'
                              />
                              <path
                                d='M26 18.5L26 25.5L26 32.5'
                                stroke='#0080ff'
                                strokeWidth='2'
                                strokeLinecap='round'
                              />
                            </svg>
                          </button>
                          <div
                            id={`answer-${faq.id}`}
                            className={`answer ${openIndex === faq.id ? 'open' : ''}`}
                          >
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p>
                      Can't find what you're looking for?{' '}
                      <a href='#'>
                        <span>Contact support</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frequent
