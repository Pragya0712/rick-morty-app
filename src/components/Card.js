import {
	Card as CardMUI,
	Typography,
	CardContent,
	CardMedia,
	Box,
	Stack,
	Grid,
	CardActionArea,
} from "@mui/material";
import React from "react";
import { green, grey, red } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { Circle } from "@mui/icons-material";

const Card = ({ name, status, species, gender, origin, location, image }) => {
	const subDetails = [
		{
			title: "Last known location:",
			content: location,
		},
		{
			title: "First seen in:",
			content: origin,
		},
	];

	return (
		<CardMUI
			sx={{
				maxWidth: 300,
				height: "100%",
				backgroundColor: alpha(grey[700], 0.8),
			}}>
			<CardActionArea>
				<CardMedia component='img' image={image} alt={name} />
				<CardContent>
					<Stack spacing={2}>
						<Stack direction='column'>
							<Typography component='div' variant='h5'>
								{name}
							</Typography>
							<Stack direction='row' alignItems='center' gap={1}>
								<Circle
									fontSize='sm'
									sx={{
										color:
											status === "Alive"
												? green[500]
												: status === "Dead"
												? red[500]
												: grey[400],
									}}
								/>
								<Typography
									variant='subtitle1'
									color='text.secondary'
									component='div'>
									{status} — {species}
								</Typography>
							</Stack>
						</Stack>
						{subDetails.map(({ title, content }, index) => (
							<Stack key={index} direction='column'>
								<Typography
									color='text.secondary'
									component='div'
									variant='subtitle2'>
									{title}
								</Typography>
								<Typography component='div' variant='body1'>
									{content}
								</Typography>
							</Stack>
						))}
					</Stack>
				</CardContent>
			</CardActionArea>
		</CardMUI>
	);
};

export default Card;
