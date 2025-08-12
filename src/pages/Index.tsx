import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    setPageSEO({
      title: "Bottles Up Vendor Portal | Onboard & Track Stats",
      description:
        "Vendor onboarding for bars and restaurants. Login or create an account to manage orders and view stats.",
      canonical: "/",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-600/20 to-red-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <section className="container text-center py-12 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
               src="/app_logo.svg" 
               alt="Bottles Up Logo" 
               className="w-24 h-24 md:w-32 md:h-32 animate-float"
             />
          </div>
          
          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-gradient">Bottles Up</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-white mb-6">
            Vendor Portal
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the premium network for nightlife vendors. Manage bottle service orders and
            see performance insights in real time with our cutting-edge platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild variant="hero" size="lg" className="bg-gradient-orange hover:glow-orange-strong transition-all duration-300 hover-lift">
              <Link to="/register">Create Vendor Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-effect hover-lift border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
              <Link to="/login">Vendor Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
