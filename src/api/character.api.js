export const getCharacterList = async (page) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character?page=${page}`
	);
	const res = await response.json();

	return res;
};
