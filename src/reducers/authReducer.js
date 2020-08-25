const authReducer = ( state = {authError:null}, action ) => {
    switch(action.type){
        case 'SIGNIN_SUCCESS':
            console.log('login success')
            return { ...state, authError:null }
        case 'SIGNIN_FAIL':
            return { ...state, authError: 'Login fail' }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up success')
            return { ...state, authError:null }
        case 'SIGNUP_FAIL':
            console.log('sign up error')
            return { ...state, authError: action.err.message }
        default:
            return state;
    }
}
export default authReducer;