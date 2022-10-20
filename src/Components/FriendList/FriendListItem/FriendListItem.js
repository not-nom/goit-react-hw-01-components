import PropTypes from 'prop-types'
import styles from "./FriendListItem.module.css";

export default function FriendListItem({avatar,name,isOnline}) {
  return (
    <li className={styles.block}>
        <p className={isOnline ? styles.online : styles.out}>•</p>
        <img src={avatar} alt={name} className={styles.img}/>
        <h1 className={styles.name}>{name}</h1>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}