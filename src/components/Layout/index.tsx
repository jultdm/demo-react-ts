import { useAppContext } from "../../contexts";
import { changePage } from "../../actions";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const {dispatch} = useAppContext();
    return (
        <div className='page'>
            <header>
                <a href="#" onClick={() => dispatch(changePage('home'))} className="home__link"></a>
            </header>
            {children}
            <footer className='footer'>
                <nav className="footer-nav">
                    <a href="#" onClick={() => dispatch(changePage('rules'))} className="footer-nav__link">RÈGLEMENT DU JEU</a>
                    <a href="#" onClick={() => dispatch(changePage('legal'))} className="footer-nav__link">MENTIONS LÉGALES</a>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;