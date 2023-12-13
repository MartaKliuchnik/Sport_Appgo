import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../../pages/home-page/HomePage';
import TabelPage from '../../pages/tabel-page/TabelPage';
import { useEffect, useState } from 'react';
import { Context } from '../../context';

function App() {
	const [tableInfo, setTableInfo] = useState([]);
	const [gamesInfo, setGamesInfo] = useState([]);

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
				.then((json) => setGamesInfo(json.data));
		} catch (error) {
			console.error('Error:', error);
		}
	}

	useEffect(() => {
		getTableInfo();
		getGamesInfo();
	}, []);

	return (
		<Context.Provider
			value={{
				tableInfo,
				gamesInfo,
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
