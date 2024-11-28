import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context';
import { PATH, STORAGE_USER_DATA_KEY, TOTAL_YEARS_COUNT } from '../../constants';

import styles from './styles.module.scss';
import dayjs from 'dayjs';

const Settings = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { setUserData, setIsLoading } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem(STORAGE_USER_DATA_KEY);
    setIsLoading(false);
  }, [])

  const saveData = () => { 
    if(!ref?.current?.value) {
      return;
    }

    const dateOfBirth = new Date(ref?.current?.value);
    const endDate = dayjs(dateOfBirth).add(TOTAL_YEARS_COUNT, 'year').toDate();

    setUserData({ dateOfBirth, endDate });
    navigate(PATH.HOME);
   }

  return (
    <main className={ styles.page }>
      <section className={ styles.content }>
        <label>
          <p className={ styles.label }>enter your date of birth:&nbsp;</p>
          <input 
            type="date" 
            id="birthday" 
            name="birthday" 
            min="1900-01-01" 
            max="2099-22-23"
            ref={ ref }
          />
        </label>
        <button className={ styles.button } onClick={ saveData }>submit</button>
      </section>
		</main>
  )
}

export default Settings