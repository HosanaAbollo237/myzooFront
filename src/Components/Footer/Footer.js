import React from 'react'
import fb from '../../../public/assets/fb.png'
import twitter from '../../../public/assets/twitter.png'
import youtube from '../../../public/assets/youtube.png'
import Classes from '../../../public/css/footerCss.css'

const Footer = (props) => {

    return(
        <footer>
            <div className="logo logoFB">
                <Img src={fb} />
            </div>
            <div className="logo logoTW">
                <Img src={twitter} />
            </div>
            <div className="logo logoYT">
                <Img src={youtube} />
            </div>
        </footer>
    )
}

export default Footer