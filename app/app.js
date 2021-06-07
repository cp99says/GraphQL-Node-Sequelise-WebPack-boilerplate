import "@babel/polyfill";
import express from "express";
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const server = new ApolloServer({
  modules: [require("./resolvers/index.js")],
});

server.applyMiddleware({ app });

app.get("/", (req, res) => res.send("okay boomer"));

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
);

//sequelize-auto -h localhost -d payments -u root -x password --dialect mysql -o ./app/models
//above mentioned command is used to change the schema of models automatically, if the structure of  database is changed
//sequelize-auto must be installed globally also
