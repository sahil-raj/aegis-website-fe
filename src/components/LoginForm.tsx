"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgotPassword } from "./ForgotPassword";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [loginMethod, setLoginMethod] = useState<
    "default" | "github" | "google"
  >("default");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] =
    useState<boolean>(false);

  const handleLoginWithProvider = (provider: "github" | "google") => {
    setLoginMethod(provider);
    // Trigger provider login logic
    try {
      let authUrl = "";
      if (provider === "github") {
        authUrl =
          "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID";
      } else if (provider === "google") {
        authUrl =
          "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile";
      }

      if (authUrl) {
        window.location.href = authUrl;
      }
    } catch (error) {
      console.error("Error initiating login with provider:", error);
    }
  };

  const openForgotPassword = () => {
    setIsForgotPasswordOpen(true); // Open the Forgot Password modal
  };

  const closeForgotPassword = () => {
    setIsForgotPasswordOpen(false); // Close the Forgot Password modal
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-black text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-black text-white"
                  onClick={() => handleLoginWithProvider("github")}
                >
                  Login with GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-black text-white"
                  onClick={() => handleLoginWithProvider("google")}
                >
                  Login with Google
                </Button>
              </div>
              {loginMethod === "default" && (
                <>
                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground bg-black">
                      Or continue with
                    </span>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email / Username</Label>
                      <Input id="email" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                          onClick={openForgotPassword} // Open the Forgot Password sheet
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </>
              )}
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/sign-up" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* ForgotPassword sheet component */}
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={closeForgotPassword}
      />
    </div>
  );
}
