// Lightweight wrapper to allow building without the generated Supabase client.
// If Supabase is connected, we dynamically import the real client.
// If not, calls will reject with a helpful error message.

let cached: any | null = null;

async function loadClient() {
  if (cached) return cached;
  try {
    const mod: any = await import("@/integrations/supabase/client");
    cached = mod.supabase ?? mod.default ?? mod;
    return cached;
  } catch (e) {
    throw new Error(
      "Supabase not connected. Click the green Supabase button in Lovable to connect your project, then try again."
    );
  }
}

export const supabase = {
  auth: {
    getSession: async () => (await loadClient()).auth.getSession(),
    getUser: async () => (await loadClient()).auth.getUser(),
    signInWithPassword: async (args: any) =>
      (await loadClient()).auth.signInWithPassword(args),
    signUp: async (args: any) => (await loadClient()).auth.signUp(args),
    signOut: async () => (await loadClient()).auth.signOut(),
    onAuthStateChange: (cb: any) => {
      let sub: any = { subscription: { unsubscribe() {} } };
      loadClient()
        .then((c) => {
          sub = c.auth.onAuthStateChange(cb);
        })
        .catch(() => {});
      return sub;
    },
  },
};
