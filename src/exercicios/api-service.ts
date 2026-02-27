import { ApiResponse, Usuario } from './interfaces';

export function buscarUsuarios(): ApiResponse<Usuario[]> {
    return {
        sucesso: true,
        dados: [
            { id: 1, nome: "Gabriel Correa", email: "gabriel@corp.com" },
            { id: 2, nome: "Dev", email: "dev@test.com" }
        ],
        erro: null
    };
}