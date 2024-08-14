import express from "express";
//import space

// declaration // initialization
const app = express();
const PORT = 4000;

//middleware

//routes

app.get("/", (req, res) => {
  // 1. message

  // res.status(200).json({message:"Hi! Guys Welcome to  GD Coders"})

  // 2.send

  // res.status(200).send("hai! welcome back")

  // 3. send via html

  res
    .status(200)
    .send(
      `<div style="background-color:blue; color:white;"><h1>Hai! Guys Welcome to GD Coders House</h1></div>`
    );
});

// running port
app.listen(PORT, () => {
  console.log(`App is listening on the port ${PORT}`);
});
