import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    //let newPostElement = React.createRef();

    let addMessageClick = () => {
        props.sendMessage();
    };
    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage);
    };
    //where's a mistake?
    let newMessageElement = state.newMessageText;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>
                <div className={s.formM}>
                    <div>
                        <input onChange={onMessageChange}
                               value={newMessageElement}
                               placeholder='Enter your message'
                               className={s.input}/>
                    </div>
                    <div>
                        <button onClick={addMessageClick} className={s.btn1}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;