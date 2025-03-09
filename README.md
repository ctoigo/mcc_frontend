# 📌 Projeto React com Autenticação e Cadastro de Usuários

Este projeto é uma aplicação **React + TypeScript** que permite **registrar e logar usuários** utilizando a API pública **Reqres.in**. Além disso, conta com um **Dashboard** protegido por autenticação, um formulário para cadastro de usuários e **testes automatizados**.

---

## 🚀 Tecnologias Utilizadas

- **Vite** para criação do projeto
- **React.js + TypeScript**
- **React Router** para gerenciamento de rotas
- **Styled Components** para estilização
- **Axios** para requisições HTTP
- **Vitest + React Testing Library** para testes automatizados

---

## 🛠️ Instalação e Configuração

### 1️⃣ **Clone o repositório**

```sh
 git clone https://github.com/ctoigo/mcc_frontend.git
 cd mcc_frontend
```

### 2️⃣ **Instale as dependências**

```sh
 yarn install
```

### 3️⃣ **Execute o projeto**

```sh
 yarn dev
```

Acesse **http://localhost:5173/** no navegador.

---

## 🔐 Como usar a autenticação

Para testar a autenticação, utilize os seguintes dados de login e registro:

```json
{
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}
```

- **Registro:** Acesse **`/register`** e insira o e-mail e senha acima.
- **Login:** Acesse **`/login`** e use as mesmas credenciais para acessar o Dashboard.
- **Dashboard:** Somente usuários autenticados podem acessar **`/dashboard`**.
- **Logout:** Clique no botão **Logout** para sair do sistema.

---

## 📂 Estrutura do Projeto

```
📦 src/
 ┣ 📂 components/       # Componentes reutilizáveis (Botão, Input, Navbar)
 ┣ 📂 pages/            # Páginas da aplicação (Login, Registro, Dashboard, Formulário)
 ┣ 📂 services/         # Configuração de chamadas API (Axios)
 ┣ 📂 styles/           # Estilos globais
 ┣ 📂 tests/            # Testes automatizados
 ┣ 📜 App.tsx           # Configuração principal de rotas
 ┣ 📜 main.tsx          # Ponto de entrada da aplicação
 ┗ 📜 vite.config.ts    # Configuração do Vite
```

---

## 🧪 Rodando os Testes

Para garantir a funcionalidade do projeto, rode os testes automatizados:

```sh
 yarn test
```

Os testes cobrem:

- **Login e Registro**
- **Cadastro de Usuários**
- **Proteção de Rotas (Autenticação)**
- **Interações com API**

---

## 📌 Funcionalidades

✅ Registro e Login utilizando **Reqres.in**  
✅ Proteção de Rotas com autenticação via **LocalStorage**  
✅ Dashboard dinâmico e responsivo  
✅ Cadastro de usuários via **API externa (JSONPlaceholder)**  
✅ **Testes Automatizados** garantindo a qualidade do código  
✅ Interface moderna e responsiva com **Styled Components**

---

## 🔥 Melhorias Futuras

- Adicionar **temas (dark mode)** para melhor UX
- Melhor controle de erros na autenticação e formulários

---

## 📌 Contato

Caso tenha dúvidas ou sugestões, fique à vontade para contribuir!  
📧 Email: ctoigo@gmail.com  
🐙 GitHub: [ctoigo](https://github.com/ctoigo/mcc_frontend)  
🚀 Vamos codar! 💻
