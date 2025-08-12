import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { setPageSEO } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VendorProfile {
  id: string;
  email: string;
  name: string;
  business_name?: string;
  phone_number?: string;
  role: string;
  is_verified: boolean;
  created_at: string;
}

export default function Dashboard() {
  const [vendor, setVendor] = useState<VendorProfile | null>(null);
  const [loading, setLoading] = useState(true);
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
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: vendorData, error } = await supabase
            .from('vendors')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error) {
            console.error('Error fetching vendor data:', error);
            // Fallback to user metadata if vendor record doesn't exist
            const meta = user.user_metadata || {};
            setVendor({
              id: user.id,
              email: user.email || '',
              name: meta.full_name || '',
              phone_number: meta.phone || '',
              role: meta.vendor_type || 'staff',
              is_verified: false,
              created_at: user.created_at || ''
            });
          } else {
            setVendor(vendorData);
          }
        }
      } catch (error) {
        console.error('Error in dashboard data fetch:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <header className="container py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome{vendor?.name ? `, ${vendor.name}` : ""}</h1>
          <p className="text-muted-foreground">
            {vendor?.role ? vendor.role.charAt(0).toUpperCase() + vendor.role.slice(1).replace('_', ' ') : "Vendor"}
            {vendor?.is_verified && <span className="ml-2 text-green-600">✓ Verified</span>}
          </p>
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
