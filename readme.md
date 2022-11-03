# Projeto Github Searcher
Este projeto faz uma pesquisa na api do github e retorna para a aplicação informações importantes do usuário selecionado.

## Tecnologias
Desenvolvido com typescript e redux + saga para o gerenciamento de estados. 

## Arquitetura
A parte mais importante da arquitetura está nos arquivos de gerenciamento de estado do redux e saga. 

`./state` é onde estão todas essas informações.
`./state/slices` é onde ficam os "slices", "fatias" de gerenciamento para cada feature do sistema. Por hora, conta apenas com o user.slice
`./state/sagas/actions` guarda as funções do tipo saga (generator) com sua respectiva lógica.
`./state/store` fica a lógica do setup inicial do redux, com o arquivo store.ts e sua lógica para conectar o redux ao middleware do saga.

O projeto conta também com `./types` para guardar interfaces e types gerais, como, por exemplo, `UserRepo` que é uma interface para identificar os dados que chegarão da API e serão renderizados em cards de repositórios.

Também há o cuidado na separação dos arquivos de serviço, em `./services`. Um `enum` de rotas foi fornecido, para preservar a escalabilidade do projeto em uma futura versão 2.

## Documentação
As funções mais importantes estão documentadas com JSDocs, o que facilita a consulta caso você esteja rodando a aplicação.

## Como rodar a aplicação
1. Fazer o clone do projeto
2. Navegue até a pasta do projeto 
3. `npm install` ou `yarn`
4. `npm run dev` ou `yarn run dev`

## TODO
* Adicionar responsividade: o projeto foi utilizado para aprofundar os conhecimentos em redux + saga. As interfaces não foram otimizadas neste primeiro momento
* Adicionar página para detalhes dos repositórios: o projeto está pronto para ser escalado e ter a adição de múltiplas páginas
* Feature de login + página de favoritos para usuários verificados (logados): utilizar uma fakeAPI para simular o recebimento de token
* Adicionar testes