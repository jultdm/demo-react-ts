import { useAppContext } from "../../../contexts";
import { startGame } from "../../../actions";

const WrongAnswers = () => {
    
    const { dispatch } = useAppContext();

    return (
        <div className='wrong-answers'>
            <h2  className='wrong-answers__title'>DOMMAGE !</h2>

            <div className='wrong-answers__text'>Vous N’AVEZ PAS donné les bonnes réponses.</div>
            
            <button onClick={() => dispatch(startGame())} className='modal__button'>J'ESSAIE À NOUVEAU</button>
        </div>
    );
};

export default WrongAnswers;