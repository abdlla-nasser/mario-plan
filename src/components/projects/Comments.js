import React from 'react';
import { connect } from 'react-redux';
import { DeleteComment } from '../../actions/projectActions'
import moment from 'moment';

const Comments = (props) => {
    const handleDelete = (e, commentId) => {
        e.preventDefault();
        props.DeleteComment(commentId)
        props.history.push('/project/'+ props.match.params.id)
    }
    if(props.comments){
        console.log(props.proId)
    }
    return (
        <div className='card z-depth-0'>
            {props.comments && props.comments.filter(comment => comment.projectId === props.proId).map(comment => {
                let button = (
                <button  onClick={(e) => handleDelete(e, comment.id)} className="btn btn-control btn-floating red lighten-1 z-depth-0 waves-effect waves-light right" type="submit">
                    <i className="material-icons left">delete</i>
                </button>
                )
                let deleteButton = comment && comment.authorId === props.auth.uid ? button : null
                return (
                    <div className='card-content' key={comment.id}>
                        <span className='black-text'>{comment.content}</span>
                        {deleteButton}
                        <p className='grey-text'>&nbsp;By {comment.author}</p>
                        <p className='grey-text'>&nbsp;{moment(comment.createdAt.toDate()).fromNow()}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        comments: state.firestore.ordered.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        DeleteComment: (commentId) => dispatch(DeleteComment(commentId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);