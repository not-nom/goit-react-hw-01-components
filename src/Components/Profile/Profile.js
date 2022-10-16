import styles from './Profile.module.css'
import user from './Profile.json'

export default function Profile() {
  return (
    <div className={styles.profileCard}>
        <div className={styles.firstBlock}>
            <img className={styles.img} alt="Programmaster with laptop" src={user.avatar}/>
            <h1 className={styles.name}>{user.username}</h1>
            <h3 className={styles.tagLoc}>@{user.tag}</h3>
            <h3 className={styles.tagLoc}>{user.location}</h3>
        </div>
        <div className={styles.secondBlock}>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Followers</h3>
                <h2 className={styles.tagStats}>{user.stats.followers}</h2>
            </div>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Views</h3>
                <h2 className={styles.tagStats}>{user.stats.views}</h2>
            </div>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Likes</h3>
                <h2 className={styles.tagStats}>{user.stats.likes}</h2>
            </div>
        </div>
    </div>
  )
}