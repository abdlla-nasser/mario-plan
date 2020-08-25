import authReducer from './authReducer'
import projectReducer from './projectReducer'
import commentsReducer from './commentsReducer'
import { projectID } from './projectID'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const reducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    projectID: projectID,
    comments: commentsReducer
})

export default reducer;