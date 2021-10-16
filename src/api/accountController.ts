import { AxiosResponse } from "axios";
import axiosAPI from "@/api/AxiosPlugin";
import UserModel from "@/models/UserModel";
import ResetPasswordModel from '@/models/ResetPasswordModel';

export default class AccountController {
  public static async userLogin(userDetail: UserModel): Promise<any> {
    const res: AxiosResponse = await axiosAPI.post<any>(
      "Account/Login",
      userDetail,
    );
    return res;
  }

  public static async fogotPassword(userDetail: UserModel): Promise<any> {
    const res: AxiosResponse<any> = await axiosAPI.post<any>(
      "Account/FogotPassword",
      userDetail,
    );
    return res.data;
  }

  public static async resetPassword(resetPasswordDetails: ResetPasswordModel): Promise<any> {
    const res: AxiosResponse<any> = await axiosAPI.post<any>(
      "Account/ResetPassword",
      resetPasswordDetails,
    );
    return res.data;
  }
}
