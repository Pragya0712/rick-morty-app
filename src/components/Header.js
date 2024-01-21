import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				sx={{
					mt: 3,
					background: "transparent",
					boxShadow: "none",
				}}>
				<Stack direction='column' alignItems='center'>
					<Typography
						component='div'
						align='center'
						sx={{ typography: { sm: "h5", xs: "h6" } }}>
						Characters of
					</Typography>
					<Typography
						component='div'
						align='center'
						sx={{ typography: { sm: "h1", xs: "h2" } }}>
						<Box fontWeight='fontWeightBold'>Rick and Morty</Box>
					</Typography>
				</Stack>
			</AppBar>
		</Box>
	);
};

export default Header;
