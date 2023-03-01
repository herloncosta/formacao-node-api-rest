# API REST - Curso de Formação em NodeJS
## Projeto desenvolvimento durante acompanhamento das aulas, com implementação pessoal.

O projeto é uma API REST simples com os métodos:

- GET
- POST
- UPDATE
- PUT

### Funcionalidades:

- Listar todos os recursos
- Listar um recurso por id
- Criar um recurso
- Atualizar um recurso
- Deletar um recurso

Apesar de um projeto simples, foram utilizados padrões de código e validações de campos com os respectivos códigos de status HTTP para cada possível erro.

### Foi utilizado o nodemon para servir a API.

Para iniciar o projeto basta clonar este repositório, e dentro da pasta raiz utilizar o comando `npm i`, após, `npm run dev`.
Caso você queira alterar a porta a ser utilizada, basta alterar o parâmetro `PORT=3000` no arquivo `.env`, substituindo o número pela porta que você preferir.

E se você não tiver familiaridade com softwares como Imsomnia ou Postman, disponibilizei o arquivo `requests.http` onde você pode testar as requisições de dentro do VS Code. Caso esteja usando outro editor, vale apena pesquisar sobre o uso de um dos softwares citados ou qualquer outro que tenha a mesma finalidade.

Sem mais, fique a vontade para clonar o projeto e implementar da sua forma!
