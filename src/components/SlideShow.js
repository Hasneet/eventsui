import React from 'react';
import '../css/SlideShow.css';


class SlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.slideIndex = 0;
    }

    componentDidMount() {
        this.slideShowAnimation();
    }

    slideShowAnimation() {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');
        for(let slide of slides) {
            slide.style.display = 'none';
        }
        
        this.slideIndex++;
        
        if(this.slideIndex > slides.length) this.slideIndex=1;
        console.log(this.slideIndex);
        for(let dot of dots) {
            dot.className = dot.className.replace(' active', '');
        }
        slides[this.slideIndex-1].style.display = 'block';
        dots[this.slideIndex-1].className += ' active';
        setTimeout(this.slideShowAnimation.bind(this), 2000);
    }

    render() {
        return (
            <div className="slideshow-top">
                <h3 className="ui huge header" style={{marginLeft: "100px"}}>Trending</h3>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img alt="abc" src={require('../img/test1.jpg')} style={{width:'100%'}}></img>
                        <h4 className="topic">Topic goes here</h4>
                    </div>
                    <div className="mySlides fade">
                        <img alt="abc" src={require('../img/test2.jpg')} style={{width:'100%'}}></img>
                        <h4 className="topic">Topic goes here</h4>
                    </div>
                    <div className="mySlides fade">
                        <img alt="abc" src={require('../img/test3.jpeg')} style={{width:'100%'}}></img>
                        <h4 className="topic">Topic goes here</h4>
                    </div>
                </div>
                <br></br>
                <div style={{textAlign: 'center'}}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    };
};

export default SlideShow;