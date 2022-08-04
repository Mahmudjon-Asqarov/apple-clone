import React from 'react'
import './StoreBanner.css'
// import {BsBag, BsEmojiLaughing, BsCreditCard} from 'react-icons/bs'
// import {BiCubeAlt} from 'react-icons/bi'
import {AiFillApple} from 'react-icons/ai'
// import {GrPersonalComputer} from 'react-icons/gr'

const StoreBanner = () => {

    return (
        <div className='store_wrapper'>
            <div className="store_title">
                <h1>Store.<font color="gray">The best way to buy the <br /> products you love.</font></h1>
                <div className="help">
                    <div className="speacilist_profil">
                        <div className='img'>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=72&hei=72&fmt=jpeg&qlt=80&.v=1638914056000" alt="" />
                        </div>
                        <div className="p">
                            <p>Need shopping help?</p>
                            <a href="s">Ask a specialis</a>
                        </div>
                    </div>
                    <div className="visit_link">
                        <div className='img'>
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV1?wid=72&hei=72&fmt=jpeg&qlt=80&.v=1638914056000" alt="" />
                        </div>
                        <div className="p">
                            <p>Visit an Apple Store</p>
                            <a href="s">Find one near you</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apple_news_title">
                <h1>The Latest.<font color="gray">Take a look at what’s new, right now.</font></h1>
            </div>
            <div className="help_center">
                <h1>Help is here <font color="gray">Whenever and however you need it</font></h1>
            </div>
            <div className="help_container">
                <div className="first_div">
                    <h1>Shop one on one with a <br />Spesialist. Online or in Store</h1>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626296836000" alt="" />
                </div>
                <div className="second_div">
                    <h1>Get to know your new device wiyh free personal session.</h1>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000" alt="" />
                </div>
                <div className="third_div">
                    <h1>Get expert servise and support at the Genius Bar</h1>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000" alt="" />
                </div>
            </div>

            <div className="difference">
                <h1>The Apple difference.<font color="gray">Even more reasons to shop with us</font></h1>
            </div>

            <div className="difference_content">
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                <div className="content">
                    <AiFillApple className='icon'/>
                    <p><font color="#3f6eb8">Convenient pickup options</font> that fit into your everyday schedule.</p>
                </div>
                
            </div>

        </div>
    )
}

export default StoreBanner
