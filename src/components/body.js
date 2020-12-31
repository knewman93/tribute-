import React from "react"
import kim from "../images/kim.jpg"

function Body(){

    return(
        <div className="body-component">
            <div className="body-container">
            <div className="half-1">
               
                <div className="title">
                <img src={kim} id="kim"/>
                <h1>Kim Jung Gi - The Artist, the Visionary</h1>
                </div>
                
                <h2>[All information listed below was provided by the official Kim Jung Gi Website]</h2>
                <p id="brief-history"> 
                    Korean artist Kim Jung Gi was born in 1975 in the town of Goyang-Si, located in the province of Kyongki-Do South Korea.  At 19, this budding artist enrolled at a Fine Arts School, majoring in Art and Design.  He attended Dong-Eui University in Busan for three years and did his two years in the South Korean army as a part of the Special Forces Unit.  Here, he was able to memorize the array of different weapons and vehicles. 

                    Kim’s most notable creative asset is his memory, something he has developed over a number of years.  His ability to render extremely complicated scenes near-perfectly from memory, without the aid of references, has stretched the boundaries of what many artists believed was possible.

                    Kim Jung Gi’s first publication – Funny Funny – was published in Young Jump magazine. He wrote a number of short stories and held exhibitions for his work that led to his teaching manhwa (Korean comic book) to various private schools and universities.  Kim collaborated with Seung-Jin Park, the writer of Tiger the Long Tail, to draw six volumes for his comic.  Kim also worked alongside French author Bernard Werber, illustrating two novels he had written – “Paradise” in 2010 and “Third Humanity” in 2013.

                    In 2011, Kim Jung Gi partook in the Comic Festival held in Bucheon where, for the first time ever, he drew live. In most cases, artists showcase a framed drawing or painting, but KJG decided to do something different. He placed paper up on three walls around his table and began drawing.

                    Superani CEO Hyun Jin Kim videoed and posted the entire process on YouTube and, as some videos tend to do, went viral. This led to the invitation to different worldwide events.  In recent years, he has accepted invitations to perform in France, America, all around Asia and now in Japan for his first show simply titled “Drawing Exhibition”.

                    Kim has six sketchbooks in print, which equate to about 4,500 pages’ worth of drawings in a span of 12 years. He also collaborated with the legendary Japanese artist Katsuya Terada in 2017.  The pair put together an amazing sketchbook of various drawings, showing off their talents.

                    He’s worked in various industries – movies, music, and government. Kim put together a feature exhibition in Cheongwadae” the Republic of Korea’s president’s official workplace and residence.  He was also hired by Korean Hip-Hop artist Drunken Tiger to create the album cover.

                    He holds the record for “Longest drawing by an individual” in the Guinness World Records book.
                </p>
            </div>
            <div className="half-2">
                <h1>Notable Work</h1>
                <ul>
                    <li>Assassin's Creed Valhalla: Geirmund's Saga - cover artist</li>
                    <li>Tiger The Long Tail</li>
                    <li>Drawing Show at Galerie Maghen in Paris</li>
                    <li>Terada KATSUYA</li>
                    <li>Spy Games</li>
                    <li>Illustration for Blizzard Studios</li>
                    <li>Cover Artist for DC</li>
                    <li>And so much more, his work can be viewed <a href="https://www.kimjunggi.net/portfolio-v2/">here</a></li>
                </ul>
            </div>
            </div>
 
        </div>
    );
}

export default Body;