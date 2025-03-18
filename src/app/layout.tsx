import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Voice - Providing Anonymous Feedback",
  description: "True Voice is an anonymous feedback platform that empowers users to share honest opinions safely, fostering transparency and meaningful conversations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
