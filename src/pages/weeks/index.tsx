import { useContext } from 'react';

import Header from './header';
import Content from './content';

import { UserContext } from '../../context';

import styles from './styles.module.scss';

const Weeks = () => {
  const { isLoading } = useContext(UserContext); 

	if(isLoading) {
		return null
	}

  return (
    <main className={ styles.page }>
      <Header />
			<Content />
      <section className={ styles.disclaimer }>
        * average human life expectancy (optimistic forecast)
      </section>
		</main>
  )
}

export default Weeks