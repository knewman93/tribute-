import React from 'react'
import Arrow from './arrow'
import ImageSlide from './image'
import Image0 from '../images/carousel/maxresdefault.jpg'
import Image1 from '../images/carousel/ElXZzfHUYAA_5vo.jpeg'
import Image2 from '../images/carousel/Em4r-mXVcAETXDr.jpeg'
import Image3 from '../images/carousel/Eo2XaWdVgAEKazZ.jpeg'
import Image4 from '../images/carousel/Eo2XYu3U0AAD_cq.jpeg'
import Image5 from '../images/carousel/Eorvq0kVoAAdgmn.jpeg'
import Image6 from '../images/carousel/EozwjmVU8AAMpFW.jpeg'
import Image7 from '../images/carousel/EozwpTiUcAceOfi.jpeg'



const imgUrls=[
    Image0,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7
]

class Carousel extends React.Component {

    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0,
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      }
      previousSlide () {
        console.log(this.state)
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        console.log(currentImageIndex)
        this.setState({
          currentImageIndex: index
        });
        
      }
  
    

    render () {
      return (
        <div className="carousel">
           
            <Arrow
              className="left-arrow"
              direction="left"
              clickFunction={ this.previousSlide }
              glyph="&#9664;" />

            <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />   

            <Arrow
              id="right-arrow"
              direction="right"
              clickFunction={ this.nextSlide }
              glyph="&#9654;"/>
           
        </div>
      );
    }
  }
  export default Carousel;