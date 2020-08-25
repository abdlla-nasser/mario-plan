const init = {
    projects:[]
}
const projectReducer = ( state = init, action ) => {
    switch(action.type) {
        case "CREATE_PROJECT":
            console.log('created project',action.project);
            return state;
        case "CREATE_PROJECT_ERR":
            console.log("error", action.err);
            return state;
        case "DELETE_PROJECT_SUCCESS":
            console.log("deleted project");
            return state;
        case "DELETE_PROJECT_FAIL":
            console.log("error upon delete");
            return state;
        default: 
            return state;
    }

}
export default projectReducer;