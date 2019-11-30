import rest from '../utils/rest';

export const Actions = {
    GET_BLOG_DATA_START: 'GET_BLOG_DATA_START',
    GET_BLOG_DATA: 'GET_BLOG_DATA',
    SET_USER: 'SET_USER',
};

export function getBlogData() {
    return dispatch => {
        const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

        dispatch({type: Actions.GET_BLOG_DATA_START});

        return rest.get(blogUrl).then(response => {
            dispatch({type: Actions.GET_BLOG_DATA, blogData: response.data});
        })
    };
}

export function setUser(id) {
    return dispatch => {
        dispatch({type: Actions.SET_USER, userId: id});
    };
}
