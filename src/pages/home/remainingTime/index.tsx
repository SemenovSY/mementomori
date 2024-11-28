import { useContext } from 'react';
import NativeScrollBlock from './nativeScrollBlock';

import { discharge } from './utils';
import { UserContext } from '../../../context';

import styles from './styles.module.scss';

const RemainingTime = () => {
  const { remainingTime } = useContext(UserContext); 

  const items = [
    {
      value: remainingTime.minutesLeft,
      unit: 'minutes'
    },
    {
      value: remainingTime.hoursLeft,
      unit: 'hours'
    },
    {
      value: remainingTime.daysLeft,
      unit: 'days'
    },
    {
      value: remainingTime.yearsLeft,
      unit: 'years'
    }
  ]

  return (
    <NativeScrollBlock>
      {
        items.map(item => (
          <div key={ item.unit } className={ styles.item }>
            <p className={ styles.value }>{ discharge(item.value, ',') }</p>
            <p className={ styles.unit }>{ item.unit }&nbsp;left</p>
          </div>
        ))
      }
    </NativeScrollBlock>
  )
}

export default RemainingTime;