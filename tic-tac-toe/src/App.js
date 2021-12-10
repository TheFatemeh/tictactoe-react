import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BLOCK from './block';
import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	state = {
		blocks: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
			{ id: 6, value: 0 },
			{ id: 7, value: 0 },
			{ id: 8, value: 0 },
			{ id: 9, value: 0 },
		],
	};
	
	handleClick = (id) => {
		let blocks = [...this.state.blocks];
		const idx = blocks.findIndex((block) => {
		  return block.id === id;
		});
		blocks[idx].value++;
		this.setState({ blocks });
	};
	
	render() {
		return (
			<div className="box">
				<Box >
					<Grid container spacing={1} >
						<Grid container item className="row">
							<BLOCK blockid={this.state.blocks[0].id} value={this.state.blocks[0].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[1].id} value={this.state.blocks[1].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[2].id} value={this.state.blocks[2].value} handleClick={this.handleClick} />
						</Grid>
						<Grid container item className="row">
							<BLOCK blockid={this.state.blocks[3].id} value={this.state.blocks[3].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[4].id} value={this.state.blocks[4].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[5].id} value={this.state.blocks[5].value} handleClick={this.handleClick} />
						</Grid>
						<Grid container item className="row">
							<BLOCK blockid={this.state.blocks[6].id} value={this.state.blocks[6].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[7].id} value={this.state.blocks[7].value} handleClick={this.handleClick} />
							<BLOCK blockid={this.state.blocks[8].id} value={this.state.blocks[8].value} handleClick={this.handleClick} />
						</Grid>
					</Grid>
				</Box>
			</div>
		)
	}
}
