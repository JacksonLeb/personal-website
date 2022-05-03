const githubReducer = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
            
        default:
            return state
    }
}

export default githubReducer