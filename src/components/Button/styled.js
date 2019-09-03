import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled('div')`
	display: flex;
	background-color: rgba(51, 51, 51, 0.4);
	padding: 0.75em 2.3em;
	height: 1.2vw;
	border-radius: 0.2vw;
	margin-right: 1em;
	align-items: center;
	color: #fff;
	transition-duration: 0.2s, 0.2s, 0.2s, 0.2s;
	&:hover {
		cursor: pointer;
		color: #000;
		text-size-adjust: 100%;
		background-color: rgb(230, 230, 230);
		transform: scale(1.05);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
	display: flex;
	font-size: 18px;
	margin-right: 0.75em;
`;

export const Text = styled('div')`
	font-size: 1.1vw;
	font-weight: bold;
`;