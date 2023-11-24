
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + db.threadId);
});

app.use(bodyParser.json());

// Rota para criar uma mensagem (Create)
app.post('/api/mensagens', (req, res) => {
  const { assunto, descricao, destinatario, remetente } = req.body;
  db.query('INSERT INTO mensagens (assunto, descricao, destinatario, remetente) VALUES (?, ?, ?, ?)',
    [assunto, descricao, destinatario, remetente], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// Rota para obter todas as mensagens (Read)
app.get('/api/mensagens', (req, res) => {
  db.query('SELECT * FROM mensagens', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Adicione rotas para atualização (Update) e exclusão (Delete) conforme necessário

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
