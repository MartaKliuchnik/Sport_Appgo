import { useContext } from 'react';
import InfoLine from '../../components/info-line/InfoLine';
import { Context } from '../../context';
import RoundItem from '../../components/round-item/RoundItem';

function HomePage() {
	const { gamesInfo } = useContext(Context);
	console.log(gamesInfo);

	return (
		<div className='wrapper'>
			<InfoLine children={'Tabela'} />

			{gamesInfo.map((game) => (
				<RoundItem {...game} />
			))}
		</div>
	);
}

export default HomePage;
