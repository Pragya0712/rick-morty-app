import { Container, Grid } from "@mui/material";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { getCharacterList } from "./api/character.api";

function App() {
	const [charList, setCharList] = useState([]);

	const fetchCharList = async () => {
		try {
			const response = await getCharacterList();
			const characterList = response?.results || [];
			setCharList(characterList);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCharList();
	}, []);

	console.log(charList);
	return (
		<Container>
			<Card />
		</Container>
	);
}

export default App;
