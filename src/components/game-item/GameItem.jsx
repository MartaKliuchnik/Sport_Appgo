import ActiveButton from '../active-button/ActiveButton';
import s from './Index.module.sass';
import { Link } from 'react-router-dom';
import { DesktopOutlined } from '@ant-design/icons';

function GameItem({
	date,
	away_score,
	away_team_object,
	home_score,
	home_team_object,
}) {
	return (
		<div className={s.gameContainer}>
			<p>{date}</p>

			<div className={s.teamsContainer}>
				<div className={s.teamInfo}>
					<img src={away_team_object.image} alt={away_team_object.name} />
					<p>{away_team_object.name}</p>
				</div>
				<div className={s.teamInfo}>
					<img src={home_team_object.image} alt={home_team_object.name} />
					<p>{home_team_object.name}</p>
				</div>
			</div>

			<div className={s.score}>
				<p>{away_score}</p>
				<p>{home_score}</p>
			</div>

			<div className={s.buttonContainer}>
				<Link to='/tabela' className={s.icon}>
					<DesktopOutlined style={{ color: '#899daf' }} />
				</Link>
				<ActiveButton children={'Szczegóły'} props={'Border'} />
			</div>
		</div>
	);
}

export default GameItem;
