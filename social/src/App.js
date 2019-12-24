import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile.jsx';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/friends' render={() => <Friends />}/>
                <Route path='/news' render={() => <NewsFeed/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
            </div>
        </div>
    )
};

export default App;
