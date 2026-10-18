import express, { Request, Response } from 'express';
import type Module = require('node:module');

const app = express();

const bancoDeProdutos = [
    { id: 1, nome: "Camisa", preco: 50.00 },
    { id: 2, nome: "Caneca Dev", preco: 34.90 },
    { id: 3, nome: "Mochila", preco: 149.90 }
];

app.get('/produtos', (req: Request, res: Response) => {
    res.json(bancoDeProdutos);
});

app.get('/produtos/:id', (req: Request, res: Response) => {
    const idUrl = req.params.id;
    const itemEncontrado = bancoDeProdutos.find(
        produto => produto.id === Number(idUrl)
    );
    res.json(itemEncontrado);

    // ... (Busca o produto com o .find) ...
    // Se a variável ficou vazia (Não encontrou o produto na array)
    if (!itemEncontrado) {
        // Envia erro 404 infrmando o problema
        return res.status(404).json({
            erro: "Produto não localizado!"
        });
    }
    res.json(itemEncontrado);
});
// Teste limitado para produtos de até 60 reais
app.get('/busca', (req: Request, res: Response) =>{
    const maximo = Number(req.query.maximo);

    // Filtra na Array
    const itensFiltrados = bancoDeProdutos.filter(
        item => item.preco <= maximo    
    );
    res.json(itensFiltrados);
});


// Código de autorização 401
app.get('/admin', (req: Request, res: Response) =>{
    const senhaEnviada = req.query.senha;

    if(senhaEnviada !== "123"){
        return res.status(401).json({
            erro: "Acesso Bloqueado. Senha incorreta"
        });
    }
    res.json({menssagem: "Acesso Liberado! Faturamento R$ 5k."});
});

// Calculadora de Descontos
app.get('/desconto/:preco', (req: Request, res: Response) =>{
    const precoOriginal= Number(req.params.preco);

    // Regra de negócio: calcula 20%
    const valorDesconto = precoOriginal *0.20;
    const precoFinal = precoOriginal - valorDesconto;

    res.json({
        original: precoOriginal,
        desconto: valorDesconto,
        final: precoFinal
    });
});










app.get('/ping', (req: Request, res: Response) => {
    res.json({
        status: "ok",
        mensagem: "Servidor E-commerce ativo!"
    });
});

app.listen(3333, () => {
    console.log("API online na porta 3333");
});
