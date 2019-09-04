import React, { Component } from 'react';
import SlideButton from './SlideButton';
import './Slider.css';

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showButton: false
		};
	}

	toggleButton = () => {
		this.setState(prevState => ({ showButton: !prevState.showButton }))
	};

	render() {
		const { popular } = this.props;
		const { showButton } = this.state;
		return (
			<div class="slider" onMouseOver={this.toggleButton} onMouseOut={this.toggleButton}>
				<div class="container" >
					{popular.length > 0 && popular.map(movie => {
						return (
							<img class="item" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
						);
					})}
					{<SlideButton onClick={() => { }} type="next" onMouseOver={this.toggleButton} />}
				</div>
			</div>
		);
	}
}

export default Slider;