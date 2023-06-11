import express from 'express'
const app = express()
const port = 3000

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
