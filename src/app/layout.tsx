import type { Metadata } from "next";
import "@/styles/globals.scss";
import { ClientProvider } from "@/context/useClient";

export const metadata: Metadata = {
  title: "Entertainment web",
  description:
    "This is a solution to the [Entertainment Web App Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
