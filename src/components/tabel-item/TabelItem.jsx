import s from './Index.module.sass';

export default function TabelItem({
	games,
	goals_conceded,
	goals_ratio,
	goals_scored,
	points,
	team,
}) {
	return (
		<div className={s.tableContainer}>
			<p>{team.id}</p>
			<div className={s.teamInfo}>
				<img src={team.image} alt={team.name} />
				<p>{team.name}</p>
			</div>
			<p>{games}</p>
			<p>
				{goals_conceded}:{goals_ratio}
			</p>
			<p>{goals_scored}</p>
			<p>{points}</p>
		</div>
	);
}
