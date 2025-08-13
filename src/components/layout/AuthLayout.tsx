import { ReactNode } from "react";
import hero from "@/assets/auth-hero.jpg";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Gradient blobs for left section */}
      <div className="absolute inset-0 md:w-1/2 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tr from-orange-600/15 to-red-500/15 rounded-full blur-xl animate-float"></div>
      </div>
      
      <section className="flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md">
          <header className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <img 
                 src="/app_logo.svg" 
                 alt="Bottles Up Logo" 
                 className="w-16 h-16 animate-float"
               />
            </div>
            <h1 className="text-3xl font-bold text-gradient mb-2">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </header>
          <article className="glass-effect p-6 rounded-lg border border-orange-500/20">{children}</article>
        </div>
      </section>
      <aside className="hidden md:block relative">
        <img
          src={hero}
          alt="Neon gradient club ambiance background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          {/* Additional gradient blobs for right section */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-400/30 to-amber-400/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-l from-orange-500/25 to-red-500/25 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          
          <img
             src="/app_logo.svg"
             alt="Bottles Up Logo"
             className="w-32 h-auto opacity-80 animate-float relative z-10"
           />
        </div>
      </aside>
    </main>
  );
}
