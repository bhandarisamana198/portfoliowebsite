import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samana | Digital Marketing Portfolio",
  description:
    "The portfolio and learning journal of Samana, a digital marketing student looking for an internship.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
