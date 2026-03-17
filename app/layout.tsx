import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARTintelligence - KI-Automatisierung für KMU",
  description: "Wir helfen kleinen und mittelgrossen Unternehmen, mit smarter KI Arbeitszeit zurückzugewinnen, Antwortzeiten stark zu verkürzen und keine Anfragen mehr liegen zu lassen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
