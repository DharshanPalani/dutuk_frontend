import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";

const googleLogin = async () => {
  try {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        skipBrowserRedirect: true,
      },
    });

    if (data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        undefined,
        {
          preferEphemeralSession: true,
        }
      );

      router.replace("/(tabs)/home");
    } else {
      router.replace("/(tabs)/home");
    }
  } catch {
    router.replace("/(tabs)/home");
  }
};

export default googleLogin;
