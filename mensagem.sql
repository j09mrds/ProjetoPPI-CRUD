CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    assunto VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    destinatario VARCHAR(255) NOT NULL,
    remetente VARCHAR(255) NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
