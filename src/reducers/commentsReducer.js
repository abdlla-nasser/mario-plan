const init = {
    projects:[]
}
const projectReducer = ( state = init, action ) => {
    switch(action.type) {
        case "CREATE_COMMENT":
            console.log('created comment',action.comment);
            return state;
        case "CREATE_COMMENT_ERR":
            console.log("error", action.err);
            return state;
        case "DELETE_COMMENT_FAIL":
            console.log("error upon delete");
            return state;
        case "DELETE_COMMENT_SUCCESS":
            console.log("deleted comment");
            return state;
        default: 
            return state;
    }

}
export default projectReducer;