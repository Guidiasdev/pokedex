const express = require('express');
const { connect } = require('./models');

const pokemonsRouter = require('./routers/pokemons');

const app = express();

// Declarando rotas
app.use('/pokemons', pokemonsRouter);

app.listen(3000, () => {
    connect();

    console.log(`Servidor ouvindo na porta ${porta}`);
});

