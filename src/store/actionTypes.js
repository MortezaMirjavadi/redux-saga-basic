export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENTASYNC = "INCREMENTASYNC";
export const GETALLPOSTS = "GETALLPOSTS";
export const GETALLPOSTSSUCCESS = "GETALLPOSTSSUCCESS";
export const GETPOSTSFAILED = "GETPOSTSFAILED";

export const getPosts = () => ({type: GETALLPOSTS});
export const getPostsSuccess = (posts) => ({type: GETALLPOSTSSUCCESS, payload: posts});

export const increment = ()=> ({type: INCREMENT});
export const incrementAsync = (value) => ({type: INCREMENTASYNC, payload: value});
export const decrement = ()=> ({type: DECREMENT});
export const getPostFailed = () => ({type: GETPOSTSFAILED});
