import React, { useEffect } from "react";
import Link from "next/link";
import netflix from "../public/assets/netflix.png";
const Header = () => {
     return (
         <header className="header__main">
             <div className="header__logo">
                    <img src={netflix.src} alt="netflix" />
             </div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link href="/home">
                            <a className="nav__link">Accueil</a>
                        </Link>
                    </li><li className="nav__item">
                        <Link href="/movies">
                            <a className="nav__link">Films</a>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/wishlist">
                            <a className="nav__link">wishlist</a>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <li>
                            <Link href="/login">
                                <button type="button" className="btn btn__color-red" title="S'identidier">
                                    S'IDENTIFIER
                                </button>
                            </Link>
                            
                        </li>
                    </li>
                    
                </ul>
            </nav>
         </header>
     )
}

export default Header;