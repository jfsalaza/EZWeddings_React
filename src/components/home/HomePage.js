import React from 'react';
import {Link} from 'react-router';
//import TitleHome from '/TitleHome';
import '../../styles/home.css';
import '../../public/index1.jpeg';
import Image from './Image'

class HomePage extends React.Component {
  render() {
    //This is a comment
    return (
      <div>
        <div id="title">
          <img id="title-img" src="index1.jpeg" alt="beach"/>
          <div id="title-centered"><h1>EZWeddings</h1></div>
        </div>
        <div id = "centerObject">
          <Image />
          <div id="page-section">
                <h1>EZWeddings</h1>
                <div id="text-container">
                    <b>The Sith and the Jedi are similar in almost every way, including their quest for greater power.
My mentor taught me everything about the Force, even the nature of the dark side.
Anakin, if one is to understand the great mystery, one must study all its aspects, not just the dogmatic narrow view of the Jedi. If you wish to become a complete and wise leader, you must embrace...a larger view of the Force. Be careful of the Jedi, Anakin. Only through me can you achieve a power greater than any Jedi! Learn to know the dark side of the Force, and you will be able to save your wife from certain death.
Anakin. I told you it would come to this. I was right! The Jedi are taking over!!</b> 
                </div>
                <br/>
                <Link to = 'register'>
                  <input type="submit" value="Join Now" />
                </Link>
           </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
