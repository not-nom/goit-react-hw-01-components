import styles from './Stats.module.css'
import PropTypes from 'prop-types'
import StatsItem from './StatsItem/StatsItem'

export default function Stats({data}){
    return(
        <div className={styles.block}>
            <div className={styles.header}><h2 className={styles.headText}>UPLOAD</h2></div>
            <div className={styles.data}>{data.map((dt) => {
                return(
                    <StatsItem
                    className={styles.dataBlock}
                    key={dt.id}
                    title={dt.label}
                    stats={dt.percentage}
                    />
                   )
            })}
            </div>
        </div>
    )
}
Stats.propTypes = {
    data: PropTypes.array.isRequired
}