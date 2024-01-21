import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { getCharacterList } from "./api/character.api";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [charList, setCharList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(null);

	const showAlert = () => {
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 3000);
	};

	const fetchCharList = async () => {
		setIsLoading(true);
		setAlert(null);

		try {
			const response = await getCharacterList(page);
			const characterList = response?.results || [];

			setMaxPage(response?.info?.pages);
			setCharList((prevList) => [...prevList, ...characterList]);
			setPage((prevPage) => prevPage + 1);
		} catch (err) {
			console.log("errr", err);
			showAlert();
		} finally {
			setIsLoading(false);
		}
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop <
				document.documentElement.offsetHeight ||
			isLoading ||
			page > maxPage
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
				<Grid
					display='flex'
					container
					spacing={5}
					justifyContent='center'
					alignItems='stretch'>
					{charList?.map((character, index) => (
						<Grid item key={index} md={3} sm={4}>
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
				{alert && (
					<Alert
						type={`warning`}
						label={`Unable to process request — Please try again later!`}
					/>
				)}
			</Container>
		</ThemeProvider>
	);
}

export default App;
