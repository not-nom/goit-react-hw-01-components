import PropTypes from 'prop-types'
export default function StatsItem({title,stats,className}) {
  return (
    <div className={className}>
        {title !== undefined && <h3>{title}</h3>}
        <h2>{stats}%</h2>
    </div>
  )
}
StatsItem.propTypes = {
  stats: PropTypes.number.isRequired,
}