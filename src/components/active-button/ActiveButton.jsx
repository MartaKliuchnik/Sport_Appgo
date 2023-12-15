import { Link } from 'react-router-dom';
import s from './Index.module.sass';
import { ArrowRightOutlined } from '@ant-design/icons';

function ActiveButton({ children, props }) {
	const styleButton =
		props === 'nonBorder'
			? { border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }
			: {};

	const styleLink =
		props === 'Border'
			? { border: '1px solid #d5e0e8', padding: '10px', borderRadius: '5px' }
			: {};

	const linkItem = children === 'Mecze' ? '/' : '/tabela';

	return (
		<Link to={linkItem} className={s.linkContainer} style={styleButton}>
			{children}

			<div className={s.imgContainer}>
				<ArrowRightOutlined
					style={{
						color: '#fc5c16',
						fontSize: '8px',
					}}
				/>
			</div>
		</Link>
	);
}

export default ActiveButton;
