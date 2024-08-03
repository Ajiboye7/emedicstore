
'use client'
import React from 'react';
import TextTitle from './TextTitle';
import { useState } from 'react';
import { QuestionAnswer } from '@/constants';

const QA = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null)
  const handleQuestionClick =(id: number) =>{
    setSelectedQuestionId(id);
  }

  const selectedQuestion =  QuestionAnswer.find(qa => qa.id === selectedQuestionId)
  const selectedAnswer = selectedQuestion ? selectedQuestion.answer : 'Click question to display answer.'
  return (
    <section>
      <div className='max-w-[1800px] mx-auto'>
        <p>Things YOU MAY WANT TO KNOW</p>
        <TextTitle>Got Questions?</TextTitle>
        <div className='flex gap-20 mx-auto max-h-[700px]'>
        <div className='question flex flex-col gap-8 flex-1 max-w-[800px] overflow-y-scroll max-h-full hide-scrollbar'>
          {QuestionAnswer.map(qa=>(
            <button
            key={qa.id}
            className={`p-8 border border-primaryButtonBg rounded-3xl text-left text-2xl font-semibold text-categoryTextTitle ${qa.id === selectedQuestionId ? 'bg-primaryButtonBg text-white' : ''}`}
             onClick={() => handleQuestionClick(qa.id)}
            >
              {qa.question}
            </button>
          ))}
        </div>
        <div className='answer text-white font-semibold border rounded-3xl flex flex-1 items-center justify-center max-w-[800px] p-10 text-3xl text-center leading-relaxed bg-gradient-to-r from-primaryGradientEnd to-primaryGradientStart'>
          <p>{selectedAnswer}</p>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default QA;



/*'use client'
import React from 'react';
import TextTitle from './TextTitle';
import { useState } from 'react';
import { QuestionAnswer } from '@/constants';

const QA = () => {
  // Initialize selectedQuestionId with null
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);
  
  const handleQuestionClick = (id: number) => {
    setSelectedQuestionId(id);
  }

  // Find the selected question based on the selectedQuestionId
  const selectedQuestion = QuestionAnswer.find(qa => qa.id === selectedQuestionId);

  // Determine the answer to display
  const selectedAnswer = selectedQuestion ? selectedQuestion.answer : 'Click question to display answer.';

  return (
    <section>
      <div className='max-w-[1800px] mx-auto'>
        <p>Things YOU MAY WANT TO KNOW</p>
        <TextTitle>Got Questions?</TextTitle>
        <div className='flex gap-20 mx-auto max-h-[700px]'>
          <div className='question flex flex-col gap-8 flex-1 max-w-[800px] overflow-y-scroll max-h-full hide-scrollbar'>
            {QuestionAnswer.map(qa => (
              <button
                key={qa.id}
                className={`p-8 border border-primaryButtonBg rounded-3xl text-left text-2xl font-semibold text-categoryTextTitle ${qa.id === selectedQuestionId ? 'bg-primaryButtonBg text-white' : ''}`}
                onClick={() => handleQuestionClick(qa.id)}
              >
                {qa.question}
              </button>
            ))}
          </div>
          <div className='answer text-white font-semibold border rounded-3xl flex flex-1 items-center justify-center max-w-[800px] p-10 text-3xl text-center leading-relaxed bg-gradient-to-r from-primaryGradientEnd to-primaryGradientStart'>
            <p>{selectedAnswer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QA;*/

