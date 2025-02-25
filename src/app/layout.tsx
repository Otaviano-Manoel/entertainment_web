import type { Metadata } from "next";
import "@/styles/globals.scss";
import Providers from "@/components/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
