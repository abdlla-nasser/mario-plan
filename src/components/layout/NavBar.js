import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';


const NavBar = props => {
    const { auth, profile } = props;
    let display = auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks profile={profile}/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className='container'>
                <Link to='/' className='brand-logo'>Mario Planner</Link>
                {display}
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);