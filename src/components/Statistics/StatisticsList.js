import PropTypes from 'prop-types';
import css from './statistics.module.css';

//Цвет фона элемента статистики в оформлении можно пропустить,
//либо создать функцию для генерации случайного цвета.

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: generateColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
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
  ),
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default Statistics;
