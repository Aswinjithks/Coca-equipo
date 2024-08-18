import React, { useState } from 'react';
import "./faq.css"
import questions from '@data/faqQuestions';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('General');

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="faq-container">
            <div className="content">
                <div className="faq-header">
                    <h1 className="header-text">Frequently Asked Questions</h1>
                    <div className="search-box">
                        <input type="text" placeholder="Type your question here" className="input" />
                        <button className="search-button">Search</button>
                    </div>
                </div>
                <div className="faq-body">
                    <div className="faq-categories">
                        {['General', 'Transaction', 'Payment', 'Other'].map(category => (
                            <button
                                key={category}
                                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="faq-questions">
                        {questions
                            .filter(q => q.category === activeCategory)
                            .map((question, index) => (
                                <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                                    <div className="question" onClick={() => toggleFAQ(index)}>
                                        <h6>{question.title}</h6>
                                        <span>{openIndex === index ? '-' : '+'}</span>
                                    </div>
                                    {openIndex === index && <p className="answer">{question.answer}</p>}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
