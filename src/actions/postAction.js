import { FETCH_POSTS, NEW_POSTS } from "./types";

// regular way
// export function fetchPosts() {
//     return function(dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }));
//     }
// }

//ES6 syntax way

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
}