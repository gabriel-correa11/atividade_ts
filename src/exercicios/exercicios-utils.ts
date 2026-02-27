import { Produto, Aluno, UnidadeTemperatura } from './interfaces';

export function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

export function formatarNome(nome: string, sobrenome?: string): string {
    return sobrenome ? `${nome} ${sobrenome}` : nome;
}

export function verificarMaioridade(idade: number): boolean {
    return idade >= 18;
}

export function formatarProduto(produto: Produto): string {
    return `Produto: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
}

export function filtrarPares(numeros: number[]): number[] {
    return numeros.filter((n) => n % 2 === 0);
}

export function converterTemperatura(valor: number, unidade: UnidadeTemperatura): number {
    if (unidade === "celsius") {
        return (valor * 9) / 5 + 32;
    }
    return ((valor - 32) * 5) / 9;
}

export function contarOcorrencias<T>(array: T[], elemento: T): number {
    return array.filter((item) => item === elemento).length;
}

export function calcularMedia(aluno: Aluno): number {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / aluno.notas.length;
}