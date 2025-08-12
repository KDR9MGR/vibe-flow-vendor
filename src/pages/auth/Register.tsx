import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AuthLayout from "@/components/layout/AuthLayout";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { setPageSEO } from "@/lib/seo";
import { toast } from "sonner";

const vendorTypes = ["Organizers", "Promoters", "Bottle Girls"] as const;

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  vendorType: z.enum(vendorTypes),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setPageSEO({
      title: "Create Vendor Account | VibeFlow",
      description: "Register as a vendor to manage bottle service orders and view stats.",
      canonical: "/register",
    });
  }, []);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res: any = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            phone: values.phone,
            vendor_type: values.vendorType,
          },
        },
      });

      if (res?.data?.session) {
        toast.success("Account created. Welcome!");
        navigate("/dashboard", { replace: true });
      } else {
        toast("Check your email to confirm your account.");
        navigate("/login");
      }
    } catch (e: any) {
      toast.error(e?.message ?? "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create your vendor account" subtitle="Join VibeFlow to start receiving and tracking orders.">
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="Alex Morgan" {...form.register("fullName")} />
          <p className="text-sm text-destructive">{form.formState.errors.fullName?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@brand.com" {...form.register("email")} />
          <p className="text-sm text-destructive">{form.formState.errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" placeholder="+1 555 000 1234" {...form.register("phone")} />
          <p className="text-sm text-destructive">{form.formState.errors.phone?.message}</p>
        </div>
        <div className="space-y-2">
          <Label>Vendor type</Label>
          <Select onValueChange={(v) => form.setValue("vendorType", v as FormValues["vendorType"], { shouldValidate: true }) }>
            <SelectTrigger>
              <SelectValue placeholder="Select a vendor type" />
            </SelectTrigger>
            <SelectContent>
              {vendorTypes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">{form.formState.errors.vendorType?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" {...form.register("password")} />
          <p className="text-sm text-destructive">{form.formState.errors.password?.message}</p>
        </div>
        <Button type="submit" className="w-full" variant="hero" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          Already have an account? <Link to="/login" className="underline">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
