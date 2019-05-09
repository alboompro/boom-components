# Boom Components

Uma biblioteca de componentes React para utilização em projetos da Alboom

## Instalação

Certifique-se de possuir acesso ao repositório adicionando o arquivo `.npmrc` ao seu projeto:

```
always-auth=true
@alboom:registry=https://npm.fury.io/alboom/
//npm.fury.io/alboom/:_authToken=4T6WshJdADHBg-_rPs-r
```

Depois, execute, de acordo com seu gerenciador de pacotes:

```bash
yarn add @alboom/boom-components
```

```bash
npm install @alboom/boom-components --save
```

## Utilização

```javascript
import Button from "@alboom/boom-components/general/button";

const MyComponent = ({ btnLabel }) => {
  return (
    <div>
      <Button>{btnLabel}</Button>
    </div>
  );
};
```

### Contributing Guide

Read our [contributing guide](https://gitlab.com/alboom/boom-components/blob/master/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Boom Components.
