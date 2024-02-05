const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET","POST", "PUT", "DELETE"]
}
app.options("",cors(corsConfig))
app.use(cors(corsConfig));

const server = require('http').createServer(app);
// const PORT = 5001;
const PORT = process.env.PORT || 5001



app.get('/', (req, res)=> {
  console.log('hamza')
  res.json({"name":"hamza"})
})


server.listen(PORT, ()=> {
  console.log('listening to port', PORT)
})
