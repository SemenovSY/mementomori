import { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

import UserContext, { INITIAL_REMAINING_TIME, IRemainingTime, type IUserData } from '../userContext';

import { STORAGE_USER_DATA_KEY } from '../../constants';
import dayjs from 'dayjs';

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<IUserProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserData>({});
  const [remainingTime, setRemainingTime] = useState<IRemainingTime>(INITIAL_REMAINING_TIME);

  const { dateOfBirth, endDate } = userData;

  useEffect(() => {
    if(!(dateOfBirth && endDate)) {
      return
    }

    setIsLoading(false);

    const now = dayjs();
    const dateOfBirthDayjs = dayjs(dateOfBirth);
    const endDateDayjs = dayjs(endDate);
  
    const minutesLeft = endDateDayjs.diff(now, 'minute');
    const hoursLeft = endDateDayjs.diff(now, 'hour');
    const daysLeft = endDateDayjs.diff(now, 'day');
    const weeksLeft = endDateDayjs.diff(now, 'week');
    const yearsLeft = endDateDayjs.diff(now, 'year');
    const totalWeeks = endDateDayjs.diff(dateOfBirthDayjs, 'week');
    const passedWeeks = now.diff(dateOfBirthDayjs, 'week');

    setRemainingTime({
      minutesLeft,
      hoursLeft,
      daysLeft,
      weeksLeft,
      yearsLeft,
      totalWeeks,
      passedWeeks
    })
  }, [dateOfBirth, endDate])

  const setData = (data: IUserData) => {
    setUserData(data);
    localStorage.setItem(STORAGE_USER_DATA_KEY, JSON.stringify(data));
  }

  return (
    <UserContext.Provider value={{ userData, setUserData: setData, remainingTime, isLoading, setIsLoading }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;