import { useContext, useEffect } from 'react';
import InfoLine from '../../components/info-line/InfoLine';
import { Context } from '../../context';
import GameItem from '../../components/game-item/GameItem';
import s from './Index.module.sass';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function HomePage() {
	const { gamesShow, updateGamesShow } = useContext(Context);

	const uniqueRounds = new Set(gamesShow.map((game) => game.round));
	const cur = Math.max(...Array.from(uniqueRounds));

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
				<div
					style={cur === 3 ? { color: '#eaebed' } : {}}
					onClick={() => {
						updateGamesShow({ direction: 'backward', currentRound: cur });
					}}
				>
					<LeftOutlined
						style={
							cur === 3
								? { color: '#eaebed', fontSize: '10px' }
								: { color: '#fc5c16', fontSize: '10px' }
						}
					/>
					<p>Wstecz</p>
				</div>
				<div
					style={cur === 13 ? { color: '#eaebed' } : {}}
					onClick={() => {
						updateGamesShow({ direction: 'forward', currentRound: cur });
					}}
				>
					<p>Dalej</p>
					<RightOutlined
						style={
							cur === 13
								? { color: '#eaebed', fontSize: '10px' }
								: { color: '#fc5c16', fontSize: '10px' }
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
