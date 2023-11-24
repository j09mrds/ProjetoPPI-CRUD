async function enviarMensagem() {
    const assunto = document.getElementById('assunto').value;
    const descricao = document.getElementById('descricao').value;
    const destinatario = document.getElementById('destinatario').value;
    const remetente = document.getElementById('remetente').value;
  
    await fetch('/api/mensagens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assunto, descricao, destinatario, remetente }),
    });
  
    carregarMensagens();
  }
  
  async function carregarMensagens() {
    const response = await fetch('/api/mensagens');
    const mensagens = await response.json();
  
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
  
    mensagens.forEach((mensagem) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `<strong>Assunto:</strong> ${mensagem.assunto}<br><strong>Descrição:</strong> ${mensagem.descricao}<br><strong>Destinatário:</strong> ${mensagem.destinatario}<br><strong>Remetente:</strong> ${mensagem.remetente}<br><strong>Data de Envio:</strong> ${mensagem.data_envio}`;
      messageList.appendChild(listItem);
    });
  }
  
  // Chame carregarMensagens() para carregar a lista quando a página carregar
  document.addEventListener('DOMContentLoaded', carregarMensagens);
  