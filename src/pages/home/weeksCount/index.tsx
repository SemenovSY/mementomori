import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import { UserContext } from '../../../context';
import { PATH } from '../../../constants';

import styles from './styles.module.scss';

const WeeksCount = () => {
  const navigate = useNavigate();

  const { remainingTime } = useContext(UserContext);

  const handleClick = () => {
    navigate(PATH.WEEKS)
  }

  return (
    <div className={ styles.wrapper } onClick={ handleClick }>
      <span className={ styles.icon } />
      <div className={styles.current}>
        <p className={ styles.value }>{ remainingTime.passedWeeks }</p>
        <span className={ styles.text }>weeks</span>
      </div>
      <div className={ styles.total }>
        <span className={ styles.text }>out of</span>
        <p className={ styles.value }>{ remainingTime.totalWeeks }</p>
      </div>
      <p className={ clsx(styles.text, styles.footer) }>have already passed.</p>
    </div>
  )
}

export default WeeksCount;