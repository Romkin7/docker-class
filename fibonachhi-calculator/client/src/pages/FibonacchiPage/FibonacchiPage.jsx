import React, { Component } from 'react';
import axios from 'axios';

class FibonacchiPage extends Component {
	state = {
		seenIndexes: [],
		values: {},
		index: '',
	};
	componentDidMount() {
		this.fetchValues();
	}
	handleChange = (event) => {
		this.setState({ index: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('/api/values', { index: this.index })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	fetchValues = () => {
		axios
			.get('/api/values')
			.then((response) => {
				this.setState({ values: response.data.values, seenIndexes: response.data.seenIndexes });
			})
			.catch((error) => {
				console.log(error);
			});
	};
	renderValues = () => {
		const values = [];
		for (let key in this.state.values) {
			values
				.push(
					<li key={key}>
						For index {key}, I calculated {this.state.values[key]}
					</li>,
				)
		}
		return values;
	};
	render() {
		return (
			<>
				<section>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="index">Enter your index:</label>
						<input type="number" name="index" id="index" value={this.index} onInput={this.handleChange} />
						<button type="submit">Send</button>
					</form>
				</section>
				<section>
					<h2>Indexes, that I have seen</h2>
					<ul>
						{this.state.seenIndexes.length &&
							this.state.seenIndexes.map((index) => {
								return <li key={index.number}>{index.number}</li>;
							})}
					</ul>
				</section>
				<section>
					<h2>Calculated values</h2>
					<ul>{this.renderValues()}</ul>
				</section>
			</>
		);
	}
}

export default FibonacchiPage;
