const Dash = require('dash');
const clientConfig = require('./connect');


const client = new Dash.Client(clientConfig);


//const recuperarId = async () => {

     //   const acc = await client.getWalletAccount();
   //     return acc.identities.getIdentityIds();
// 
//};  Retorna as Identidades  .then((d) => console.log('Identidades:\n', d))

/////////////////////////////////////////////////////////////////////
  
//  const recuperarNome = async () => {

  //     return client.platform.names.resolve('Testando.dash');
  // } Retornar o nome solicitado .then((d) => console.log('Nome:\n', d.toJSON()))

  //////////////////////////////////////////////////////////////////////
 
//   const recuperarNome = async () => {


  //      return client.platform.names.resolveByRecord('dashUniqueIdentityId','<id>');
   // };  Recupera o nome pela Id

   //recuperarNome() -- .then((d) => console.log('Nome:\n', d[0].toJSON()))
///////////////////////////////////////////////////////////////////////////////////
    

const recuperarNome = async () => {
        return client.platform.names.search('test','dash'); // Search de nomes
    };


recuperarNome()
    
    .then( (d) => {

        for(const name of d) {

            console.log('Nomes------:\n', name.toJSON());
       }
    })
   .catch((e) => console.error('Erro------:\n', e))
    .finally(() => client.disconnect());


