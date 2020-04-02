const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
  type Book {
    title: String
    author: String
    description: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    createBook(title: String, author: String, description: String): Book
  }
  schema {
    query: Query
    mutation: Mutation
  }
`
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    description: "testing shit"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    description: "Shit is getting real"
  },
  {
    title: "test book",
    author: "Moses west",
    description: "This is a demo graphQL project"
  }
]

function save({ title, author, description }) {
  let item = { title, author, description }
  books.unshift(item)
  return item
}

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    async createBook(_, { title, author, description }) {
      return await save({ title, author, description })
    }
  }
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
