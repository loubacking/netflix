import styled from 'styled-components';

export const ButtonSlider = styled('button')`
	position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
	outline: 0;
	padding: 0;
  margin: 10px 0 0 0;
	z-index: 4;
	font-size: 20px;
	${props => props.type === 'prev' ? 'left: 0;' : 'right: 0;'}
	-o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
	&:hover {
		cursor: pointer;
		font-size: 32px;
		background: rgba(0, 0, 0, 0.6);
	}
`;

export const Wrapper = styled('div')`
	width: 30px;
	color: #fff;
	display: block;
	margin: 0 auto;
	${props => props.type === 'prev' ? 'transform: rotateZ(90deg);' : 'transform: rotateZ(-90deg);'}
`;