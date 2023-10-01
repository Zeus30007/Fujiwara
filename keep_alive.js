import express from 'express';
const server = express();

server.all(`/`, (req, res) => {
  res.send(`Please connect me to a hosting website in-order to work 24/7.`);
});

function keepAlive() {
  server.listen(3000, () => {
    console.log(`24/7 Activation Complete`);
  });
}

export default keepAlive;