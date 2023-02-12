import fastify from "fastify";

const app = fastify();
const port = 3333;

app.get("/hello", (req, res) => {
  return "Hello World";
});

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server listening on port ${port}`);
  });
