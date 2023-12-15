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
	const [allGamesShow, setAllGamesShow] = useState(false);

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

	function getShowingGames() {
		setGamesShow(gamesInfo.filter((el) => el.round <= 3));
	}

	useEffect(() => {
		if (allGamesShow) {
			setGamesShow(gamesInfo);
		} else {
			getShowingGames();
		}
	}, [allGamesShow]);

	function updateGamesShow({ direction, round }) {
		if (direction === 'forward') {
			round === 12
				? setGamesShow(
						gamesInfo.filter(
							(game) => game.round > round && game.round <= round + 1
						)
				  )
				: setGamesShow(
						gamesInfo.filter(
							(game) => game.round > round && game.round <= round + 3
						)
				  );
		} else if (direction === 'backward' && round > 3) {
			round === 13
				? setGamesShow(
						gamesInfo.filter(
							(game) => game.round <= round - 1 && game.round > round - 4
						)
				  )
				: setGamesShow(
						gamesInfo.filter(
							(game) => game.round <= round - 3 && game.round > round - 6
						)
				  );
		}
	}

	useEffect(() => {
		getTableInfo();
		getGamesInfo();
	}, []);

	useEffect(() => {
		getShowingGames();
	}, [gamesInfo]);

	return (
		<Context.Provider
			value={{
				tableInfo,
				gamesShow,
				setGamesShow,
				updateGamesShow,
				allGamesShow,
				setAllGamesShow,
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
