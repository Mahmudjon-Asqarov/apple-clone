import React, { useState } from 'react'
import './Mac.css'
import { Static_Mac_Header, Static_Mac_Heros, Static_Macbook, Static_iMac} from '../../static/static_mac'

import { BiChevronRight } from 'react-icons/bi'


const Mac = () => {

    const[choice, setChoice] = useState(true)

    return (
        <div className="mac">
            <div className="mac_header">
                <ul>
                    {
                        Static_Mac_Header?.map((item) => (
                            <li> <img width="103px" height="54" src={item.img} alt="" /> <p>{item.tittle}</p></li>
                        ))
                    }
                </ul>
            </div>
            <div className="sale_context">
                    <span>Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*</span>
                    <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{marginTop: "3px"}}/></a>
            </div>
            {
                Static_Mac_Heros?.map((heros) => (
                    <div className="mac_heros">
                        <h1>{heros.banner_title}</h1>
                        <h3>{heros.quote}</h3>
                        <p>{heros.price}</p>
                        <div className="mac_btns">
                            <button>Order now</button>
                            <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{marginTop: "3px"}}/></a>
                        </div>
                        <span>{heros.starting_date}</span>
                        <img height="400px" src={heros.banner_image} alt="" />
                    </div>
                ))
            }

            <div className="chose_mac">
                <h1>Which Mac is right for you?</h1>
                <div className="choice_typeofMac">
                    <span onClick={() => setChoice(!choice)} style={choice ? {borderBottom: "1px solid #222"} : {borderBottom: "none"}}>Notebook</span>
                    <span onClick={() => setChoice(!choice)} style={choice ? {borderBottom: "none"} : {borderBottom: "1px solid #222"}}>Desktop</span>
                </div>
                <div className="macbook" style={choice ? {display: "flex"} : {display: "none"}}>
                    {
                        Static_Macbook?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark} <img src={info.icon} alt="" /></h2>
                                            <span style={{color: "#202022"}}>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        Static_Macbook?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark}<img src={info.icon} alt="" /></h2>
                                            <span>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        Static_Macbook?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark}<img src={info.icon} alt="" /></h2>
                                            <span>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    
                </div>
                <div className="iMac" style={choice ? {display: "none"} : {display: "flex"}}>
                {
                        Static_iMac?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark} <img src={info.icon} alt="" /></h2>
                                            <span style={{color: "#202022"}}>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        Static_iMac?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark} <img src={info.icon} alt="" /></h2>
                                            <span style={{color: "#202022"}}>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        Static_iMac?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark} <img src={info.icon} alt="" /></h2>
                                            <span style={{color: "#202022"}}>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        Static_iMac?.map((mac) => (
                            <div className="macbook_info">
                                <img src={mac.image} alt="" />
                                <img src={mac.swatches} alt="" />
                                <h1>{mac.tittle}</h1>
                                <span>{mac.price}</span>
                                <button>Buy</button>
                                <a href="https://www.apple.com/apple-card/monthly-installments/">Learn more <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                                <div className="line"></div>
                                {
                                    mac?.info.map((info) => (
                                        <div className="mac_info">
                                            <h2>{info.mark} <img src={info.icon} alt="" /></h2>
                                            <span style={{color: "#202022"}}>{info.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="choice_links">
                <a href="https://www.apple.com/apple-card/monthly-installments/">Compare all Mac models <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                <a href="https://www.apple.com/apple-card/monthly-installments/">Shop Mac <BiChevronRight style={{display: "flex", alignItems: "center", textDecoration: "none", marginTop: "3px"}}/></a>
                </div>
            </div>
            <div className="mac_cash_back">
                
            </div>
        </div>
    )
}

export default Mac
