import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { Component } from "react";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.primary ,
}));

function FormBlock({blockid, value, handleClick}) {
  return (
    <div>
		<Item className="Item" sx={{ bgcolor: '#ACB5BA' }} onClick={() => handleClick(blockid)}>{value}</Item>
	</div>
  );
}


export default FormBlock;