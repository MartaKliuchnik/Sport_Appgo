import { useContext } from 'react';
import InfoLine from '../../components/info-line/InfoLine';
import { Context } from '../../context';
import GameItem from '../../components/game-item/GameItem';
import s from './Index.module.sass';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function HomePage() {
	const { gamesShow } = useContext(Context);

	const uniqueRounds = new Set(gamesShow.map((game) => game.round));

	return (
		<div className={s.homeContainer}>
			<div className='wrapper'>
				<InfoLine children={'Tabela'} />

				{Array.from(uniqueRounds).map((round) => (
					<div key={round}>
						<div className={s.roundContainer}>
							<p>RUNDA {round}</p>
						</div>
						{gamesShow.map((game) => {
							if (game.round === round) {
								return <GameItem key={game.id} {...game} />;
							} else {
								return null;
							}
						})}
					</div>
				))}
			</div>

			<div className={s.navigation}>
				<div>
					<LeftOutlined style={{ color: '#fc5c16', fontSize: '10px' }} />
					<p>Wstecz</p>
				</div>
				<div>
					<p>Dalej</p>
					<RightOutlined style={{ color: '#fc5c16', fontSize: '10px' }} />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
