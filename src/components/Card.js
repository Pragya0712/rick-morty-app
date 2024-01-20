import {
	Card as CardMUI,
	CardActionArea,
	Typography,
	CardContent,
	CardMedia,
	Box,
} from "@mui/material";
import React from "react";

const Card = () => {
	return (
		<CardMUI sx={{ backgroundColor: "gray", display: "flex" }}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component='div' variant='h5'>
						Live From Space
					</Typography>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'>
						Mac Miller
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component='img'
				sx={{ width: 151 }}
				image='/static/images/cards/live-from-space.jpg'
				alt='Live from space album cover'
			/>
		</CardMUI>
	);
};

export default Card;
