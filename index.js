import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

// app.get("/", async (req, res) => {
// try {
//     const response = await axios.get("https://api.animechan.io/v1/quotes/random");
//     const result = response.data;
//     console.log(result);
//     res.render("index.ejs", { content: result });
//   } catch (error) {
//     console.error("Failed to make request:", error.message);
//     res.render("index.ejs", {
//       error: error.message,
//     });
//   }
// });




app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});