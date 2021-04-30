import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { SetRoutes } from "./routes";
import { InitMiddleWare } from "./middlewares";
const Port = 8081;

const app = express();
InitMiddleWare(app);
app.listen(Port, "localhost");
console.log(`Running on Port : ${Port}`);

app.use(express.static(__dirname + '/html'));
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/html/index.html');
});

SetRoutes(app);
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  console.log(err);
  res.status(400).send({ success: false, message: err.message || err });
});

export default app;
