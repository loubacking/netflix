import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { Wrapper, PopularText } from './styled';
import { getMovie, getDiscover } from '../../api';
import { Spotlight, Slider } from './components';
import * as actions from './actions';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spotlight: {},
			popular: {}
		}
	}

	componentDidMount() {
		getMovie('384018').then(result => console.log(result));
		getDiscover().then(result => {
			console.log('DISCOVER', result);
			this.setState({
				spotlight: result.data.results[0],
				popular: result.data.results.slice(2, 8)
			});
		});
	}

	render() {
		const { spotlight, popular } = this.state;
		return (
			<Wrapper>
				<Header />
				<Spotlight spotlight={spotlight} />
				<PopularText>Populares na Netflix</PopularText>
				<Slider popular={popular} />
			</Wrapper>
		)
	}
};

const mapStateToProps = ({ discover }) => ({
	discover: discover
});

export default connect(mapStateToProps, actions)(Dashboard);