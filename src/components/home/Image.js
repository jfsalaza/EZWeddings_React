import React, {Component} from 'react';
import '../../styles/home.css';
import '../../public/title_bg.jpeg';
import '../../styles/w3SchoolCSS.css';

class Image extends Component{
    render(){
        return(
            
            <div id = "page-section">
                <div id = "slideshow-container">
                    <div class="w3-display-container mySlides fade">
                        <img src="title_bg.jpeg" width="100%" height="500px"/>
                        <div class="w3-display-bottomleft w3-container w3-padding-16 w3-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Image;