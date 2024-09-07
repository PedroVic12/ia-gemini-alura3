// app/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

// Endpoint para obter agendamentos
app.get('/api/appointments', async (req, res) => {
  try {
    // Faça uma chamada para seu Google Apps Script aqui
    // Supondo que o Apps Script esteja configurado para retornar os agendamentos
    const response = await axios.get('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao obter os agendamentos.');
  }
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
