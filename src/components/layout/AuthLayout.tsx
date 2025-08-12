import { ReactNode } from "react";
import hero from "@/assets/auth-hero.jpg";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </header>
          <article>{children}</article>
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
          <img
            src="/app_logo.svg"
            alt="Bottles Up Logo"
            className="w-32 h-auto opacity-80"
          />
        </div>
      </aside>
    </main>
  );
}
