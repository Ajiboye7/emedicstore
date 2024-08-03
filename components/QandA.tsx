'use client'
import React from 'react';
import { useState } from "react";

const questionsAnswers: {
    id: number;
    question: string;
    answer: string;
  }[] = [
    { id: 1, question: "What is Next.js?", answer: "Next.js is a React framework..." },
    { id: 2, question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework..." },
    { id: 3, question: "What is Redux?", answer: "Redux is a state management tool for JavaScript apps..." },
    { id: 3, question: "What is Redux?", answer: "Redux is a state management tool for JavaScript apps..." },
    { id: 3, question: "What is Redux?", answer: "Redux is a state management tool for JavaScript apps..." },
    { id: 3, question: "What is Redux?", answer: "Redux is a state management tool for JavaScript apps..." },
    { id: 3, question: "What is Redux?", answer: "Redux is a state management tool for JavaScript apps..." },
    // Add more questions and answers here
  ];

const QandA = () => {
    const [selectedQuestionId, setSelectedQuestionId] = useState(questionsAnswers[0]?.id);

    const handleQuestionClick = (id: number) => {
      setSelectedQuestionId(id);
    };
  
    const selectedQA = questionsAnswers.find(qa => qa.id === selectedQuestionId);
    const selectedAnswer = selectedQA ? selectedQA.answer : "Please select a question.";
  
    return (
      <div className="flex flex-col md:flex-row py-16 container mx-auto px-4 md:px-12">
        <div className="md:w-1/3 flex flex-col gap-4">
          {questionsAnswers.map(qa => (
            <button
              key={qa.id}
              className={`p-4 border rounded-lg text-left ${qa.id === selectedQuestionId ? 'bg-blue-100' : ''}`}
              onClick={() => handleQuestionClick(qa.id)}
            >
              {qa.question}
            </button>
          ))}
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8 p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Answer</h2>
          <p>{selectedAnswer}</p>
        </div>
      </div>
    );
}

export default QandA;
