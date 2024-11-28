import { createContext } from 'react';

export interface IUserData {
  dateOfBirth?: Date;
  endDate?: Date;
}

export interface IRemainingTime {
  minutesLeft: number;
  hoursLeft: number;
  daysLeft: number;
  weeksLeft: number;
  yearsLeft: number;
  totalWeeks: number;
  passedWeeks: number;
}

export const INITIAL_REMAINING_TIME = {
  minutesLeft: 0,
  hoursLeft: 0,
  daysLeft: 0,
  weeksLeft: 0,
  yearsLeft: 0,
  totalWeeks: 0,
  passedWeeks: 0
}

interface IUserContext {
  userData: IUserData,
  remainingTime: IRemainingTime,
  isLoading: boolean,
  setUserData: (data: IUserData) => void,
  setIsLoading: (value: boolean) => void
}

export default createContext<IUserContext>({
  userData: {},
  remainingTime: INITIAL_REMAINING_TIME,
  isLoading: false,
  setUserData: () => {},
  setIsLoading: (value: boolean) => value
});