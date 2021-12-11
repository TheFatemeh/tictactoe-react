import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.primary ,
}));

function handleValue(value) {
	if (value===1) return 'X';
	if (value===2) return 'O';
	return '';
}

function FormBlock({blockid, value, handleClick}) {
  return (
    <div>
		<Item className="Item" sx={{ bgcolor: '#ACB5BA' }} onClick={() => handleClick(blockid)}>
			<div className={"blockContainer " + handleValue(value)}>
				<div className="blockCenter">
					<p className="blockP">{handleValue(value)}</p>
				</div>
			</div>
		</Item>
	</div>
  );
}


export default FormBlock;