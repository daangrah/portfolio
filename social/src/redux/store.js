import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: "hey everyone", likesCount: 15},
                {id: 1, message: "it's my first post", likesCount: 7}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};


export default store;
window.store = store;