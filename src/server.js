import app from "./app.js";
import connectDatabase from "./config/db/index.js";
import { portNumber } from "./secret.js";

try {
  app.listen(portNumber, () => {
    connectDatabase();
    console.log(`E-commerce app listening on port ${portNumber}`);
  });
} catch (error) {
  console.log(`Server listening on port error: ${error}`);
}
