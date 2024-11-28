import { useContext } from 'react';
import Tab from './tab';
import RemainingTime from './remainingTime';
import WeeksCount from './weeksCount';
import Progress from './progress';
import Calendar from './calendar';
import SettingsTab from './settingsTab';

import { UserContext } from '../../context';

import styles from './styles.module.scss';

const Home = () => {
	const { isLoading } = useContext(UserContext); 

	if(isLoading) {
		return null
	}

	return (
		<main className={ styles.page }>
			<section className={ styles.content }>
				<Tab className={ styles.progress }>
					<Progress />
				</Tab>
				<Tab className={ styles.weeks }>
					<WeeksCount />
				</Tab>
				<Tab className={ styles.calendar }>
					<Calendar />
				</Tab>
				<Tab className={ styles.settings }>
					<SettingsTab />
				</Tab>
				<Tab className={ styles.minutes }>
					<RemainingTime />
				</Tab>
			</section>
		</main>
	)
}

export default Home;