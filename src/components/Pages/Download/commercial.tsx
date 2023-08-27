const CommercialDownload = () => (
    <div className='download download--commercial'>            
            <h1 className='download__title'>
                découvrez tous nos menus<br />
                <span>XXXXXX XX XXXXXXX</span> à télécharger !
            </h1>

            <div className="menu menu--1">
                <h2 className='menu__title'>
                    MENU 1
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        BROCHETTES DE XXXXXXX XXXX
                    </li>
                    <li className='menu__meal'>
                        XXX DE XXXXXXX EN CROûTE DE XXXXXX XXXXX,<br />
                        MOUSSELINE DE XXXX XXXXXX à LA VANILLE
                    </li>
                    <li className='menu__meal'>
                        XXX SUCRé, CHANTILLY XXXX & XXXXXX
                    </li>
                </ul>
                <a href="/pdf/restauration_commerciale_menu1.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--right menu--2">
                <h2 className='menu__title'>
                    MENU 2
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        FRITES DE XXXXXX & TARTARE XXXXX/XXXXX
                    </li>
                    <li className='menu__meal'>
                        XXXX XXXXX D’AGNEAU, XXXXXX,<br />
                        LEGUMES XXXXXXXXX & POMMES DE TERRE
                    </li>
                    <li className='menu__meal'>
                        CARPACCIO XXXXXX, <br />
                        CHANTILLY CHOCOLAT-CREME DE XXXX
                    </li>
                </ul>
                <a href="/pdf/restauration_commerciale_menu2.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--3">
                <h2 className='menu__title'>
                    MENU 3
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        SALADE DE XXXXXX VINAIGRETTE XXXX
                    </li>
                    <li className='menu__meal'>
                        BURGER DE XXXXX XXXXX
                    </li>
                    <li className='menu__meal'>
                        Mousse au XXXX de XXXX<br />
                        et aux fruits 
                    </li>
                </ul>
                <a href="/pdf/restauration_commerciale_menu3.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--right menu--4">
                <h2 className='menu__title'>
                    MENU 4
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        Salade de carottes XXXX, sauce XXXX XXXXX                        
                    </li>
                    <li className='menu__meal'>
                        XXXXX D’ÉPEAUTRE, BROCHETTE DE XXXX<br />
                        & XXXXXX XXXXX
                    </li>
                    <li className='menu__meal'>
                        SMOOTHIE XXXX & BROCHETTE D'XXXXXXX<br />
                        AU XXXXX XXXX
                    </li>
                </ul>
                <a href="/pdf/restauration_commerciale_menu4.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>
        </div>
);

export default CommercialDownload;