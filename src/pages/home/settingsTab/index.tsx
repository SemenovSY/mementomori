import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../constants';

import styles from './styles.module.scss';

const SettingsTab = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(PATH.SETTINGS)

  return (
    <div className={ styles.content } onClick={ handleClick }>
      <p className={ styles.text }>don&rsquo;t put off life till tomorrow.</p>
      <span className={ styles.icon } />
    </div>
  )
}

export default SettingsTab;