import { calcularIMC, verificarMaioridade, filtrarPares } from './exercicios/exercicios-utils';
import { buscarUsuarios } from './exercicios/api-service';

// Teste IMC
console.log("IMC (80kg, 1.80m):", calcularIMC(80, 1.80));

// Teste Maioridade
console.log("Maior de 18 (17 anos):", verificarMaioridade(17));

// Teste API
const resposta = buscarUsuarios();
console.log("Dados da API:", resposta.dados);