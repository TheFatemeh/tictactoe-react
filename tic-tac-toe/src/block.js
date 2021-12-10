import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { Component } from "react";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.primary ,
}));

class block extends Component{
	
}

function FormBlock() {
  return (
	<React.Fragment>
    <div>
		<Item className="Item" sx={{ bgcolor: '#ACB5BA' }}>Testing</Item>
	</div>
	</React.Fragment>
  );
}


export default FormBlock;