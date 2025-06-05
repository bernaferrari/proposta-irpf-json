import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Informe de Rendimentos Automatizado",
  description: "Proposta de Modernização do Informe de Rendimentos",
  openGraph: {
    title: "Informe de Rendimentos Automatizado",
    description: "Proposta de Modernização do Informe de Rendimentos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Informe de Rendimentos Automatizado",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informe de Rendimentos Automatizado",
    description: "Proposta de Modernização do Informe de Rendimentos",
    images: ["/og-image.png"],
  },
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
