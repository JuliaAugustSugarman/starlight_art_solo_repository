import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withRouter } from 'react-router-dom';
import './user.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="flex-container">
    <div className="bckgrnd-container">
     


      <h1 id="welcome">
        Time to get your art on, {props.user.username}!
    </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
      <LogOutButton className="log-in" />


    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js

export default withRouter(connect(mapStateToProps)(UserPage));
