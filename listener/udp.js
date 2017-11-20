const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const port = process.argv[2];
const validations = require('./validations');
// UDP Server
// TODO: Use correct logging mechanism
server.on('error', (err) => {
  server.close();
});

server.on('message', (msg, rinfo) => {
  const msg_res = validations(msg);
  if (msg_res['success']) {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  } else {
    console.log(`Error: ${msg_res['error']}`);
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Started server: ${address.address}:${address.port}`);
});

server.bind(port);
