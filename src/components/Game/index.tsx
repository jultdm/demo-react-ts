import questions from '../../data/questions';
import {useAppContext} from '../../contexts';

import { stopGame } from '../../actions';

import { areCorrectAnswers } from '../../selectors/game';

import Modal from '../Modal';
import Questions from '../ModalContents/Questions';
import Form from '../ModalContents/Form';
import Won from '../ModalContents/Won';
import Lost from '../ModalContents/Lost';
import WrongAnswers from '../ModalContents/WrongAnswers';

const Game = () => {
    const {state, dispatch} = useAppContext();
    const { game } = state;

    const dispatchStopGame = () => {
        dispatch(stopGame());
    };

    const correctAnswers = areCorrectAnswers(questions, game.answers);  

    return (
        <>
            {game.answers.length < questions.length && (
                <Modal 
                title={<>RÉPONDEZ AUX {questions.length} QUESTIONS SUIVANTES<br/>POUR PARTICIPER À NOTRE JEU</>}
                onClose={dispatchStopGame}
                >
                <Questions />
                </Modal>
            )}
            {game.answers.length === questions.length && !correctAnswers && (
                <Modal 
                    onClose={dispatchStopGame}
                >
                    <WrongAnswers />
                </Modal>
            )}
            {game.answers.length === questions.length && correctAnswers && game.prize === null && (
                <Modal 
                    title={<>Remplissez le formulaire ci-dessous<br/>POUR VALIDER VOTRE PARTICIPATION</>}
                    onClose={dispatchStopGame}
                >
                    <Form />
                </Modal>
            )}
            {game.prize === 0 && (
                <Modal 
                    onClose={dispatchStopGame}
                >
                    <Lost />
                </Modal>
            )}
            {game.prize && game.prize >= 1 && (
                <Modal 
                    onClose={dispatchStopGame}
                >
                    <Won prizeDetail={game.prizeDetail}/>
                </Modal>
            )}

        </>
    );
};

export default Game;