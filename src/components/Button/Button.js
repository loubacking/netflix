import React from 'react';
import { Wrapper, Icon, Text } from './styled';

const Button = ({ text, icon }) => {
	return (
		<Wrapper>
			<Icon icon={icon} />
			<Text>{text}</Text>
		</Wrapper>
	);
}

export default Button;