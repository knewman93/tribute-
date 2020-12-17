import React from 'react'
import Arrow from './arrow'
import ImageSlide from './image'
const imgUrls=[
    "../images/carousel/ElXZzfHUYAA_5vo.jpeg",
    "../images/carousel/Em4r-mXVcAETXDr.jpeg",
    "../images/carousel/Eo2XaWdVgAEKazZ.jpeg",
    "../images/carousel/Eo2XYu3U0AAD_cq.jpeg",
    "../images/carousel/Eorvq0kVoAAdgmn.jpeg",
    "../images/carousel/EozwjmVU8AAMpFW.jpeg",
    "../images/carousel/EozwpTiUcAceOfi.jpeg"
]

class Carousel extends React.Component {

    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };
      }
      previousSlide () {
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
    
        this.setState({
          currentImageIndex: index
        });
        //just in case
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      }
    
    

    render () {
      return (
        <div className="carousel">
            <Arrow
            direction="left"
            clickFunction={ this.previousSlide }
            glyph="&#9664;" />

            <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

            <Arrow
            direction="right"
            clickFunction={ this.nextSlide }
            glyph="&#9654;" />
        </div>
      );
    }
  }
  export default Carousel;