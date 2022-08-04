import React, { useState } from 'react'
import './Header.css'
import { AiFillApple } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
function Header() {
    const [openSidebar, setOpenSidebar] = useState(true);
    const openHamburgermenuToggle = (e) => {
        if (openSidebar === true) {
            const line_one = document.querySelector(".line_one")
            line_one.classList.add("hamburger_line_one")
            const line_two = document.querySelector(".line_two")
            line_two.classList.add("hamburger_line_two")
            const header = document.querySelector(".header")
            header.classList.add("header_show")
            setOpenSidebar(false)
        } else {
            const line_one = document.querySelector(".line_one")
            line_one.classList.remove("hamburger_line_one")
            const line_two = document.querySelector(".line_two")
            line_two.classList.remove("hamburger_line_two")
            const header = document.querySelector(".header")
            header.classList.remove("header_show")
            setOpenSidebar(true)
        }
    }
    return (
        <div className={`header`}>
            <div className="header_container">
                <ul className="header_collection header_collection_link ">
                    <li className="header_item"><NavLink to="/"><AiFillApple fontSize={22} /></NavLink></li>
                    <li className="header_item"><NavLink to="/store">Store</NavLink> </li>
                    <li className="header_item"> <NavLink to="/mac">Mac</NavLink> </li>
                    <li className="header_item"> <NavLink to="/ipad">iPad </NavLink></li>
                    <li className="header_item">iPhone </li>
                    <li className="header_item">Watch </li>
                    <li className="header_item">AirPods </li>
                    <li className="header_item"><NavLink to="/tv&home">TV & Home</NavLink>  </li>
                    <li className="header_item"><NavLink to="/onlyonapple">Only on Apple  </NavLink> </li>
                    <li className="header_item">Accessories</li>
                    <li className="header_item">Support </li>
                    <li className="header_item"><BiSearchAlt2 /></li>
                    <li className="header_item"><BsBag /></li>
                </ul>
                <ul className="header_collection2 header_collection_hamburger">
                    <li onClick={openHamburgermenuToggle} className="header_item header_item_hamburger   wrapper_hamburger_menu ">
                        <div className="hamburger_line line_one  "></div>
                        <div className="hamburger_line line_two "></div>
                    </li>
                    <li className="header_item header_item_hamburger"><AiFillApple /></li>
                    <li className="header_item header_item_hamburger"><BsBag /></li>
                </ul>
            </div>
        </div>
    )
}

export default Header