import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    setPageSEO({
      title: "VibeFlow Vendor Portal | Onboard & Track Stats",
      description:
        "Vendor onboarding for bars and restaurants. Login or create an account to manage orders and view stats.",
      canonical: "/",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="container text-center py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            VibeFlow Vendor Portal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join the network for nightlife vendors. Manage bottle service orders and
            see performance insights in real time.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/register">Create Vendor Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/login">Vendor Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
