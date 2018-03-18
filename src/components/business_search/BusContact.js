import React from 'react';
import {Link} from 'react-router';
import '../../styles/request.css';
import '../../styles/businessSearch.css';
//import '../../public';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';
//import {businessAdSelected} from '../../actions/businessAdDisplay'


const BusContact = (props) => {
  //  const user = "/requests/"+props.uid;
  //const user = props.business;
  //console.log("business " +props.img);
  const linkTo = "business_ad/"+props.uid;
    return(
            <div className="client">
                <h3>{props.children}</h3>
                <img src={props.img} className="client-picture"/>
                <p id = "request-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel imperdiet lorem. 
                    Donec consequat quam quis ante mattis tincidunt. Curabitur eros nunc, condimentum sed leo 
                    elementum, placerat venenatis ipsum. Phasellus nulla velit, venenatis eget lorem id, cursus 
                    molestie erat. Ut neque ante, consectetur venenatis imperdiet ac, volutpat id libero. Sed 
                    sed lorem dignissim, bibendum lacus eget, tincidunt justo. Maecenas eu quam eget velit 
                    commodo hendrerit vel eu odio. Pell   entesque eget auctor lorem, vitae efficitur ligula. Proin 
                    posuere augue eu lorem auctor consequat. Proin sit amet volutpat nisi, at tristique tellus. 
                    Maecenas in nisi vitae dui volutpat luctus eget eget elit.</p>
                <br />
                <div className = "moveItem" >Number: {props.num}</div>
                <div className = "moveItem1" >Email: {props.email}</div>
                <Link to={linkTo}><button className = "accept-button" >View</button></Link>
            </div>
    )
}

function mapStateToProps(state){
    return{
      users: state.users,
      business_ad: state.business_ad
    };
  }

  function matchDispatchToProps(dispatch){
     return bindActionCreators({loadUsers: loadUsers, getCurrentUser: getCurrentUser}, dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(BusContact);