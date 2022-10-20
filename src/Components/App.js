import React from 'react';
import FriendList from './FriendList/FriendList';
import Profile from "./Profile/Profile";
import Stats from './Stats/Stats'
import TransAct from './Transactions/TransAct'
import user from './Profile/Profile.json'
import friends from './FriendList/friends.json'
import data from './Stats/Stats.json'
import TransActList from './Transactions/Transact.json'

export default function App() {
    return(
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet"/>
            <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}/>
            <FriendList
            friends={friends}/>
            <Stats
            data={data}
            />
            <TransAct
            TransActList={TransActList}
            />
        </div>
    )
}
