import Flag from '../../assets/iconsEngland.png';
import ActiveButton from '../active-button/ActiveButton';
import s from './Index.module.sass';

function InfoLine({ children }) {
	return (
		<div className={s.container}>
			<div className={s.counrtyInfo}>
				<img src={Flag} alt='Flag_of_England' />
				<p>Anglia: Premier League</p>
			</div>
			<ActiveButton props={'nonBorder'} children={children} />
		</div>
	);
}

export default InfoLine;
