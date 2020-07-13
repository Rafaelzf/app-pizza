export const getItem = () => {
	const objectDataStorage = {
		pizzas: converter(sessionStorage.getItem("pizzas")),
		massa: converter(sessionStorage.getItem("massa")),
		recheio: converter(sessionStorage.getItem("recheio")),
		borda: converter(sessionStorage.getItem("borda")),
		tamanho: converter(sessionStorage.getItem("tamanho")),
	};

	return objectDataStorage;
};

const converter = (obect: string | null): object[] => {
	if (typeof obect === "string") {
		if (obect !== "undefined") {
			return JSON.parse(obect);
		} else {
			return [];
		}
	}
	return [];
};

export const setItem = (key: any, chooses: any) => {
	if (key === "recheada") {
		let old: string | [] | null = sessionStorage.getItem(key);

		if (old === null) {
			old = [];
		} else {
			old = JSON.parse(old);
		}

		if (!!old) {
			return sessionStorage.setItem(key, JSON.stringify(chooses));
		}
	}

	return sessionStorage.setItem(key, JSON.stringify(chooses));
};
