import type { FC } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IWeekDayProps {
  isLast: boolean;
  isCurrent: boolean;
  aliasCharacter: string;
}

const WeekDay: FC<IWeekDayProps> = ({ isLast, isCurrent, aliasCharacter }) => {
  const aliasClassName = clsx(
    styles.alias,
    {
      [styles['alias--colored']]: isLast || isCurrent
    }
  )

  const circleClassName = clsx(
    styles.circle,
    {
      [styles['circle--filled']]: isLast,
      [styles['circle--current']]: isCurrent,
    }
  )

  return (
    <div className={ styles.wrapper }>
      <p className={ aliasClassName }>{ aliasCharacter }</p>
      <div className={ circleClassName } />
    </div>
  )
}

export default WeekDay;