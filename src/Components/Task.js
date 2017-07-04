import React, {Component} from 'react';


export default class Task extends Component {
	render() {
		return (
			<div key={this.props.index}>
				<h1>{this.props.text}</h1>
			</div>
		)
	};
}