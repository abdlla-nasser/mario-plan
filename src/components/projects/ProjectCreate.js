import React from 'react'
import { createProject } from '../../actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class ProjectCreate extends React.Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const { auth } = this.props;
        if(auth.isEmpty) return <Redirect to="/signin" />
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Create New Project</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='materialize-textarea' id='content' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0 btn-large waves-effect waves-light" type="submit">Create  
                            <i class="material-icons right">send</i>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStatToProps,mapDispatchToProps)(ProjectCreate);