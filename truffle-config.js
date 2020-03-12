require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember promote hidden kitchen surge silent'; 
let testAccounts = [
"0x85b95f1d1446767e811874b47bde34556a233e0232caa53d7c0675915aa763c6",
"0xb8ba7a1da89cfca0ca81f38757b65d28ed7ab9576855f3a6e7422eb824a19350",
"0xaade40db59ddd56120d91eed2de20b16af43e8349e89dc9dec25a8253468274f",
"0xf984ea70aba35290616685402ea55cadb8817036b47de280c87cc82caaa53456",
"0xd8f50c5638cf1b598e70487078b73f03b451763acfa0143da0f0a7eb73feb17f",
"0x7b061523b720d4c44b784eb2e4b3e07c626322b53dbc896e3994a8e7caa8f5a8",
"0x30c85ae6c57f344bec1b99c17e4d3d3cf81523351a36b7c6c922621b4f088eae",
"0x2e44834e8f1b63069100ce03f67b31d12bd3ee73e203e09626ecbec1e10ef614",
"0x35ef7c460c46aefebaeb5408a8cbb43013a8b4eb386d16fde19f13fa593e9ce4",
"0x8168bbd4620ff5e26fd16789627a87f7cbfd02712699aae72e78a5c450c1e10c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
