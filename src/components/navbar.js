import React from "react"
import instagram from "../free-social-media-icons/SVG/Circle Black White/Instagram_2.svg"
import facebook from "../free-social-media-icons/PNG/Circle Black White/Facebook_2.png"
import twitter from "../free-social-media-icons/PNG/Circle Black White/Twitter_2.png"
import paintbrush from "../images/paintbrush.png"

function Navbar(){
    return(
        <div>
            <navbar>
                <h1>Kim Jung gi</h1>
               <a href="https://www.kimjunggius.com/">Official Website<img src={paintbrush} className="icon"></img></a>
               <a href="https://www.instagram.com/kimjunggius/?hl=en"><img src={instagram} className="icon"></img></a>
               <a href="https://www.facebook.com/kimjunggius/"><img src={facebook} className="icon"></img></a> 
               <a href="https://twitter.com/KimJungGiUS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitter} className="icon"></img></a> 
               <a href=""></a>
            </navbar>
        </div>
    );
}

export default Navbar;