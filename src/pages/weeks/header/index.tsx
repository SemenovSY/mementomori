import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../constants';

import styles from './styles.module.scss';

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(PATH.HOME)

  return (
    <section className={ styles.header }>
      <button className={ styles.button } onClick={ goBack }>go back</button>
      <p className={ styles.title }>your <b>whole</b> life* in&nbsp;weeks:</p>
    </section>
  )
}

export default Header