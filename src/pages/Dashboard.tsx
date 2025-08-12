import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { setPageSEO } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileMeta {
  full_name?: string;
  vendor_type?: string;
  phone?: string;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<ProfileMeta>({});
  const navigate = useNavigate();

  useEffect(() => {
    setPageSEO({
      title: "Vendor Dashboard | VibeFlow",
      description: "Track orders and performance across your venue.",
      canonical: "/dashboard",
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      const meta = (data.user?.user_metadata || {}) as ProfileMeta;
      setProfile(meta);
    })();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen">
      <header className="container py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome{profile.full_name ? `, ${profile.full_name}` : ""}</h1>
          <p className="text-muted-foreground">{profile.vendor_type || "Vendor"}</p>
        </div>
        <Button onClick={signOut} variant="outline">Sign out</Button>
      </header>

      <section className="container grid gap-6 md:grid-cols-3 pb-10">
        <Card>
          <CardHeader>
            <CardTitle>Orders Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">No orders yet</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$0</div>
            <p className="text-sm text-muted-foreground">Connect orders to see revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Fulfillment Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">—</div>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
