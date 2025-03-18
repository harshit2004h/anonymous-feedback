import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiRespsonse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev    ",
      to: email,
      subject: "Anonymous Feedback | Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: "Verification Email Sent Successfully",
    };
  } catch (emailError) {
    console.error("Error Sending Verification Email: ", emailError);
    return {
      success: false,
      message: "Error Sending Verification Email",
    };
  }
}
