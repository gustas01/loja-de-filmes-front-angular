A aplicação em questão se trata de uma simulação de loja de filmes, onde está presente apenas o desenvolvimento do frontEnd, os dados usados para montar o projetos são da APIdo TMDB (The Movie DataBase) cuja documentação pode ser encontrada aqui https://developers.themoviedb.org/3/getting-started/introduction.

O repositório do backend dessa aplicação se encontra aqui: https://github.com/gustas01/loja-de-filmes-back-NodeJS

## Overview da aplicação
### Cabeçalho e conteúdo (Modo escuro e modo claro)
![home](https://user-images.githubusercontent.com/50846424/210090035-047508a2-03bc-4b57-a5ea-716218e8cdbe.png)

Os filmes exibidos na página inicial são os filmes em alta na semana.
No cabeçalho da página tem alguns ícone interativos, sendo eles:
* Um ícone de uma câmera filmadora que simboliza o intuito do site, que se trata de filmes. Esse ícone quando clicado, leva o usuário para a página inicial.
* Um input de pesquisa de filmes juntamente com um ícone de lupa para fazer a pesquisa. Basta digitar algo relacionado ao nome do filme e clicar na lupa que a pesquisa será feita e exibos os resultados na página inicial.
* Outro ícone, porém agora com a função de habilitar/desabilitar um modo noturno na aplicação.
* O nome do usuário logado, que é um clicável que exibe as opções da conta e logout.
* Mais 2 ícones, o primeiro deles que exibirá os favoritos marcados pelo usuário, e o segundo mostrará a lista dos filmes salvos no carrinho de compras. E esses ícones têm uma indicação de quantos itens estão salvos em suas respectivas listas. <br> <br>

E claro, o layout está responsivo <br>
![responsive](https://user-images.githubusercontent.com/50846424/210090141-686933ab-f94c-4407-bcaa-822b0e22a83b.png)

Além de ser possível buscar o filme pelo nome e os resultados serão exibidos na tela principal.
![search](https://user-images.githubusercontent.com/50846424/210090747-e3234d55-376e-47c4-94e2-56b63596cbad.PNG)



Nos cards de cada filme, tem-se botões de adicionar aos favoritos (coração) e adicionar no carrinho de compras para checkout. E clicando no card do filme, o usuário será direcionado para uma página contendo mais informações sobre o filme, como sinopse e link para trailer do mesmo no youtube. E o plano de fundo da página é dinâmico, e se altera de acordo com o filme que está sendo exibido os detalhes. Mais abaixo nessa tela, tem um carousel com os poster dos filmes relacionados ao que está sendo mostrado.
![details](https://user-images.githubusercontent.com/50846424/210090260-9e4d4267-3db6-45ad-bb79-61f4e9d3b3cf.PNG)


### Página de checkout
Essa página consiste em um formulário para o cliente entrar com suas informações e uma sessão com as informações do carrinho. O botão de finalizar compra só fica habilitado quando o usuário entra com todos os dados solicitados e chega no passo de "Finalizar".


# Instruções para executar a aplicação
OBS: O NodeJS deve estar instalados no ambiente onde será executado o projeto. E também o backend referenciado no começo desde readMe deve estar em execução.

1º - Com um terminal aberto na raiz do projeto, execute o comando  `npm i` para que as dependências sejam instaladas.<br>

2º - Ainda com o terminal aberto na raiz, execute o comando  `npm start` para executar a aplicação. Uma aba no seu navegador será aberta no endereço `http://localhost:3000/`
