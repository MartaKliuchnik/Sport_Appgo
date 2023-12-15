import NavItem from '../../assets/Navheader.png';
import s from './Index.module.sass';

function Header() {
	return (
		<header>
			<img src={NavItem} alt='nav_item' />
		</header>
	);
}

export default Header;
