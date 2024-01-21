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
					alignItems: "center",
				}}>
				<Stack direction='column' alignItems='center'>
					<Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
						Characters of
					</Typography>
					<Typography variant='h1' component='div' sx={{ flexGrow: 1 }}>
						Rick and Morty
					</Typography>
				</Stack>
			</AppBar>
		</Box>
	);
};

export default Header;
