const Dash = require('dash');
const clientConfig = require('./connect');

const client = new Dash.Client(clientConfig);

const registroNome = async () => {

    const identity = await client.platform.identities.get('<id>');
    const nomeRegistro = await client.platform.names.register(
        '<nome>.dash',
        { dashUniqueIdentityId: identity.getId() },
        identity,
    );

    return nomeRegistro;
};

registroNome()
    .then((d) => console.log('Nome---:\n', d.toJSON()))
    .catch((e) => console.error('Erro------:\n', e))
    .finally(() => client.disconnect());
    