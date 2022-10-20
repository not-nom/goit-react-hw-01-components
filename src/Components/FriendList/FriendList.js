import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes from "prop-types";

export default function FriendList({friends}){
    return(
        <ul>
            {friends.map((list) => {
                return(
                    <FriendListItem
                    key={list.id}
                    name={list.name}
                    avatar={list.avatar}
                    isOnline={list.isOnline}/>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}