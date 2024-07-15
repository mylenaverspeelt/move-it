# Move-it

É uma aplicação web feita em Angular que fornece uma tela de login e uma tela de cadastro para autenticação de usuários. A aplicação é responsiva e se comunica com um back-end que autentica os usuários e retorna um token JWT para acesso seguro. O projeto está hospedado no Amazon S3.

O back-end desse projeto se encontra nesse reporitorio: https://github.com/mylenaverspeelt/move-it-api

### Funcionalidades

- Tela de Login: Permite que os usuários existentes se autentiquem usando email e senha.
- Tela de Cadastro: Permite que novos usuários se registrem criando uma nova conta.
- Responsividade: O design é responsivo e funciona bem em dispositivos móveis e desktop.
- Redirecionamento: Após a autenticação bem-sucedida, o usuário é redirecionado para a página do usuário logado.
- A estrutura de pastas foi pensada para facilitar a organização e manutenção do código, seguindo boas práticas de arquitetura e design de software.

### Tecnologias Utilizadas

- Angular (v14.1.0)
- Sweet Alert 2

### Estrutura do Projeto

```
├── dist/
├── src/
│   ├── app/
│   │   ├── assets/
│   │   │   ├── svg/
│   │   │   │   ├── envelope.svg
│   │   │   │   ├── illustration.svg
│   │   │   │   ├── logo.svg
│   │   │   │   └── padlock.svg
│   │   ├── components/
│   │   │   ├── input/
│   │   │   │   ├── input.component.html
│   │   │   │   ├── input.component.scss
│   │   │   │   ├── input.component.spec.ts
│   │   │   │   └── input.component.ts
│   │   │   ├── layout/
│   │   │   │   ├── layout.component.html
│   │   │   │   ├── layout.component.scss
│   │   │   │   ├── layout.component.spec.ts
│   │   │   │   └── layout.component.ts
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.html
│   │   │   │   ├── signup.component.scss
│   │   │   │   ├── signup.component.spec.ts
│   │   │   │   └── signup.component.ts
│   │   │   ├── user-page/
│   │   │   │   ├── user-page.component.html
│   │   │   │   ├── user-page.component.scss
│   │   │   │   ├── user-page.component.spec.ts
│   │   │   │   └── user-page.component.ts
│   │   ├── services/
│   │   │   ├── auth-guard.service.spec.ts
│   │   │   ├── auth-guard.service.ts
│   │   │   ├── login.service.spec.ts
│   │   │   └── login.service.ts
│   │   ├── types/
│   │   │   └── login-response.type.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── environments/
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── styles/
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── polyfills.ts
│   │   │   └── styles.scss
│   │   └── test.ts
│   ├── .browserslistrc
│   ├── .editorconfig
│   ├── .gitignore
│   ├── README.md
│   ├── angular.json
│   ├── karma.conf.js
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
```

### Hospedagem na AWS

O front-end do projeto está hospedado no DNS: http://move-it-front.s3-website.us-east-2.amazonaws.com/login

- Criei um Bucket S3 para armazenar os arquivos do front-end
- Configurei o Bucket S3 para hospedagem de site estático e realizei upload os arquivos de build
- Configurei as Políticas de Acesso para permitir acesso público aos arquivos e também o CORS
- Testei a aplicação pelo URL pelo endpoint do Bucket S3


### Download do Projeto

Pré-requisitos:

- Git
- Node e NPM
- Angular
- Typescript

1. Abra o terminal, clone o repositório e navegue até a raiz do projeto:

```
git clone https://github.com/mylenaverspeelt/move-it.git
cd move-it
```

2. Instale as dependências

```
npm install
```

3. Execute a Aplicação

```
npm start
```

- A aplicação estará disponível em http://localhost:4200


#### Desenvolvido por: Mylena Verspeelt
