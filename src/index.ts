require('dotenv').config();
import {ApolloServer} from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import {log} from 'console';
import 'reflect-metadata';
import {igdb} from 'ts-igdb-client';
import {buildSchema} from 'type-graphql';
import {ApolloServerLoaderPlugin} from 'type-graphql-dataloader';
import resolvers from './resolvers';
import './utils/enum';
import {createToken} from './utils/tokenMiddleware';

async function start() {
  const schema = await buildSchema({resolvers});

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerLoaderPlugin(), responseCachePlugin()],
    context: ({req}) => ({
      req,
      id: 0,
      client: async () => {
        await createToken();
        const client = igdb(process.env.CLIENT_ID!, process.env.ACCESS_TOKEN!);
        return client;
      },
    }),
  });

  const {url} = await server.listen(4000);
  log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
