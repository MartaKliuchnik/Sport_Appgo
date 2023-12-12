import { useContext } from 'react';
import { Context } from '../../context';
import InfoLine from '../../components/info-line/InfoLine';

function TabelPage() {
	const { tableInfo } = useContext(Context);
	console.log(tableInfo);

	return (
		<div className='wrapper'>
			<InfoLine children={'Mecze'} />
		</div>
	);
}

export default TabelPage;
