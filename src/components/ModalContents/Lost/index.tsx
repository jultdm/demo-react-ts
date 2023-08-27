import { useAppContext } from "../../../contexts";
import { changePage, stopGame } from '../../../actions';

const Lost = () => {
    
    const { dispatch } = useAppContext();

    return (
        <div className='lost'>
            <h2  className='lost__title'>DOMMAGE !</h2>

            <div className='lost__text'>Vous N’AVEZ PAS GAGNÉ.</div>

            <div className='lost__text'>
                MAIS TOUT N’EST PAS PERDU,<br />
                LAISSEZ-VOUS INSPIRER PAR NOS MENUS<br />
                POUR CÉLÉBREZ LE NOUVEL AN CHINOIS !<br />
            </div>
            
            <button onClick={ (e) => {dispatch(stopGame()); dispatch(changePage('download'))}}className='modal__button'>DÉCOUVRIR LES MENUS</button>
        </div>
    );
};

export default Lost;
