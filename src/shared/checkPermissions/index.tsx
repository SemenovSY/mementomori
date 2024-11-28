import { useContext, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import { PATH, STORAGE_USER_DATA_KEY } from "../../constants"
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context';

interface ICheckPermissionsProps {
  path: PATH;
  children: ReactNode;
}

const CheckPermissions: FC<ICheckPermissionsProps>  = ({ path, children }) => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const localStorageData = localStorage.getItem(STORAGE_USER_DATA_KEY);

    if(localStorageData) {
      setUserData(JSON.parse(localStorageData))
    }

    if(path === PATH.SETTINGS && Boolean(localStorageData)) {
      navigate(PATH.HOME)

      return
    }

    if(path !== PATH.SETTINGS && !userData.dateOfBirth && !localStorageData) {
      navigate(PATH.SETTINGS)

      return
    }

  }, [])

  return children;
}

export default CheckPermissions