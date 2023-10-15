import express from "express";
import { recipesRoute } from "./routes/recipes.js";
import { ingredientsRoute } from "./routes/ingredients.js";

const app = express();
const port = 3000;

app.use("/recipes", recipesRoute);
app.use("/ingredients", ingredientsRoute);

app.listen(port, () => {
  console.log(`Recipe book server listening on port ${port}`);
});
