import React, { useState } from 'react';
import triviaData from './trivia-data';
import './trivia_game.css';
import Celebration from './celebration'; // Ensure you have this component ready

function Game() {
    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false,
        userAnswer: null,
        correct: null,
        questionsAnswered: 0,
        answered: false,
    });

    const { score, triviaIndex, isGameOver, userAnswer, correct, questionsAnswered, answered } = gameState;

    const TriviaQuestion = triviaData[triviaIndex] || {};
    const { correct_answer, incorrect_answers, question } = TriviaQuestion;

    const handleAnswerClick = (answer) => {
        if (!answered) {
            const isCorrect = answer === correct_answer;
            setGameState({
                ...gameState,
                userAnswer: answer,
                correct: isCorrect,
                score: isCorrect ? score + 1 : score,
                questionsAnswered: questionsAnswered + 1,
                answered: true,
            });
        }
    };
    const wonOrLoss = () => {
        if (score >= 7) { // Assuming score is the count of correctly answered questions
            return '😃'; // Happy emoji for scores of 70 or more
        } else {
            return '😢'; // Sad emoji for scores less than 70
        }
    };
    
    const handleNextQuestion = () => {
        if (triviaIndex < triviaData.length - 1) {
            setGameState({
                ...gameState,
                triviaIndex: triviaIndex + 1,
                userAnswer: null,
                correct: null,
                answered: false,
            });
        } else {
            setGameState({
                ...gameState,
                isGameOver: true,
            });
        }
    };

    return (
        <div className="Game">
            <div className="header-container">
                <h1>Rightly Answered: {score}</h1>
                <div className="coins-container">
                    <h1>Out of: {questionsAnswered}</h1>
                </div>
            </div>
            {!isGameOver && TriviaQuestion ? (
                <>
                    <p>{question}</p>
                    <div className='optionbox'>
                        {[correct_answer, ...incorrect_answers].sort().map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(answer)}
                                className='options'
                                disabled={answered}  // Disable buttons once answered
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    {userAnswer && (
                        <p className={correct ? "correct-answer" : "wrong-answer"}>
                            {correct ? "Correct Answer!" : `Wrong Answer! Correct was: ${correct_answer}`}
                        </p>
                    )}
                    <button onClick={handleNextQuestion} className="nextButton">Next Question</button>
                </>
            ) : (
                <>
                    <p>Game over<br/> Your Score: <br /> <span className='finalScore'>{score*10}/{questionsAnswered*10} </span><br /><br /> {wonOrLoss()} </p>
                    {score >= 7 && <Celebration />}
                </>
            )}
        </div>
    );
}

export default Game;
