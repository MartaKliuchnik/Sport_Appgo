import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../../pages/home-page/HomePage';
import TabelPage from '../../pages/tabel-page/TabelPage';
import { useEffect, useState } from 'react';
import { Context } from '../../context';

function App() {
	const [tableInfo, setTableInfo] = useState([]);
	const [gamesInfo, setGamesInfo] = useState([]);
	const [gamesShow, setGamesShow] = useState([]);
	const [currentRound, setCurrentRound] = useState(0);

	async function getTableInfo() {
		try {
			await fetch('https://php74.appgo.pl/sport_api/api/public/api/table')
				.then((res) => res.json())
				.then((json) => setTableInfo(json));
		} catch (error) {
			console.error('Error:', error);
		}
	}

	async function getGamesInfo() {
		try {
			await fetch(
				'https://php74.appgo.pl/sport_api/api/public/api/games?page=1&onPage=130&orderDirection=desc&orderBy=round'
			)
				.then((res) => res.json())
				.then((json) =>
					setGamesInfo(json.data.sort((a, b) => a.round - b.round))
				);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function getShowingGames(games) {
		setGamesShow(games.filter((el) => el.round <= 3));
	}

	function updateGamesShow({ direction, currentRound }) {
		if (direction === 'forward') {
			currentRound === 12
				? setGamesShow(
						gamesInfo.filter(
							(game) =>
								game.round > currentRound && game.round <= currentRound + 1
						)
				  )
				: setGamesShow(
						gamesInfo.filter(
							(game) =>
								game.round > currentRound && game.round <= currentRound + 3
						)
				  );
		} else if (direction === 'backward' && currentRound > 3) {
			currentRound === 13
				? setGamesShow(
						gamesInfo.filter(
							(game) =>
								game.round <= currentRound - 1 && game.round > currentRound - 4
						)
				  )
				: setGamesShow(
						gamesInfo.filter(
							(game) =>
								game.round <= currentRound - 3 && game.round > currentRound - 6
						)
				  );
		}
	}

	useEffect(() => {
		getTableInfo();
		getGamesInfo();
	}, []);

	useEffect(() => {
		getShowingGames(gamesInfo);
	}, [gamesInfo]);

	return (
		<Context.Provider
			value={{
				tableInfo,
				gamesShow,
				setGamesShow,
				updateGamesShow,
			}}
		>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/tabela' element={<TabelPage />} />
			</Routes>
		</Context.Provider>
	);
}

export default App;
