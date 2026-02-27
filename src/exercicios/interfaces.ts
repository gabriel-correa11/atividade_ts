export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string;
}

export interface Aluno {
    nome: string;
    notas: number[];
    matricula: string;
}

export interface Usuario {
    id: number;
    nome: string;
    email: string;
}

export interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

export type UnidadeTemperatura = "celsius" | "fahrenheit";

export type ApiResponse<T> = {
    sucesso: boolean;
    dados: T | null;
    erro: string | null;
};

export interface ListaTarefasProps {
    tarefas: Tarefa[];
    onToggle: (id: number) => void;
}