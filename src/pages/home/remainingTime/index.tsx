import { useState, useContext } from 'react';

import { discharge } from './utils';
import { UserContext } from '../../../context';

import styles from './styles.module.scss';

const RemainingTime = () => {
  const [currentPage, setCurrentPage] = useState(1)

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

  const changePage = () => {
    if(currentPage < items.length ) {
      setCurrentPage((state) => state + 1)
    } else {
      setCurrentPage(1)
    }
  }

  return (
    <section className={ styles.section } onClick={ changePage }>
      <div className={ styles.item }>
        <p className={ styles.value }>{ discharge(items[currentPage - 1].value, ',') }</p>
        <p className={ styles.unit }>{ items[currentPage - 1].unit }&nbsp;left</p>
      </div>
    </section>
  )
}

export default RemainingTime;