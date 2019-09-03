import React from 'react';
import { faSearch, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Logo, Wrapper, Text, MenuItems, Icon, MenuSide, Avatar } from './styled';

const Header = ({ scroll }) => {
	console.log(scroll)

	return (
		<Wrapper scroll={scroll}>
			<MenuItems>
				<Logo src='https://parentzone.org.uk/sites/default/files/580b57fcd9996e24bc43c529.png' />
				<Text bold>Início</Text>
				<Text>Sérios</Text>
				<Text>Filmes</Text>
				<Text>Adicionados recentemente</Text>
				<Text>Minha lista</Text>
			</MenuItems>
			<MenuSide>
				<Icon icon={faSearch} fontSize='18px' />
				<Text>INFANTIL</Text>
				<Icon icon={faBell} />
				<Avatar src='https://occ-0-692-1380.1.nflxso.net/art/0a23d/bd81473c570e4f6898dae0375550d809c230a23d.png' />
				<Icon icon={faCaretDown} fontSize='14px' style={{ paddingLeft: '10px' }} />
			</MenuSide>
		</Wrapper>
	);
}

export default Header;
