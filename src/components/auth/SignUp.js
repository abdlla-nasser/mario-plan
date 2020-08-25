import React from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../actions/authactions.js'
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if(!auth.isEmpty) return <Redirect to="/"/>
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='name'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='name'>Last Name</label>
                        <input type='text' id='lastName' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0">Log In</button>
                        <div className='red-text center'>
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);