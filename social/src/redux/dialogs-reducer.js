const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Zhenya'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Roma'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Nas\'ka'}
    ],
    messages: [
        {id: 1, message: "Hey, what's up?"},
        {id: 1, message: "Oh, I'm really fine thx"},
        {id: 3, message: "You're the best dude"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Hello!"},
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
                newMessageText: '',
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
                //messages: [...state.messages]
            };
        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: newMessage,
    }
};

export default dialogsReducer;