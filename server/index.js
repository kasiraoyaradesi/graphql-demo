import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Product" type defines the queryable fields for every product in our data source.
  type Product {
    id:Int
    name: String
    price: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "products" query returns an array of zero or more products (defined above).
  type Query {
    products: [Product]
  }
`;

const products = [
  {
    id:1,
    name: "Apple",
    price: 200,
  },
  {
    id:2,
    name: "Orange",
    price: 100,
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves products from the "products" array above.
const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
