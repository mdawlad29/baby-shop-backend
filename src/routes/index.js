import userRouter from "../api/users/index.js";

const basePrefix = "/api/v1";

const routes = async (app) => {
  console.log("this routes is working");
  app.use(basePrefix, userRouter);
};

export default routes;
