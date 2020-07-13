export interface IchooseMassa {
	massa: string[];
}

export interface IPizzas {
	pizzas: Array<object>;
}

export interface IOfertas {
	dados: IDados[];
}
export interface IDados {
	key: string;
	nome: string;
	valor: string;
}

export interface IButtons {
	home: boolean;
	destino: string;
	text?: string;
	chooses?: object;
	remetente?: string;
	disabled?: boolean;
}

export interface IRecheios {
	dados: IDadosR[];
}

export interface IDadosR {
	key: string;
	nome: string;
	tipo: string;
}

export interface IEscolhas {
	borda: IChooseBorda[];
	massa: IChooseBorda[];
	pizzas: IChoosePizza[];
	recheio: IChooseRecheio[];
	tamanho: IChooseTamanho[];
}
export interface IChoosePizza {
	pizza?: string;
	pontos?: string;
}

export interface IChooseRecheio {
	key?: string;
	nome?: string;
	tipo?: string;
}
export interface IChooseBorda {
	massa?: string;
}
export interface IChooseTamanho {
	tamanho?: string;
}
