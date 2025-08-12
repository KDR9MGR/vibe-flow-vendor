import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layout/AuthLayout";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { setPageSEO } from "@/lib/seo";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setPageSEO({
      title: "Vendor Login | VibeFlow",
      description: "Login to manage bottle service orders and view vendor stats.",
      canonical: "/login",
    });
  }, []);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome back!");
    navigate("/dashboard", { replace: true });
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Access your vendor dashboard.">
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@brand.com" {...form.register("email")} />
          <p className="text-sm text-destructive">{form.formState.errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" {...form.register("password")} />
          <p className="text-sm text-destructive">{form.formState.errors.password?.message}</p>
        </div>
        <Button type="submit" className="w-full" variant="hero" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          New to VibeFlow? <Link to="/register" className="underline">Create an account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
