
import styled from 'styled-components';

export const Wrapper = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const Title = styled('div')`
	color: #fff;
	font-size: 2.8vw;
	padding-top: 20%;
	padding-left: 75px;
	font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Watch = styled('div')`
	color: #fff;
	font-size: 1.6vw;
	padding-left: 75px;
	font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	width: 600px;
	margin-top: 20px;
	font-weight: 700;
`;

export const Description = styled('div')`
	color: #fff;
	font-size: 1.2vw;
	padding-left: 75px;
	font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	width: 600px;
	margin-top: 20px;
`;

export const Background = styled('img')`
	width: 100%;
	position: absolute;
	z-index: -1;
`;

export const Options = styled('div')`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	margin-left: 75px;
`;