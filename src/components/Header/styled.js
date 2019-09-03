import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = styled('img')`
	width: 115px;
	margin-left: 30px;
	margin-right: 20px;
`;

export const Avatar = styled('img')`
	width: 32px;
	padding-left: 10px;
`;

export const Wrapper = styled('div')`
	display: flex;
	flex-direction: row;
	position: absolute;
	width: 100%;
	justify-content: space-between;
`;

export const Text = styled('div')`
font-weight: ${props => props.bold ? '700' : '400'};
	color: #e5e5e5;
	display: flex;
	font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 14px;
	padding-left: 10px;
	padding-right: 10px;
	align-items: center;
	-o-transition:.75s;
  -ms-transition:.75s;
  -moz-transition:.75s;
  -webkit-transition:.75s;
  transition:.75s;
	&:hover {
		cursor: pointer;
		color: #b5b5b5;
  }
`;

export const MenuItems = styled('div')`
	display: flex;
	flex-direction: row;
	margin-left: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
	display: flex;
	color: #fff;
	font-size: ${props => props.fontSize ? props.fontSize : '22px'};
	padding-left: 20px;
	padding-right: 20px;
`;

export const MenuSide = styled('div')`
display: flex;
align-items: center;
justify-content: center;
margin-right: 40px;
`;