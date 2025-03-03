"use client";

import { SessionProvider } from "next-auth/react";
import { ClientProvider } from "@/context/useClient";
import { VideoDataProvider } from "@/context/useDataVideo";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <VideoDataProvider>
        <ClientProvider>{children}</ClientProvider>
      </VideoDataProvider>
    </SessionProvider>
  );
}
