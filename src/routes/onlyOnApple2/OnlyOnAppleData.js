import React from "react";
import { AiFillApple } from 'react-icons/ai';
import { SiApplemusic } from 'react-icons/si';
import { FiTarget } from 'react-icons/fi';
import { SiApplearcade } from 'react-icons/si';
import { BsCalendar3EventFill } from 'react-icons/bs';
import { BsFillCloudFill } from 'react-icons/bs';
import { GiStripedSun } from 'react-icons/gi';
import { FaBookOpen } from 'react-icons/fa';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { BsFillWalletFill } from 'react-icons/bs';
// 2-data
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { CgPlayButtonO } from 'react-icons/cg';

export const only_on_data = {
    nav_data: [
        {
            id: 1,
            icons: <AiFillApple values="tv+" />,
            link: "Apple TV+",
        },
        {
            id: 2,
            icons: <SiApplemusic />,
            link: "Apple Music",
        },
        {
            id: 3,
            icons: <FiTarget />,
            link: "Apple Fitnes+",
        }
        ,
        {
            id: 4,
            icons: <SiApplearcade />,
            link: "Apple Arcode",
        }
        ,
        {
            id: 5,
            icons: <BsCalendar3EventFill />,
            link: "Apple News+",
        }
        ,
        {
            id: 6,
            icons: <BsFillCloudFill />,
            link: "iCloud",
        }
        ,
        {
            id: 7,
            icons: <GiStripedSun />,
            link: "Apple Podcasts",
        }
        ,
        {
            id: 8,
            icons: <FaBookOpen />,
            link: "Apple Books",
        }
        ,
        {
            id: 9,
            icons: <BsFillCreditCard2BackFill />,
            link: "Apple Card",
        }
        ,
        {
            id: 10,
            icons: <BsFillWalletFill />,
            link: "Wallet",
        }
    ],
    video_page_data: [
        {
            id: 1,
            title_text: "Listen to music you love in spatial audio with Dolby Atmos.2",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <AiFillApple values="tv+" />,
            smile_text: "Apple TV+",
            play_full: true,
            string: "ACAPULCO",
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/hero-sizzle/large.mp4',
        },
        {
            id: 2,
            title_text: "Listen to music you love in spatial audio with Dolby Atmos.2",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <SiApplemusic />,
            smile_text: "Apple Music",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/music/large.mp4',

        },
        {
            id: 3,
            title_text: "From HIIT to Meditation, there’s something for everyone.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <FiTarget />,
            smile_text: "Apple Fitnes+",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        }
        ,
        {
            id: 4,
            title_text: "Best collection of mobile games for every player.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <SiApplearcade />,
            smile_text: "Apple Arcode",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/arcade/large.mp4',
        }
        ,
        {
            id: 5,
            title_text: "Hundreds of magazines and leading newspapers. One subscription.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <BsCalendar3EventFill />,
            smile_text: "Apple News+",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        }
        ,
        {
            id: 6,
            title_text: "The best place for photos and files. Great features to  protect your privacy.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <BsFillCloudFill />,
            smile_text: "iCloud",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        }
        ,
        {
            id: 7,
            title_text: "Millions of shows, from the biggest names to the best independents.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <GiStripedSun />,
            smile_text: "Apple Podcasts",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        }
        ,
        {
            id: 8,
            title_text: "Read, listen, discover. All in one place.",
            btn_text_firs: "Try it free",
            btn_text: "Try it free",
            icon_play: <CgPlayButtonO />,
            icon_play_pause: <AiOutlinePauseCircle />,
            icons_video_banner: <FaBookOpen />,
            smile_text: "Apple Books",
            play_full: true,
            video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        }
        ,
        // {
        //     id: 9,
        //     title_text: "The simplicity of Apple. In a credit card.",
        //     btn_text_firs: "Try it free",
        //     btn_text: "Try it free",
        //     icon_play: <CgPlayButtonO />,
        //     icon_play_pause: <AiOutlinePauseCircle />,
        //     icons_video_banner: <BsFillCreditCard2BackFill />,
        //     smile_text: "Apple Card",
        //     play_full: true,
        //     video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        // }
        // ,
        // {
        //     id: 10,
        //     title_text: "",
        //     btn_text_firs: "Try it free",
        //     btn_text: "Try it free",
        //     icon_play: <CgPlayButtonO />,
        //     icon_play_pause: <AiOutlinePauseCircle />,
        //     icons_video_banner: <BsFillWalletFill />,
        //     smile_text: "Wallet",
        //     play_full: true,
        //     // video: 'https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4',
        // }

    ]
}
const Only_on_apple_data = React.createContext(only_on_data);
export default Only_on_apple_data;