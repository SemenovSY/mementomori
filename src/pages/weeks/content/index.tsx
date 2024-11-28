import { useContext } from 'react';
import { clsx } from 'clsx';

import { UserContext } from '../../../context';

import styles from './styles.module.scss';

const Content = () => {
  const { remainingTime: { passedWeeks, totalWeeks } } = useContext(UserContext);

  const WEEKS_ARRAY = [...Array(totalWeeks - 1).keys()].map(count => count + 1);

  return (
    <section className={ styles.content }>
      {
        WEEKS_ARRAY.map(item => (
          <div key={ item } className={ clsx(
            styles.circle,
            {
              [styles['circle--filled']]: item < passedWeeks,
              [styles['circle--current']]: item === passedWeeks,
            }
          ) } />
        ))
      }
      <span className={ styles.skull }>💀</span>
    </section>
  )
}

export default Content