import React, { useContext } from 'react';
import './OnlyOnApple.css';
import OnlyOnAppleData from './OnlyOnAppleData';
import OnlyOnAppleVideo from './only-on-apple-pages/OnlyOnAppleVideo';
import OnlyOnAppleAnimationContent from './only-on-apple-pages/OnlyOnAppleAnimationContent';
import { Link } from 'react-router-dom'


function OnlyOnApple() {
    const only_on_datas = useContext(OnlyOnAppleData);
    console.log(only_on_datas.nav_data);
    return (
        <div className="wrapper_only_on_apple" >
            <nav className='nav_only_on'>
                <ul className="nav_only_on_collection"   >
                    {
                        only_on_datas.nav_data.map((element) =>
                            <li key={element.id} className="nav_only_on_item"> <Link to={"/"} className='nav_only_on_item' >{element.icons} <span>{element.link}  </span>  </Link></li>
                        )
                    }
                </ul>
            </nav>
            <div className="only_on_apple_banner">
                <h1 className='only_h1'>Only on Apple.</h1>
                <h1 className='only_h1' >The best experiences.</h1>
                <p className='only_p' >Get the most out of the devices you love with high‑quality content and services. Award‑winning series and films, amazing music in spatial audio, world-class workouts and meditations, trusted news publications, superfun games —
                    even the ways you pay for things. And they’re only on Apple.</p>
            </div>
            <div className="only__top_text">
                <h1>{only_on_datas.nav_data[0].icons} One </h1>
                <p>Get up to six services in one subscription with Apple One.</p>
                <button className='only_btn' >Learn more</button>
            </div>
            {
                only_on_datas.video_page_data.map((element) =>
                    <OnlyOnAppleVideo key={element.id} info_data={element} />
                )
            }
        </div>
    )
}

export default OnlyOnApple