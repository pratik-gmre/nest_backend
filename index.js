import dotenv from "dotenv";
import app from "./src/app.js";
import { connectToDb } from "./src/lib/db.js";
dotenv.config();

const port = process.env.PORT || 8000;

connectToDb()
  .then(() =>
    app.listen(port, () => {
      console.log(`server is running on  ${port}`);
    }),
  )
  .catch((err) => {
  console.error("DB connection failed:", err);
  process.exit(1);
});
