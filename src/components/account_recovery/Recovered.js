import React from 'react';
import {Link} from 'react-router';
//import '../../styles/request.css';


const Recovered = (props) => {
   // const user = "/requests/"+props.uid;
   if(props.email ===props.confirmEmail){
       return(
        <Link to ='/home'>
             <div>Email has been sent to with instructions to recover your account</div>
        </Link>
    )}else{
        return(
        <Link to ='/register'>
             <div>Email don't match, please try again</div>
        </Link>
        )
    } 
}

export default Recovered;