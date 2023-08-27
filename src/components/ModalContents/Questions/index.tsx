import { SyntheticEvent, useEffect, useState } from "react";

import { useAppContext } from "../../../contexts";
import { addAnswer } from "../../../actions";

import questions from "../../../data/questions";

const Questions = () => {
    const { state, dispatch } = useAppContext();

    const question = questions[state.game.answers.length];

    const [currentAnswer, setCurrentAnswer] = useState<number|null>(null);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (currentAnswer !== null){
            dispatch(addAnswer(currentAnswer));
        }
    };

    useEffect(
        () => {
            setCurrentAnswer(null);
        },
        [question],
    );

    return (
        <form className='question' onSubmit={handleSubmit}>
            <h2 className='question__title'>
                {question.label.map(
                    (line) => <span key={line}>{line}<br/></span>
                )}
            </h2>
            <div className="question__answers">
                {question.answers.map(
                    (answer, index) => (
                        <div 
                            key={answer}
                            className={currentAnswer === index ? 'answer answer--check' : 'answer' }
                            onClick={() => setCurrentAnswer(index)}
                        >
                            {answer}
                        </div>
                    )
                )}
            </div>
            <button type="submit"  className={currentAnswer === null ? 'modal__button' : 'modal__button modal__button--active'}>{question.buttonLabel}</button>
        </form>
    );
};

export default Questions;