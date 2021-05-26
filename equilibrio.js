const Dash = require('dash');
const clientConfig = require('./connect');

const client = new Dash.Client(clientConfig);

const Identidade = async () => {
    const id = '<id>';
    const montante = 1000; // Numeros de Duffs

    await client.platform.identities.topUp(id, montante);
    return client.platform.identities.get(id);
}

Identidade()
    .then((d) => console.log('Balanço de Creditos ID---:\n', d.balance))
    .catch((e) => console.error('Erro------:\n', e))
    .finally(() => client.disconnect());