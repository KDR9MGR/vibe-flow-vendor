// Safe stub client used until Supabase is connected via Lovable's integration.
// Once connected, Lovable will add src/integrations/supabase/client.ts automatically.
// This stub prevents build failures and surfaces clear runtime messages on auth actions.

export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async (_args: any) => {
      throw new Error(
        "Supabase not connected. Click the green Supabase button in Lovable to connect your project, then try again."
      );
    },
    signUp: async (_args: any) => {
      throw new Error(
        "Supabase not connected. Click the green Supabase button in Lovable to connect your project, then try again."
      );
    },
    signOut: async () => {
      throw new Error(
        "Supabase not connected. Click the green Supabase button in Lovable to connect your project, then try again."
      );
    },
    onAuthStateChange: (cb: any) => {
      try {
        cb("INITIAL", null);
      } catch {}
      return { data: { subscription: { unsubscribe() {} } } } as const;
    },
  },
};
