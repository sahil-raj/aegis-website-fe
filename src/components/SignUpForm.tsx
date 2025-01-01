import { cn } from "@/lib/utils";
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

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center px-4 sm:px-0",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md bg-black text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email and create a username below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.912.832.092-.647.35-1.088.637-1.339-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.751 1.025A9.564 9.564 0 0 1 12 6.839c.85.004 1.705.115 2.504.338 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.202 2.393.1 2.646.64.7 1.028 1.592 1.028 2.683 0 3.841-2.337 4.685-4.565 4.932.359.31.678.921.678 1.856 0 1.34-.012 2.419-.012 2.748 0 .268.18.579.688.481C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Sign Up with GitHub
              </Button>
              <Button variant="outline" className="w-full bg-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Sign Up with Google
              </Button>
            </div>
            <div className="relative my-3 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground bg-black">
                Or continue with
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Create Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button
                type="submit"
                className="w-full hover:bg-white hover:text-black"
              >
                Create
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
