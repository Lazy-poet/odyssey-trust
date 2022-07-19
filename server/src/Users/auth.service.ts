import { VerificationData } from "../types";
// import { ClientVerificationError } from "../utils/error";
export class AuthService {
  async verifyClient(_: VerificationData) {
    // make api calls  to transtar api to verify data
    return false;
    // throw new ClientVerificationError(
    //   JSON.stringify([
    //     "name is invalid",
    //     "email is invalid",
    //     "password is invalid",
    //   ])
    // );
  }
}
