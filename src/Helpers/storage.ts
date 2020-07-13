export const getItem = () => {
	const chooseItens = sessionStorage.getItem("@welcome-app/chooseItens");

	return chooseItens;
};

export const setItem = (key: any, chooses: any) => {
	let old: string | [] | null = sessionStorage.getItem(key);

	if (old === null) {
		old = [];
	} else {
		old = JSON.parse(old);
	}

	if (!!old) {
		return sessionStorage.setItem(key, JSON.stringify(chooses));
	}

	return;
};
