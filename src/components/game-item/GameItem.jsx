import ActiveButton from '../active-button/ActiveButton';
import s from './Index.module.sass';

function GameItem({
	date,
	away_score,
	away_team_object,
	home_score,
	home_team_object,
}) {
	return (
		<div className={s.tableContainer}>
			<p>{date}</p>

			<div className={s.teamsContainer}>
				<div className={s.teamInfo}>
					<img src={team.image} alt={team.name} />
					<p>{team.name}</p>
				</div>
				<div className={s.teamInfo}>
					<img src={team.image} alt={team.name} />
					<p>{team.name}</p>
				</div>
			</div>

			<div>
				<p>{away_score}</p>
				<p>{home_score}</p>
			</div>

			<div className={s.icon}></div>
			<ActiveButton children={'Szczegóły'} props={'Border'} />
		</div>
	);
}

export default GameItem;
