import styles from './Profile.module.css'
import PropTypes from "prop-types";


export default function Profile({avatar, username, tag, location, stats}) {
  return (
    <div className={styles.profileCard}>
        <div className={styles.firstBlock}>
            <img className={styles.img} alt="Programmaster with laptop" src={avatar}/>
            <h1 className={styles.name}>{username}</h1>
            <h3 className={styles.tagLoc}>@{tag}</h3>
            <h3 className={styles.tagLoc}>{location}</h3>
        </div>
        <div className={styles.secondBlock}>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Followers</h3>
                <h2 className={styles.tagStats}>{stats.followers}</h2>
            </div>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Views</h3>
                <h2 className={styles.tagStats}>{stats.views}</h2>
            </div>
            <div className={styles.card}>
                <h3 className={styles.tagName}>Likes</h3>
                <h2 className={styles.tagStats}>{stats.likes}</h2>
            </div>
        </div>
    </div>
  )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired
    }),
}