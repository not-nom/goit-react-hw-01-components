import friends from './friends.json'
import styles from './FriendList.module.css'

export default function FriendList({variant = 'point'}){
    return(
        <ul>
            {friends.map((list,i) => {
                return(
                <li key={list.id} className={styles.block}>
                    <p className={list.isOnline ? styles.online : styles.out}>•</p>
                    <img src={list.avatar} className={styles.img}/>
                    <h1 className={styles.name}>{list.name}</h1>
                </li>
                )
            })}
        </ul>
    )
}