import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<Grid container justifyContent='center'>
			<CircularProgress />
		</Grid>
	);
};

export default Loading;
