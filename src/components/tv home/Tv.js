import React from 'react'
import './Tv.css'
import { AiFillApple, AiOutlineSearch,} from 'react-icons/ai'
import { BsBag } from 'react-icons/bs';
import { BiInfoSquare, BiTv } from 'react-icons/bi'
import { SiAppletv } from 'react-icons/si'
import img from './4248184-200.png'
import imgs from './home-icon-home-icon-svg-free-11563371772ani6qcgief.png'
import imgh from './50-508224_png-file-svg-icon-lamp-png-transparent-png.png'
import bannerimg from './hero_tv__d8nngabrofue_large (1).png'
import img2 from './hero_homepod_appletv_lockup__ecxlvf764zu6_large (1).png'
import imgll from './homepod-mini-colours.png'
import imgg from './tv-home__fedwm0ly3mqi_og.png'
import tvImg from './your_home_at_your_command__b1w2tomy2wia_large.jpg'
import homeI from './home_icon__9u57pp0qahea_large (1).png';

function Tv({tv}) {
  const  bannerW = [ 
    {
      text1: "Easily control your home  from anywhere with your  favorite devices.",
      textA: "Learn more about the Home app",
      product_img: "https://www.apple.com/v/tv-home/b/images/overview/control_your_home__ftcaw216qjqm_large.jpg",
    },
    {
      text1: "Easily control your home  from anywhere with your  favorite devices.",
      textA: "Learn more about the Home app",
      product_img: "https://www.apple.com/v/tv-home/b/images/overview/seemlessly_connected__fp9rabi8a7u6_large.jpg",
    },
    {
      text1: "Easily control your home  from anywhere with your  favorite devices.",
      textA: "Learn more about the Home app",
      product_img: "https://www.apple.com/v/tv-home/b/images/overview/control_your_home__ftcaw216qjqm_large.jpg",
    },
    {
      text1: "Easily control your home  from anywhere with your  favorite devices.",
      textA: "Learn more about the Home app",
      product_img: "https://www.apple.com/v/tv-home/b/images/overview/security_and_privacy__bzlguj2x29jm_large.jpg",
    },
    
]
  return (
    <div className='tvs'>
        <div className="navbars_div ">
            <div className="navbar_container">
                <div className="product"><BiTv/><h5 className='h5_t'>Apple TV 4K</h5></div>
                <div className="product"><BiTv/><h5 className='h5_t'>Apple TV 4K </h5></div>
                <div className="product"><SiAppletv/><h5 className='h5_tx'>Apple TV app</h5></div>
                <div className="product"><SiAppletv/><h5 className='h5_tx'>Apple TV +</h5></div>
                <div className="product"><img className='img1' src={img} alt="" /><h5 className='h5_tsx'>HomePod Mini</h5></div>
                <div className="product"><img className='img1' src={imgs} alt="" /><h5 className='h5_tsx'>Home app</h5></div>
                <div className="product"><img className='img1' src={imgh} alt="" /><h5 className='h5_t'>Accessories</h5></div>
            </div>
        </div>
        <div className="banner_div">
            <img className='banner_img1' src={bannerimg} alt="" />
            <img className='img2' src={img2} alt="" />
        </div>
        <div className="banner2">
          <div className="banner_texts">
          <h1 className='future_text'>The future hits home.</h1>
          <h5 className='text_2'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Control lights, locks, and thermostats with your iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie night with theater-like picture and sound. All with the security and privacy of Apple.</h5>
          <p className='p'>Stream Foundation on the Apple TV app</p>
          </div>
        </div>
        <br />
        <div className="banner_3">
          <div className="banner_3_c">
            <div className="item1_">
              <div className="head_1">
                <br /> <br /> <br /> <br /> <br /> <br />
                <h4 className='pod_t'>HomePod mini</h4>
                <br />
                <h1 className='rom_t'>Room-filling sound
                <br /> in every room.</h1>
                <br />
                <h4 className='t_99'>$99</h4>
                <br />
                <div className="buy_d">
                  <div className="buy">Buy</div>
                  <h5 className='l_m'>Learn more </h5>
                </div>
              </div>
              <div className="footer_img">
                <img className='ni1' src={imgll} alt="" />
              </div>
            </div>
            <div className="item1_">
            <div className="head_1">
                <br /> <br /> <br /> <br /> <br /> <br />
                <h4 className='pod_t'>HomePod mini</h4>
                <br />
                <h1 className='rom_t'>A higher definition of <br /> home entertainment.</h1>
                <br />
                <h4 className='t_99'>$99</h4>
                <br />
                <div className="buy_d">
                  <div className="buy">Buy</div>
                  <h5 className='l_m'>Learn more </h5>
                </div>
              </div>
              <div className="footer_img">
                <img className='nm1' src={imgg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner_4">
          <div className="banner_4_cont">
            <div className="img_tj"><img src={tvImg} alt="" /></div>
            <div className="text_tj">
              <div className="img_c">
              <img className='ni12' src={homeI} alt="" />
              </div>
              <h5 className='h'>Home</h5>
              <br /> <br />
              <h1 className='your'>Your home at <br /> your command.</h1>
            </div>
          </div>
        </div>
        <div className="banner_5">
          <br /> <br /> <br /> <br /> <br /> <br /> 
            <h1 className='text_cont_h1'>Every reason to turn your house <br /> into a smart home.</h1>
            <br /> <br /> <br /> <br /> 

          <div className="banner_5_c">  
             {
                bannerW.map(item =>               
              <div className="productss">
                <h1 className='h1_textts'>{item.text1}</h1>
                <p className='p_T'>{item.textA}</p>
                 <img className='imgs' src={item.product_img} alt="" />
              </div>
                )
            }       
          </div>
        </div>
        <div className="banner_5">
          <br /> <br /> <br /> <br /> <br /> <br />
            <h1 className='text_cont_h1'>Every reason to turn your house <br /> into a smart home.</h1>
            <br /> <br /> <br /> <br /> 

          <div className="banner_5_c">  
             {
                bannerW.map(item =>               
              <div className="productss">
                <h1 className='h1_textts'>{item.text1}</h1>
                <p className='p_T'>{item.textA}</p>
                 <img className='imgs' src={item.product_img} alt="" />
              </div>
                )
            }       
          </div>
        </div>
    </div>
  )
}

export default Tv