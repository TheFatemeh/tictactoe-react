import './App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BLOCK from './block';
import React, { Component } from "react";
import { Snackbar } from '@mui/material';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.turn_str = this.turn_str.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.checkBlocksForWin = this.checkBlocksForWin.bind(this);
		this.checkBlocksForDraw = this.checkBlocksForDraw.bind(this);
	}

	state = {
		blocks: [
			{ id: 0, value: 0 },
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
			{ id: 6, value: 0 },
			{ id: 7, value: 0 },
			{ id: 8, value: 0 },
		],
		turn: 0,
		open: false,
		message: ''
	};
	
	checkBlocksForWin = (blocks) => {
		const winStates = [
			[0, 4, 8], [1, 4, 7], [2, 4, 6], [3, 4, 5],
			[0, 1, 2], [6, 7, 8], [0, 3, 6], [2, 5, 8],
		];
		for (const winState of winStates) {
			if (blocks[winState[0]].value !== 0) {
				if (blocks[winState[0]].value === blocks[winState[1]].value && blocks[winState[1]].value === blocks[winState[2]].value) {
					return blocks[winState[0]].value;
				}
			}
		}
		return 0;
	}

	checkBlocksForDraw = (blocks) => {
		for (const block of blocks)
			if (block.value===0) return false;
		return true;
	}

	handleClick = (id) => {
		let blocks = [...this.state.blocks];

		if (blocks[id].value!==0) return;
		if (this.state.open===true) return;
		
		blocks[id].value = this.state.turn+1;
		this.setState({ blocks:blocks, turn:1-this.state.turn });
		
		let winner = this.checkBlocksForWin(blocks);
		if (winner === 1)
			this.setState({open:true, message:'X is the winner'});
		else if (winner === 2)
			this.setState({open:true, message:'O is the winner'});
		else if (this.checkBlocksForDraw(blocks))
			this.setState({open:true, message:'It is a draw'});
	};
	
	handleClose = () => {
		this.setState({
			blocks: [
				{ id: 0, value: 0 },
				{ id: 1, value: 0 },
				{ id: 2, value: 0 },
				{ id: 3, value: 0 },
				{ id: 4, value: 0 },
				{ id: 5, value: 0 },
				{ id: 6, value: 0 },
				{ id: 7, value: 0 },
				{ id: 8, value: 0 },
			],
			open: false
		})
	};

	turn_str = () => {
		if (this.state.turn===0) return 'X';
		if (this.state.turn===1) return 'O';
		return '';
	}

	render() {
		return (
			<div className="box">
				<Snackbar
					anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
					open={this.state.open}
					onClose={this.handleClose}
					message={this.state.message}
					autoHideDuration={5000}
				/>
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
				<p><b>{this.turn_str()}</b> Turn</p>
			</div>
		)
	}
}
