const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: "hey everyone", likesCount: 15},
        {id: 1, message: "it's my first post", likesCount: 7}
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                posts: [
                    {id: 2, message: newPost, likesCount: 0} ,
                     ...state.posts],
                newPostText: "",

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;