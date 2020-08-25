import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Comments from './Comments'
import { projectID } from '../../actions/projectActions'
import { DeleteProject } from '../../actions/projectActions'




class ProjectDetails extends React.Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault()
        this.props.projectID(this.props.id)
        this.props.history.push('/comment/' + this.props.id)
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.DeleteProject(this.props.id)
        this.props.history.push('/')
    }

    render() {
        const { project, auth } = this.props;
        if(auth.isEmpty) return <Redirect to="/signin" />
        if(!project) {
            return <div className='container center'><p>Loading project....</p></div>
        }
        if(project.authorId !== auth.uid) {
            console.log(`this user shouldn't be able to delete this post`)
        }
        let deletePostButton = project.authorId && auth.uid && project.authorId === auth.uid ? 
        <button  onClick={this.handleDelete} className="btn red lighten-1 z-depth-0 waves-effect waves-light right" type="submit"> delete
            <i className="material-icons left">delete</i>
        </button> : null;
        return (
            <div>
            <div className='project-detail section container'>
                <div className="card z-depth-0">
                    <div className='card-content'>
                        <span className='card-title'>{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className='grey-text lighten-4 grey card-action'>
                        <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                        <p className='grey-text'>&nbsp;{moment(project.createdAt.toDate()).calendar()}`</p>
                        <button  onClick={this.handleSubmit} className="btn pink lighten-1 z-depth-0 waves-effect waves-light right" type="submit"> comment
                            <i className="material-icons left">add</i>
                        </button>
                        {deletePostButton}
                    </div>
                </div>
            </div>
            <div className='section container comments'>
                <Comments history={this.props.history} proId={this.props.id}/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project,
        auth: state.firebase.auth,
        id
    } ;
}

const mapDispatchToProps = dispatch => {
    return {
        projectID: (projectId) => dispatch(projectID(projectId)),
        DeleteProject: (projectId) => dispatch(DeleteProject(projectId))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'comments'}
    ])
)(ProjectDetails);