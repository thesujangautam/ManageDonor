import { NextFunction, Request, Response } from "express";
import { isValidUser } from "../utils/validate";
import { userModel } from "./models";

class userController {
  static async donate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = req.body;

      if(!isValidUser(user)) throw new Error('User Format Error');

      await userModel.create(req.body)
      return res.status(201).send({
        success: true,
        message: "Thank you. Donation was Successful",
      });
    } catch (err) {
      next(err);
    }
  }
}
export default userController;
