import React, { useEffect } from "react";
import Link from "next/link";
import netflix from "../public/assets/netflix.png";
import Button from "./Button";

const Header = () => {
     return (
         <header className="header__main">
             <div className="header__logo">
                    <img src={netflix.src} alt="netflix" />
             </div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                    <li>
                        <Button type="button" classes="btn btn__color-red" function={() => console.log("islogged")} title="S'identidier" />
                    </li>
                    </li>
                </ul>
            </nav>
         </header>
     )
}

export default Header;