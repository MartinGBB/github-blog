# ![Github Blog](https://images2.imgbox.com/92/ab/dCuh8Upz_o.png)

## Descrição do Projeto

  Este projeto é um blog que consume informações da API de Github para preencher dados do perfil e post; os post serão as issues dentro de determinado repositorio.
  Os estilos foram seguidos apartir de um templete de [Figma](https://www.figma.com/file/O1xxVJ9gUC3TV9oocO375L/GitHub-Blog-(Community)?node-id=0%3A1) fornecido pela Rocketseat.
  
 Se sentir vontade de acessar ao Deploy do projeto, pode clicar :point_right: [aqui](https://coffee-delivery-khaki.vercel.app/) e será redireccionado.
  

## Pre-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Instalação

 ```bash
  # Clone este repositório
    $ git clone git@github.com:MartinGBB/github-blog.git
  # Acesse a pasta do projeto no terminal
    $ cd github-blog

  # Instale as dependências
    $ npm install
  ```

Deve criar um arquivo env.local a raiz do projeto e passar as seguintes chaves com os dados do portafolio que você quer acessar:
  ```bash
    VITE_USER={usuario}
    REPOSITORY={repositorio} 
    
    # não deve incluir as chaves
  ```

## Execução

  ```bash
    # Execute a aplicação em modo de desenvolvimento
      $ npm run dev

    # O servidor inciará na porta:5173 - acesse <http://localhost:5173>
  ```
 
 ## Usos
  * Podera acessar ao seu perfil de github se clicar em **GITHUB** no perfil.
  * Filtro de busca de post por titulo.
  * Ao clicar no Post sera redireccionado para ver o post inteiro
    * Se clicar em **VER NO GITHUB** sera redireccionado para a issues no github
 
 
## Tecnologías
  - [React](https://pt-br.reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  
### Bibliotecas implementadas
  - [Axios](https://axios-http.com/ptbr/docs/api_intro)
  - [Styles-Components](https://styled-components.com/)
  - [React-Hook-Form](https://react-hook-form.com/get-started/)
  - [zod](https://zod.dev/?id=basic-usage)
  - [react-loading](https://github.com/fakiolinho/react-loading)
  - [Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)

  
## Autor

<a>
  <img src="https://github.com/MartinGBB.png" width="100px;" alt=""/>
  <sub><b>Martin Brazón</b></sub></a> <a href="https://github/MartinGBB" title="GitHub">
</a>


 Feito por Martin Brazón.
 
 [![Linkedin Badge](https://img.shields.io/badge/-MartinGBrazon-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/martinbrazon/)](https://www.linkedin.com/in/martinbrazon/) [![Gmail Badge](https://img.shields.io/badge/-escorpmartin97@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:escorpmartin97@gmail.com)](mailto:escorpmartin97@gmail.com)
 
