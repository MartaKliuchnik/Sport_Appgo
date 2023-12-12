import s from './Index.module.sass';

function TabelGradation({ color, title }) {
	return (
		<div className={s.gradationContainer}>
			<div
				style={{ backgroundColor: color }}
				className={s.colorGradation}
			></div>
			<p>{title}</p>
		</div>
	);
}

export default TabelGradation;
