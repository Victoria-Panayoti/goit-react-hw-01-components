import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticTitle,
  StatItem,
  StatList,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} color={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsBox>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
