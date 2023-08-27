import { useAppContext } from "../../../contexts";

import { changePage, startGame, setVideoShowStatus } from "../../../actions";

import imageVideo from "../../../img/video.png";
import usePhase from "../../../hooks/usePhase";

const Home = () => {
    usePhase();
    const {state, dispatch} = useAppContext();
    const { game } = state;
    return (
        <div className='home'>
                <div className='home-top'>
                    <h1 className='home-top__title'>
                        <span>CÉLÉBREZ LE</span> XXXXXX XX XXXXXXX
                    </h1>
                    <h2 className='home-top__subtitle'>
                        <span>&</span> ÉVADEZ-VOUS <span>AVEC XXXX XXXXXXXX</span>
                    </h2>
                </div>
                <div className='home-game'>
                    {game.phase === 'ok' && <button className='home-game__button' onClick={() => dispatch(startGame())}>JE PARTICIPE</button>}
                    {game.phase === 'after' && <button className='home-game__button'>Opération terminée</button>}                    
                </div>
                <div className='home-video'>
                    <h2 className='home-video__title'>
                        vidéo recettes
                    </h2>
                    <div className="home-video__video">
                        <a className="home-video__link" onClick={() => dispatch(setVideoShowStatus(true))}>
                            <img src={imageVideo} alt="vidéo recettes" />
                        </a>                                             
                    </div>
                    <p className='home-video__text'>
                        Le chef XXXX du restaurant<br />
                        XXXXXX vous dévoile<br />
                        2 recettes originales et gourmandes<br />
                        spéciales XXXXX XXXXX.                        
                    </p>
                </div>
                <div className='home-products'>
                    <h2 className='home-products__title'>
                        découvrez nos 4 menus du<br />
                        <span>xxxx xxxx</span> à télécharger !
                    </h2>
                    <a onClick={() => dispatch(changePage('download'))} className='home-products__button'>je télécharge<br />mon menu</a>

                    <div className='link-products'>
                        <a href='#' target='_blank' className='link-products__laitcoco'/>
                        <a href='#' target='_blank' className='link-products__chili'/>
                        <a href='#' target='_blank' className='link-products__cremecoco'/>
                        <a href='#' target='_blank' className='link-products__satay'/>
                        <a href='#' target='_blank' className='link-products__curry'/>
                        <a href='#' target='_blank' className='link-products__nouilles'/>
                    </div>
                </div> 

            </div>
    );
};

export default Home;