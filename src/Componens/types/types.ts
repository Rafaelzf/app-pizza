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
}

export interface IRecheios {
	dados: IDadosR[];
}

export interface IDadosR {
	key: string;
	nome: string;
	tipo: string;
}
