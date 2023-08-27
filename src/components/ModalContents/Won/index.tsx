import { PrizeDetailInterface } from '../../../contexts';

const Won = ({prizeDetail} : {prizeDetail: PrizeDetailInterface|null}) => (
    <div className='won'>
        <h2  className='won__title'>BRAVO !</h2>

        <div className='won__subtitle'>Vous venez de gagner {prizeDetail?.title}.</div>
        {
            prizeDetail?.text && (
                <div className='won__text'>
                    {prizeDetail.text}
                </div>
            )
        }
        <div className='won__text'>
            Vous allez recevoir un mail de confirmation,<br />
            surveillez votre boîte mail.
        </div>
    </div>
);

export default Won;