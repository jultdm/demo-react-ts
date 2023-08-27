import {useAppContext} from '../../contexts';

import { setVideoShowStatus } from "../../actions";

import useScroll from "../../hooks/useScroll";

import Layout from '../Layout';
import Home from '../Pages/Home';
import Download from '../Pages/Download';
import Modal from '../Modal';
import Catering from '../ModalContents/Catering';
import Video from '../ModalContents/Video';
import Game from '../Game';

import LegalNotices from '../Pages/LegalNotices';
import Rules from '../Pages/Rules';

function App() {
  const {state, dispatch} = useAppContext();
  const { page, catering, game, isVideoShown } = state;

  const appRef = useScroll([page, game.active, isVideoShown]);

  return (
        <div className="app" ref={appRef}>     
            <Layout>
                {page === 'home' && <Home />}
                {page === 'download' && <Download />}      
                {page === 'legal' && <LegalNotices />}
                {page === 'rules' && <Rules />}        
            </Layout>            
            {
              !catering && (
                <Modal 
                  title={<>CHOISISSEZ VOTRE TYPE DE RESTAURATION,<br/>POUR DÉCOUVRIR VOTRE CONTENU PERSONNALISÉ :</>}
                >
                  <Catering />
                </Modal>
              )
            }
            {
              game.active && <Game />
            }
            {
              isVideoShown && 
                <Modal 
                  onClose={() => dispatch(setVideoShowStatus(false))}
                >
                  <Video />
                </Modal>
            }
        </div>
  );
}

export default App;
