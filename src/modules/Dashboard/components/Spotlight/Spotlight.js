import React from 'react';
import { faPlay, faPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Background, Title, Description, Watch, Options } from './styled';
import Button from '../../../../components/Button';

const Spotlight = ({ spotlight }) => {
	return (
		<Wrapper>
			<Background src={`https://image.tmdb.org/t/p/original/${spotlight.backdrop_path}`} />
			<Title>{spotlight.title}</Title>
			<Options>
				<Button text='Assistir' icon={faPlay} />
				<Button text='Minha lista' icon={faPlus} />
				<Button text='Mais informações' icon={faInfoCircle} />
			</Options>
			<Watch>Assistir à temporada 1 agora</Watch>
			<Description>{spotlight.overview}</Description>
		</Wrapper>
	);
}

export default Spotlight;