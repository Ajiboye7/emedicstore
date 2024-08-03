import React from 'react';
import TextTitle from './TextTitle';
import { useState } from 'react';
import { QuestionAnswer } from '@/constants';

const QA = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(QuestionAnswer[0]?.id)
  const handleQuestionClick =(id: number) =>{
    setSelectedQuestionId(id);
  }

  const selectedQA =  QuestionAnswer.find(qa => qa.id === selectedQuestionId)
  const selectedAnswer = selectedQA ? selectedQA.answer : 'Click question to display answer.'
  return (
    <section>
      <div>
        <p>Things YOU MAY WANT TO KNOW</p>
        <TextTitle>Got Questions?</TextTitle>
        <div className='question'>
          {QuestionAnswer.map(qa=>(
            <button
            key={qa.id}
             className= {`text-left ${qa.id === selectedQuestionId ? 'bg-blue-100' : ''}`}
             onClick={() => handleQuestionClick(qa.id)}
            >
              {qa.question}
            </button>
          ))}
        </div>
        <div className='answer'>

        </div>
      </div>
    </section>
  );
}

export default QA;
