const Dash = require('dash');
const clientConfig = require('./connect');


const client = new Dash.Client(clientConfig);

const createId = async () => {
    return client.platform.identities.register();

};



//const run = async () => {

// const id = await createId();
//  console.log("ID------>:\n", id);

//}

//run();

createId()
    .then((d) => console.log('Identidade---:\n', d.toJSON()))
    .catch((e) => console.error('Erro------:\n', e))
    .finally(() => client.disconnect());

    