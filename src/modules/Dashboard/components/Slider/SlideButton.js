import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonSlider, Wrapper } from './styled';

const SliderButton = ({ onClick, type }) => (
	<ButtonSlider onClick={onClick} type={type}>
		<Wrapper>
			<FontAwesomeIcon icon={faChevronDown} style={{ color: '#fff' }} />
		</Wrapper>
	</ButtonSlider>
);

export default SliderButton;