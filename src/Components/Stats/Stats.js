import styles from './Stats.module.css'
import data from './Stats.json'

export default function Stats(){
    return(
        <div className={styles.block}>
            <div className={styles.header}><h2 className={styles.headText}>UPLOAD</h2></div>
            <div className={styles.data}>{data.map((dt) => {
                return(
                    <div key={dt.id} className={styles.dataBlock}>
                        {dt.label !== undefined && <h3>{dt.label}</h3>}
                        <h2>{dt.percentage}%</h2>
                    </div>)
            })}
            </div>
        </div>
    )
}