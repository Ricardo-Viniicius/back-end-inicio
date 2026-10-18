# 🚀 Introdução ao Desenvolvimento Back-End com Node.js & TypeScript

Repositório dedicado aos meus **primeiros passos no desenvolvimento Back-End** como parte do meu aprendizado no curso de **Desenvolvimento Full Stack**.

Neste primeiro projeto, construí uma API REST inicial aprendendo a criar servidores HTTP, gerenciar rotas dinâmicas, manipular parâmetros de requisição e tratar códigos de status HTTP apropriadamente.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática e segurança ao código.
- **Express.js**: Framework para criação de APIs e rotas HTTP.
- **tsx**: Executor TypeScript de alta performance para ambiente de desenvolvimento.

---

## 🧠 Conceitos Aprendidos e Aplicados

Durante esta aula prática de fundamentos, apliquei os seguintes conceitos:

### 1. Parâmetros na URL
- **Route Params (`req.params`)**: Utilizados para identificar recursos específicos na rota (ex: `/produtos/:id`).
- **Query Params (`req.query`)**: Utilizados para dados opcionais, filtros ou autenticações simples (ex: `/admin?senha=123`).

### 2. Status Codes HTTP (Tratamento de Respostas)
- `200 OK`: Requisição bem-sucedida.
- `401 Unauthorized`: Falha de autenticação/autorização (ex: senha incorreta).
- `404 Not Found`: Recurso/produto não encontrado no sistema.

---

## 📌 Rotas Criadas na API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/ping` | Rota de verificação do status do servidor (Health check). |
| `GET` | `/produtos` | Retorna a lista completa de produtos. |
| `GET` | `/produtos/:id` | Busca e retorna um produto específico pelo ID com validação de 404. |
| `GET` | `/admin` | Exemplo de verificação com Query Params (simulando autorização 401). |

---

## ⚙️ Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)

2. **Acesse a pasta do projeto:**
    cd "Desafio API"

3. **Instale as dependências**
    npm install

4. **Inicie o servidor de desenvolvimento**
    npx tsx src/index.ts
    (ou execute npm run dev caso tenha configurado o script no package.json)

5. **Acesse no seu navegador**
    - Status da API: http://localhost:3333/ping

    - Listar Produtos: http://localhost:3333/produtos

    - Buscar Produto: http://localhost:3333/produtos/1

✨ Desenvolvido por Ricardo durante as aulas de Full Stack.