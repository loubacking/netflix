import React, { Component } from 'react';
import Header from '../../components/Header';
import { Wrapper } from './styled';
import { Movie, Discover } from '../../api/service';
import { Spotlight } from './components'

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spotlight: {}
		}
	}

	componentDidMount() {
		Movie('384018').then(result => console.log(result));
		Discover().then(result => {
			console.log('DISCOVER', result);
			this.setState({ spotlight: result.data.results[6] });
		});
	}

	render() {
		const { spotlight } = this.state;
		return (
			<Wrapper>
				<Header />
				<Spotlight spotlight={spotlight} />
			</Wrapper>
		)
	}
};

export default Dashboard;