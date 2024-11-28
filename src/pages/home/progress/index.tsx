import { useContext } from 'react';

import ProgressCircle from './progressCircle';

import { UserContext } from '../../../context';

import styles from './styles.module.scss';

const Progress = () => {
  const { remainingTime: { passedWeeks, totalWeeks } } = useContext(UserContext);

  const progressPercent = Math.ceil((passedWeeks / totalWeeks) * 100);

  return (
    <div className={ styles.content }>
      <ProgressCircle progress={ progressPercent } />
      <p className={ styles.percent }>{ progressPercent }%</p>
    </div>
  )
}

export default Progress;