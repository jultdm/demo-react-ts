const CollectiveDownload = () => (
    <div className='download download--collective'>            
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
                        SALADE DE XXXXXXXXX & XXXXX DE XXXX
                    </li>
                    <li className='menu__meal'>
                        XXX DE XXXXXX AU XXXX<br />
                        & XXXXXXX SAUCE XXXXX-XXXX
                    </li>
                    <li className='menu__meal'>
                        XXXXX & TARTARE XXXXXX/XXXXXXX
                    </li>
                </ul>
                <a href="/pdf/restauration_collective_menu1.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--right menu--2">
                <h2 className='menu__title'>
                    MENU 2
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        CROQUETTEs DE XXXXX<br />
                        & XXXXXXX XXXXXX
                    </li>
                    <li className='menu__meal'>
                        SUPRêMES DE XXXXXXX<br />
                        SAUCE XXXXX & RIZ XXXX
                    </li>
                    <li className='menu__meal'>
                        MOUSSE AU XXXX DE XXXX & XXX
                    </li>
                </ul>
                <a href="/pdf/restauration_collective_menu2.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--3">
                <h2 className='menu__title'>
                    MENU 3
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        CRèME DE XXXXX AU XXXXXX
                    </li>
                    <li className='menu__meal'>
                        XXXXXXX DE XXX XXXXX & XXXXXX VERT
                    </li>
                    <li className='menu__meal'>
                        VERRINE XXXXX & XXX XXXXX
                    </li>
                </ul>
                <a href="/pdf/restauration_collective_menu3.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>

            <div className="menu menu--right menu--4">
                <h2 className='menu__title'>
                    MENU 4
                </h2>
                <ul className='menu__meals'>
                    <li className='menu__meal'>
                        SALADE DE XXXXXXX DE XXX AU XXXXX XXXX
                    </li>
                    <li className='menu__meal'>
                        XXXXX XXXXXXXX
                    </li>
                    <li className='menu__meal'>
                        XXXXX XXX XXX & AGRUMES
                    </li>
                </ul>
                <a href="/pdf/restauration_collective_menu4.pdf" target="_blank" className='menu__download'>TÉLÉCHARGER</a>
            </div>
        </div>
);

export default CollectiveDownload;