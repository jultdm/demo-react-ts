import { SyntheticEvent, useState } from "react";

import { useAppContext } from "../../../contexts";
import {setCatering as setCateringAC } from "../../../actions";

const Catering = () => {
    
    const [catering, setCatering] = useState<string>('');

    const { dispatch } = useAppContext();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (catering){
            dispatch(setCateringAC(catering));
        }
    };

    return (
        <form className='catering' onSubmit={handleSubmit}>
            <div className='caterings'>
                <div onClick={() => setCatering('commercial')} className={catering === "commercial" ? "caterings__item  caterings__item--check" : "caterings__item"}>
                    Restauration commerciale
                </div>
                <div onClick={() => setCatering('collective')} className={catering === "collective" ? "caterings__item  caterings__item--check" : "caterings__item"}>
                    Restauration collective
                </div>
            </div>
            <button type='submit' className={catering ? 'modal__button modal__button--active' : 'modal__button'}>VALIDER</button>
        </form>
    );
}
export default Catering;