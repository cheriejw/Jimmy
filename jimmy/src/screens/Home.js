import React, { Component } from 'react';
import './Styles.css';


export default class Home extends Component {
	render() {
		const { match } = this.props;

		return(
			<div>
				<div class="name-container">
					<h1>Jimmy Zoo</h1>
				</div>
				<div class="about-container">
					<h3 style={{textAlign: 'center'}}>Hi my name is Jimmy Zoo and I enjoy making games. I am very serious about games, check out my tats.</h3>
				</div>
				<div class="projects-container">
					<h3 style={{textAlign: 'center'}}>Here are my exciting projects that showcase my passion for games. Also, {match.params.id}</h3>
				</div>
			</div>
		)
	}
}