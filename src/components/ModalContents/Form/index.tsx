import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';

import api from '../../../services/api';

import Input from '../../Field/Input';
import Select from '../../Field/Select';
import Checkbox from '../../Field/Checkbox';
import { useState } from 'react';
import { useAppContext } from '../../../contexts';
import { setPrize, setPrizeDetail, changePage, stopGame } from '../../../actions';
  
const Form = () => {
    
    const { dispatch } = useAppContext();

    const [errors, setErrors] = useState<Array<string>|null>(null);

    const {
        register,
        handleSubmit,
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        
        const response = await api.play(data);
        
        if (response.errors != null) {
            setErrors(response.errors);
        }

        if (response.status === 1){
            dispatch(setPrize(response.prize));
            dispatch(setPrizeDetail(response.prizeDetail));
        }
        
    };
    
    return (
        <>
            {errors && (
                <div className='form__errors'>
                    {errors.map(
                        (error) => <div key={error} className="form__error">{error}</div>
                    )}
                </div>
            )}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form__col'>
                    <h2 className='form__col-title'>À propos de vous...</h2>       

                    <Input name='firstName' register={register} label='Prénom' />

                    <Input name='lastName' register={register} label='Nom'/>

                    <Select name='activity' register={register}>
                        <option value=''>Secteur d'activité</option>
                        <option value='Collectivité entreprise'>Collectivité entreprise</option>
                        <option value='Collectivité enseignement'>Collectivité enseignement</option>
                        <option value='Collectivité santé/social'>Collectivité santé/social</option>
                        <option value='Grossiste et Distributeur RHF'>Grossiste et Distributeur RHF</option>
                        <option value='Restaurant traditionnel'>Restaurant traditionnel</option>
                        <option value='Restaurant rapide/à emporter'>Restaurant rapide/à emporter</option>
                        <option value='Restaurant à thèmes'>Restaurant à thèmes</option>
                        <option value='Traiteur'>Traiteur</option>
                        <option value='Autre'>Autre</option>
                    </Select>

                    <Select name='position' register={register}>
                        <option value=''>Fonction</option>
                        <option value='Chef/commis'>Chef/commis</option>
                        <option value='Gérant/Manager'>Gérant/Manager</option>
                        <option value='Grossiste et distributeurs RHF'>Grossiste et distributeurs RHF</option>
                        <option value='Traiteur'>Traiteur</option>
                        <option value='Autre'>Autre</option>
                    </Select>

                    <Input name='phone' register={register} label='Téléphone'/>

                    <Input name='email' register={register} label='Email'/>

                    <nav className='form__nav'>
                        <a className='form__nav-link'  href="/reglement_NAC_2022.pdf" target="_blank">MODALITÉS</a>
                         - 
                         <a className='form__nav-link' onClick={() => {dispatch(stopGame()); dispatch(changePage('legal'))}}>MENTIONS LÉGALES</a>
                    </nav>
                    
                    <p className='form__asterisk'>
                        *Offre réservée à un produit/personne sur la durée de  l’opération, voir les modalités 
                    </p>
                </div>
                <div className='form__col'>
                    <h2 className='form__col-title'>Et de votre établissement...</h2>

                    <Input name='company' register={register} label="Nom de l'établissement"/>

                    <Input name='siret' register={register} label='SIRET' />

                    <Select name='how' register={register}>
                        <option value=''>Comment avez-vous connu cette offre ?</option>
                        <option value='Annonce sur un autre site'>Annonce sur un autre site</option>
                        <option value='Grâce à un collègue/connaissance'>Grâce à un collègue/connaissance</option>
                        <option value='Par e-mail'>Par e-mail</option>
                        <option value='Presse'>Presse</option>
                        <option value='Autre'>Autre</option>
                    </Select>
                                                            
                    <p className='form__required'>
                        Tous les champs sont obligatoires.
                    </p>

                    <div className='form__spacer'>
                        <Checkbox name='optin' register={register} label='J’accepte de recevoir des informations de la part de xxxxxxxxx France.' />                    
                    </div>

                    <div className='form__centerer'>
                        <button type='submit' className='modal__button modal__button--active'>ENVOYER</button>
                    </div>
                </div>


            </form>
        </>
    );
};

export default Form;
