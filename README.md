O que foi desenvolvido
Para esta entrega, decidi seguir uma abordagem de Clean Architecture e Modularização, separando as responsabilidades para facilitar a manutenção e escalabilidade do código — práticas essenciais para o desenvolvimento de software profissional.

Estrutura do Projeto
interfaces.ts: Centralização de todos os contratos (Interfaces e Types). Aqui defini modelos como Produto, Aluno e o tipo genérico ApiResponse<T>.

exercicios-utils.ts: Funções de utilidade contendo a lógica dos exercícios 1 a 8, incluindo cálculos de IMC e conversores de temperatura.

api-service.ts: Implementação do Exercício 9, simulando uma resposta de API com dados mockados de usuários.

ListaTarefas.tsx: Componente React (Exercício 10) que gerencia o estado de filtros usando tipos literais e renderização condicional.

🛠️ Conceitos Aplicados
Durante o desenvolvimento, apliquei conceitos fundamentais de TypeScript solicitados em aula:

Generics (<T>): Utilizados no contador de ocorrências e na resposta da API para permitir que as estruturas sejam reutilizáveis com diferentes tipos de dados.

Props e Desestruturação: No componente CardProduto, utilizei a sintaxe de desestruturação de Props para um código mais limpo.

Renderização Condicional: Aplicação do operador short-circuit (&&) para exibir descrições opcionais e operador ternário para status de estoque.

Tipagem Estrita de Estados: O useState no componente de tarefas foi limitado aos valores "todas" | "pendentes" | "concluidas", garantindo que o filtro nunca receba um valor inválido.

✅ Validação Técnica
O código foi validado seguindo o roteiro da atividade:

Execução do comando npx tsc --noEmit para garantir que não existem erros de tipagem no projeto.

Resolução do erro TS6133 (variáveis declaradas mas não lidas), garantindo um código limpo e sem warnings.

Organização da pasta exercicios dentro de src/ para correta compilação pelo Webpack/Babel.

Grupo: Gabriel Correa, Lucas Lellis e Hannah
