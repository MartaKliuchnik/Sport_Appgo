import { useContext } from 'react';
import { Context } from '../../context';
import InfoLine from '../../components/info-line/InfoLine';
import s from './Index.module.sass';
import TabelItem from '../../components/tabel-item/TabelItem';
import TableGradation from '../../components/tabel-gradation/TabelGradation';

function TabelPage() {
	const { tableInfo } = useContext(Context);
	console.log(tableInfo);

	const tableHeaderInfo = ['LP.', 'DRUŻYNA', 'M', 'B', 'RB', 'P'];

	const tableGradation = [
		{ color: '#1c336c', title: 'Awans - Liga Mistrzów (Runda grupowa)' },
		{ color: '#c82e2d', title: 'Awans - Liga Europy (Runda grupowa)' },
		{ color: '#fe5f5f', title: 'Championship' },
	];

	return (
		<div className='wrapper'>
			<InfoLine children={'Mecze'} />

			<div className={s.tableHeaderContainer}>
				{tableHeaderInfo.map((el) => (
					<p key={el}>{el}</p>
				))}
			</div>

			{tableInfo.map((el) => (
				<TabelItem key={el.team.id} {...el} />
			))}

			<div className={s.gradationContainer}>
				{tableGradation.map((item) => (
					<TableGradation key={item.color} {...item} />
				))}
			</div>
		</div>
	);
}

export default TabelPage;
