import { Link } from 'react-router-dom';
import s from './Index.module.sass';
import { ArrowRightOutlined } from '@ant-design/icons';

function ActiveButton({ children, props }) {
	const styleButton =
		props === 'nonBorder'
			? { border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }
			: {};

	const linkItem = children === 'Mecze' ? '/' : '/tabela';

	return (
		<div className={s.linkContainer}>
			<Link to={linkItem} style={styleButton}>
				{children}
			</Link>

			<div className={s.imgContainer}>
				<ArrowRightOutlined
					style={{
						color: '#fc5c16',
						fontSize: '8px',
					}}
				/>
			</div>
		</div>
	);
}

export default ActiveButton;
