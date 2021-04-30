import userController from "./user-controller";

const SetRoutes = (app: any) => {
  //Main Controller
  app
    .post("/donate", userController.donate)
    .get("/donation/:id", userController.donate)
  
};

export { SetRoutes };