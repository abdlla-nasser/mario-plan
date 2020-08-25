import React from 'react'
import { createComment } from '../../actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class CreateComment extends React.Component {
    state = {
        content: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.createComment(this.state,this.props.profile, this.props.match.params.id)
        this.props.history.push('/project/' + this.props.match.params.id)
    }
    render() {
        const { auth } = this.props;
        if(auth.isEmpty) return <Redirect to="/signin" />
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Comment</h5>
                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='materialize-textarea' id='content' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0 btn-large waves-effect waves-light" type="submit">Post  
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStatToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: (comment, profile, projectId) => dispatch(createComment(comment, profile, projectId))
    }
}

export default compose(
    connect(mapStatToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: "projects"}
    ])
)(CreateComment);