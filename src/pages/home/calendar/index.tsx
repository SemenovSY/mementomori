import WeekDay from './weekDay';

import styles from './styles.module.scss';

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const Calendar = () => {
  const currentDayIndex = new Date().getDay();

  return (
    <div className={ styles.calendar }>
      { 
        WEEK_DAYS.map((alias, index) => (
          <WeekDay 
            key={ index } 
            aliasCharacter={ alias } 
            isLast={ index < currentDayIndex } 
            isCurrent={ index === currentDayIndex } 
          />
        ))
      }
    </div>
  )
}

export default Calendar;