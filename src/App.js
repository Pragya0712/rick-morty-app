import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { getCharacterList } from "./api/character.api";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

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
		<ThemeProvider theme={theme}>
			<Container>
				<Grid container spacing={5}>
					{charList?.map((character) => (
						<Grid item xs={6}>
							<Card
								name={character?.name}
								status={character?.status || "Unknown"}
								species={character?.species || "Unknown"}
								gender={character?.gender || "Unknown"}
								origin={character?.origin?.name || "Unknown"}
								location={character?.location?.name || "Unknown"}
								image={character?.image}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default App;
