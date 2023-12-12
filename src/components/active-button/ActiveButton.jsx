import s from './Index.module.sass';
import { ArrowRightOutlined } from '@ant-design/icons';

function ActiveButton({ children, props }) {
	const styleButton =
		props === 'nonBorder'
			? { border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }
			: {
					border: '1px solid #dae4ea',
					borderRadius: '5px',
					backgroundColor: 'transparent',
					cursor: 'pointer',
			  };

	return (
		<div className={s.linkContainer}>
			<button style={styleButton}>{children}</button>

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
