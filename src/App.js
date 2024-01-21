import {
	Container,
	Grid,
	ThemeProvider,
	Toolbar,
	Typography,
	createTheme,
} from "@mui/material";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { getCharacterList } from "./api/character.api";
import Header from "./components/Header";
import Loading from "./components/Loading";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [charList, setCharList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);

	const fetchCharList = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await getCharacterList(page);
			const characterList = response?.results || [];

			setCharList((prevList) => [...prevList, ...characterList]);
			setPage((prevPage) => prevPage + 1);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop <
				document.documentElement.offsetHeight ||
			isLoading ||
			page > 42
		) {
			return;
		}
		fetchCharList();
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isLoading]);

	useEffect(() => {
		fetchCharList();
	}, []);

	// console.log(charList);
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ mt: 5 }}>
				<Grid container spacing={5}>
					{charList?.map((character, index) => (
						<Grid key={index} item xs={6}>
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
				{isLoading && <Loading />}
			</Container>
		</ThemeProvider>
	);
}

export default App;
