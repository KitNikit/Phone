import React from 'react';
import { useState, useEffect } from 'react';

class test extends React.Component {
	state = {
		seconds: new Date('Aug 08, 2021 14:30:00') - new Date(),
	};

	tick() {
		this.setState((state) => ({
			seconds: state.seconds - 1,
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	formatTime(secs) {
		const oneDay = 24 * 60 * 60 * 1000;
		const oneHour = 60 * 60 * 1000;
		const oneMinute = 60 * 1000;
		let days = Math.floor(secs / oneDay);
		let hours = Math.floor((secs % oneDay) / oneHour);
		let minutes = Math.floor((secs % oneHour) / oneMinute);
		let seconds = Math.floor(secs % 60);
		let time = seconds + minutes + hours + days;
		if (time <= 0) {
			return ['Time is out'];
		} else {
			return [days, hours, minutes, seconds]
				.map((v) => ('' + v).padStart(2, '0'))
				.filter((v, i) => v !== '00' || i > 0)
				.join(':');
		}
	}
	render() {
		return (
			<div className='timer'>
				<div className='seconds'>
					<div className='timer-title'>Акция закончится через:</div>
					<div className='time'>
						{/* {this.state.seconds.toLocaleString()} */}
						{this.formatTime(this.state.seconds)}
					</div>
				</div>
			</div>
		);
	}
}
export default test;

// function test() {
// 	const [curTime, setTime] = useState(Date());

// 	useEffect(() => {
// 		setInterval(() => setTime(Date()), 1000);
// 	}, []);
// 	return (
// 		<div>
// 			<h1>Time is:</h1>
// 			<h2>{curTime}</h2>
// 		</div>
// 	);
// }
// export default test;

// class test extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			curTime: null,
// 		};
// 	}
// 	componentDidMount() {
// 		setInterval(() => {
// 			this.setState({
// 				curTime: new Date().toLocaleString(),
// 			});
// 		}, 1000);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Time is:</h1>
// 				<h2>{this.state.curTime}</h2>
// 			</div>
// 		);
// 	}
// }
// export default test;
