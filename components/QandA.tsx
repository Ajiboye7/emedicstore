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
    { id: 4, question: "What is React?", answer: "React is a JavaScript library for building user interfaces..." },
    { id: 5, question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development..." },
    { id: 6, question: "What is TypeScript?", answer: "TypeScript is a typed superset of JavaScript..." },
    { id: 7, question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine..." },
    { id: 8, question: "What is Express.js?", answer: "Express.js is a web application framework for Node.js..." },
    { id: 9, question: "What is MongoDB?", answer: "MongoDB is a NoSQL database..." },
    { id: 10, question: "What is GraphQL?", answer: "GraphQL is a query language for APIs..." },
    { id: 11, question: "What is REST?", answer: "REST is an architectural style for designing networked applications..." },
    { id: 12, question: "What is HTML?", answer: "HTML is the standard markup language for creating web pages..." },
    { id: 13, question: "What is CSS?", answer: "CSS is a stylesheet language used for describing the presentation of a document..." },
    { id: 14, question: "What is Docker?", answer: "Docker is a platform for developing, shipping, and running applications..." },
  ];

const QandA = () => {
    const [selectedQuestionId, setSelectedQuestionId] = useState(questionsAnswers[0]?.id);

  const handleQuestionClick = (id: number) => {
    setSelectedQuestionId(id);
  };

  const selectedQA = questionsAnswers.find(qa => qa.id === selectedQuestionId);
  const selectedAnswer = selectedQA ? selectedQA.answer : "Please select a question.";

  return (
    <div className="flex flex-col md:flex-row py-16 container mx-auto px-4 md:px-12 max-h-[700px]">
      <div className="md:w-1/3 flex flex-col gap-4 overflow-y-scroll max-h-full hide-scrollbar">
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
