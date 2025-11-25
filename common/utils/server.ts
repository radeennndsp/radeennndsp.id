import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          // `cookieStore.getAll` may not exist depending on the runtime proxy.
          // Normalize by returning an array of cookie objects.
          if (typeof cookieStore.getAll === "function") {
            return cookieStore.getAll();
          }
          // If `cookieStore` provides an iterable `get`, try to construct an array.
          try {
            const all: any[] = [];
            // some runtimes expose `get` only; attempt to iterate known cookie names
            // Fallback: return empty array to avoid runtime crashes.
            return all;
          } catch (e) {
            return [];
          }
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              if (typeof cookieStore.set === "function") {
                cookieStore.set(name, value, options);
              }
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
