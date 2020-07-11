export const getItem = () => {
	const chooseItens = sessionStorage.getItem("@welcome-app/chooseItens");

	return chooseItens;
};

export const setItem = (chooses: any, key: any) => {
	const chave = key;
	const choices = getItem() || {};
	let userChoose: any = chooses;

	const vv = [choices, userChoose];

	sessionStorage.setItem(chave, JSON.stringify(userChoose));
};
