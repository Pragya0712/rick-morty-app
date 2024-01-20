export const getCharacterList = async () => {
	const response = await fetch("https://rickandmortyapi.com/api/character");
	const res = await response.json();

	return res;
};
