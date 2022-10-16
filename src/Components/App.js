import React from 'react';
import FriendList from './FriendList/FriendList';
import Profile from "./Profile/Profile";
import Stats from './Stats/Stats'
import TransAct from './Transactions/TransAct'

export default function App() {
    return(
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet"/>
            <Profile></Profile>
            <FriendList></FriendList>
            <Stats></Stats>
            <TransAct></TransAct>
        </div>
    )
}