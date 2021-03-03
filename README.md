<div style="text-align: center">

![Logo move.it](./public/logo-full.svg)

</div>

Olá, seja bem-vindo(a)! Este é um projeto desenvolvido em React.JS e em Next.JS na quarta edição do evento Next Level Week da Rocketseat.

O [move.it](#) é uma aplicação que visa à preservação da saúde das pessoas, principalmente das que trabalham muito tempo em frente ao computador. O princípio de funcionamento é baseado na [Técnica Pomodoro](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro), mas com alguns diferenciais como propor desafios ao longo dos intervalos de descanso e um sistema de pontuação conforme o usuário completa os desafios.

## Requisitos

Antes de seguir os procedimentos para fazer o [move.it](#) funcionar, é necessário que você possua algumas ferramentas instaladas no seu computador:

- [x] Node.JS, o ambiente de desenvolvimento para JavaScript. Ele funcionará o servidor do Next.JS e todas as outras dependências de terceiros para que a aplicação seja executada. [Confira seu site oficial para fazer o download](https://nodejs.org).
- [x] npm (node package manager, já instalado com o Node.JS) ou Yarn. São gerenciadores de dependências de projetos JavaScript/TypeScript. Caso escolha o Yarn, [siga o procedimento de instalação do mesmo neste link](https://yarnpkg.com/getting-started/install).

> Atenção! Como se pode observar, existe o arquivo `yarn.lock` presente no projeto. Isso significa que o projeto teve as suas dependências instaladas originalmente pelo Yarn. Assim, se o `npm` for utilizado, o arquivo `yarn.lock` deve ser __deletado__  para evitar conflitos entre as ferramentas.

Pronto! Com isso sua máquina está preparada. Siga para o próximo tópico para ver o projeto funcionando.

## Como fazer a aplicação funcionar no seu computador

### Instalação

O primeiro passo é escolher uma pasta de seu computador e abrir terminal para executar o comando

```sh
git clone "https://github.com/phyJa/moveit.git"
```

Isso baixará a estrutura principal do projeto na sua pasta local, mas não as dependências de terceiros (sem as quais a aplicação não funciona). Para instalá-las, execute também no terminal

```sh
yarn
```

caso a preferência seja o yarn. Para o npm, apague o arquivo `yarn.lock` e execute o comando

```sh
npm install
```

Dessa forma, o gerenciador escolhido instala tudo o que for necessário para a aplicação funcionar.

### Funcionamento

Após instalar os itens do tópico anterior, abra uma janela do terminal na pasta raiz do projeto e execute

```sh
yarn dev
```
para o caso do yarn ou 

```sh
npm run dev
```

se o npm foi a sua escolha. O servidor iniciará o carregamento da aplicação na porta 3000. Assim, basta abrir seu navegador e digitar na barra de endereço `localhost:3000`.


## Versão publicada (deploy)

Se preferir, você pode acessar o [projeto publicamente neste link](https://moveit-zeta-one.vercel.app/), sem precisar se preocupar em fazer instalação alguma e já começar a usar a aplicação.