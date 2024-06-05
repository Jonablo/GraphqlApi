import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.json({
      message: 'HI WORLD'
    });
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
}

startServer();