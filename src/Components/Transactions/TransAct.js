import styles from './Transact.module.css'
import TransActList from './Transact.json'

export default function TransAct() {
  return (
        <table className={styles.Block}>
            <tr className={styles.example}>
                <td className={styles.columnBlock}>Type</td>
                <td className={styles.columnBlock}>Amount</td>
                <td className={styles.columnBlock}>Currency</td>
            </tr>
            {TransActList.map((List) =>{
                return(
                    <tr className={styles.row}>
                        <td className={styles.columnBlock}>{List.type}</td>
                        <td className={styles.columnBlock}>{List.amount}</td>
                        <td className={styles.columnBlock}>{List.currency}</td>
                    </tr>
                )
            })}
        </table>
    )
}