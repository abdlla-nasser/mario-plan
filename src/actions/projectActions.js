export const createProject = project => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
    }).then(() => {
        dispatch({ type: "CREATE_PROJECT", project})
    } ).catch(err => dispatch( { type:'CREATE_PROJECT_ERR', err }))
    
}
export const createComment = (comment, profile, projectId) => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    console.log(getState())
    // const project = getState().firestore.data.projects
    firestore.collection('comments').add({
        ...comment,
        author: profile.firstName + ' ' + profile.lastName,
        authorId,
        projectId,
        createdAt: new Date()
    }).then(() => {
        dispatch({ type: "CREATE_COMMENT", comment})
    } ).catch(err => dispatch( { type:'CREATE_COMMENTT_ERR', err }))
}
export const projectID = projectId => {
    return { type:'Project_ID', projectId  }
}
export const DeleteProject = projectId => (dispatch, getState, { getFirestore }) => {
    const firestore=getFirestore();
    firestore.collection('projects').doc(projectId).delete().then(()=> {
        dispatch({ type:"DELETE_PROJECT_SUCCESS"})
    }).catch(err => dispatch({ type:"DELETE_PROJECT_FAIL"}))
}
export const DeleteComment = commentId => (dispatch, getState, { getFirestore }) => {
    const firestore=getFirestore();
    firestore.collection('comments').doc(commentId).delete().then(()=> {
        dispatch({ type:"DELETE_COMMENT_SUCCESS"})
    }).catch(err => dispatch({ type:"DELETE_COMMENT_FAIL"}))
}
