import { useState } from 'react';

const TeamTypeQuestions = () => {
  const [teamType, setTeamType] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleTeamTypeChange = (event) => {
    setTeamType(event.target.value);
    if (event.target.value === 'development') {
      setQuestions([
        { question: 'What is the team\'s mission?', answer: '' },
        { question: 'What are the team\'s goals?', answer: '' },
      ]);
    } else if (event.target.value === 'management') {
      setQuestions([
        { question: 'What is the team\'s objective?', answer: '' },
        { question: 'What are the team\'s key performance indicators?', answer: '' },
      ]);
    }
  };

  return (
    <div>
      <h1>Team Type Questions</h1>
      <select value={teamType} onChange={handleTeamTypeChange}>
        <option value="">Select a team type</option>
        <option value="development">Development</option>
        <option value="management">Management</option>
      </select>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <input type="text" value={question.answer} onChange={(event) => setQuestions((prevQuestions) => prevQuestions.map((prevQuestion, prevIndex) => (prevIndex === index ? { ...prevQuestion, answer: event.target.value } : prevQuestion)))} />
        </div>
      ))}
    </div>
  );
};

export default TeamTypeQuestions