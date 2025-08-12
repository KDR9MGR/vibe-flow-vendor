import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/login", { replace: true });
      }
      if (mounted) setLoading(false);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login", { replace: true });
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading…</div>
      </div>
    );
  }
  return children;
}
