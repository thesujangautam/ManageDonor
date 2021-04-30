import * as bodyParser from "body-parser";
import * as cors from "cors";
import { NextFunction, Request, Response } from "express";
//Cors and Parsers
const InitMiddleWare = (app: any) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Access Control
  app.use(function(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, email, googleId, token, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  });
};

export { InitMiddleWare };
