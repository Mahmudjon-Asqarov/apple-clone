import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import BannerFoot from '../../components/banner/BannerFoot';
import Footer from '../../components/Footer/Footer';
import { AiFillApple } from 'react-icons/ai';
import { AiFillPlayCircle } from 'react-icons/ai';


export default function Home() {
  const banner_data = [
    {
      id: 1,
      banner_title: "iPhone 13 Pro",
      string_data: "Now in Alpine Green.",
      quote: "Available starting 3.18",
      banner_link_one: `Learn more`,
      banner_link_two: "Shop",
      banner_img: "https://www.apple.com/v/home/al/images/heroes/iphone-13-pro-avail/hero_iphone13pro_preorder__d46ofk3816wm_largetall.jpg",
      portrait: true
    }, {
      id: 2,
      banner_title: "iPhone SE",
      string_data: "Love the power. Love the price.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Pre-order",
      banner_img: "https://www.apple.com/v/home/al/images/heroes/iphone-se/hero_iphonese_preorder__e4eta8trjs66_largetall.jpg",
      portrait: true
    },
     {
      id: 3,
      banner_title: "iPad air",
      string_data: "Light. Bright.Full of might.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Order now",
      banner_img: "https://www.apple.com/v/home/al/images/heroes/ipad-air/hero_ipadair__flhdv47anjqu_large.jpg",
      portrait: false
    },
  ]
  const banner_foot_data = [
    {
      id: 1,
      banner_title: "Studio Display",
      string_data: "A sight to be bold.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Order now",
      banner_img: "https://www.apple.com/v/home/al/images/promos/studio-display/promo_studiodisplay__b449sh436cdy_medium.jpg",
      portrait: true
    }, {
      id: 2,
      banner_title: "Mac Studio",
      string_data: "Empower station.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Order now",
      banner_img: "https://www.apple.com/v/home/al/images/promos/mac-studio/promo_macstudio__gl7zppziivma_medium.jpg",
      portrait: true
    },
     {
      id: 3,
      banner_title: "iPhone 13",
      string_data: "Now in green.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Shop",
      banner_img: "https://www.apple.com/v/home/al/images/promos/iphone-13-avail/promo_iphone13_preorder__egirfkqfbwom_medium.jpg",
      portrait: true
    }, {
      id: 4,
      banner_icon: < AiFillApple />,
      banner_title: "WATCH",
      series: "SERIES 7",
      string_data: "It's our largest display yet.",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Buy",
      banner_img: "https://www.apple.com/v/home/al/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_medium.jpg",
      portrait: true
    }, {
      id: 5,
      banner_icon: < AiFillApple />,
      banner_title: "Card",
      string_data: "Get up to 3% Daily Cash back wint every purchase ",
      quote: "Available starting 3.18",
      banner_link_one: "Learn more",
      banner_link_two: "Apply now",
      banner_img: "https://www.apple.com/v/home/al/images/promos/apple-card/tile__cauwwcyyn9hy_medium.jpg",
      portrait: true
    }, {
      id: 6,
      banner_icon: < AiFillApple />,
      banner_title: "tv+  Friday Night Baseball",
      string_data: "Live MLB Friday Night Baseball streaming soon, only on Apple TV+.",
      // quote: "Available starting 3.18",
      banner_link_one: "Notify me",
      banner_link_two: `Stream now`,
      banner_icon_play: <AiFillPlayCircle />,
      banner_img: "https://www.apple.com/v/home/al/images/promos/tv-plus-mlb/promo_mlb__ce0jwl6ahf5y_medium.jpg",
      portrait: false,

    }
  ]
  return (
    <div className='home' >
      <div className="home_container">
        {
          banner_data.map((banner_info) =>
            <Banner key={banner_info.id} info={banner_info} />
          )
        }
        <BannerFoot bannerFootData={banner_foot_data} />
        <Footer />
      </div>

    </div>
  )
}
