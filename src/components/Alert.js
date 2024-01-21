import { Alert as AlertMUI } from "@mui/material";
import React from "react";

const Alert = ({ type, label }) => {
	return <AlertMUI severity={type}>{label}</AlertMUI>;
};

export default Alert;
