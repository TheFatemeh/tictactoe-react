import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BLOCK from './block';
import React, { Component } from "react";


class grid extends Component{
	constructor(props) {
		super(props);
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
	
}

export default function NestedGrid() {
	
	return (
	<div className="box">
		<Box >
		  <Grid container spacing={1} >
			<Grid container item className="row">
				<React.Fragment >
					<BLOCK />
					<BLOCK />
					<BLOCK />
				</React.Fragment >
			</Grid>
			<Grid container item className="row">
				<React.Fragment >
					<BLOCK />
					<BLOCK />
					<BLOCK />
				</React.Fragment>
			</Grid>
			<Grid container item className="row">
				<React.Fragment >
					<BLOCK />
					<BLOCK />
					<BLOCK />
				</React.Fragment>
			</Grid>
		  </Grid>
		</Box>
	</div>
  );
  
}
