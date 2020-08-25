import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig'

const store = createStore(reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true , userProfile: 'users',attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then(()=> {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    );
})
