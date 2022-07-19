import { Request, Response } from "express";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import validateClientData from "../validations/clientVerification.validation";
import { ValidationError, catchAsyncError } from "../utils/error";
import response from "../utils/response";
export default new (class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}
  verifyClientData = catchAsyncError(async (req: Request, res: Response) => {
    const error = validateClientData(req.body);
    this.userService;
    if (error) {
      throw new ValidationError(error);
    }
    console.log("reached"); 
    const resp = await this.authService.verifyClient(req.body);
    resp
      ? response.setSuccess(res, 200, "successfully verified")
      : response.setSuccess(
          res,
          200,
          JSON.stringify([
            "name is invalid",
            "email is invalid",
            "password is invalid",
          ])
        );
  });
})(new UserService(), new AuthService());
