"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isThai = pathname.startsWith("/th");

  function switchLang() {
    if (isThai) {
      // Remove /th prefix
      const newPath = pathname.replace(/^\/th/, "") || "/";
      router.push(newPath);
    } else {
      router.push(`/th${pathname}`);
    }
  }

  return (
    <button
      onClick={switchLang}
      className="text-xs text-text-muted hover:text-accent transition-colors px-2 py-1 rounded-lg border border-border/30 hover:border-accent/30"
      title={isThai ? "Switch to English" : "à¹à¸à¸¥à¸µà¹à¸¢à¸à¹à¸à¹à¸à¸ à¸²à¸©à¸²à¹à¸à¸¢"}
    >
      {isThai ? "EN ð¬ð§" : "TH ð¹ð­"}
    </button>
  );
}
