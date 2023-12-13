import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../../pages/home-page/HomePage';
import TabelPage from '../../pages/tabel-page/TabelPage';
import { useEffect, useState } from 'react';
import { Context } from '../../context';

// fetch('https://php74.appgo.pl/sport_api/api/public/api/teams')
// 	.then((res) => res.json())
// 	.then((team) => console.log(team));

// fetch(
// 	'https://php74.appgo.pl/sport_api/api/public/api/games?page=1&onPage=5&orderDirection=desc&orderBy=round'
// )
// 	.then((res) => res.json())
// 	.then((team) => console.log(team));

function App() {
	const [tableInfo, setTableInfo] = useState([]);

	async function getTableInfo() {
		try {
			await fetch('https://php74.appgo.pl/sport_api/api/public/api/table')
				.then((res) => res.json())
				.then((json) => setTableInfo(json));
		} catch (error) {
			console.error('Error:', error);
		}
	}

	useEffect(() => {
		getTableInfo();
	}, []);

	return (
		<Context.Provider
			value={{
				tableInfo,
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
