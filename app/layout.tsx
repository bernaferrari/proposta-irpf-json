import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingHeader } from "@/components/floating-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modernização do Informe de Rendimentos",
  description:
    "Uma proposta para acabar com a digitação manual do IRPF, economizando tempo e eliminando erros.",
  openGraph: {
    title: "Modernização do Informe de Rendimentos",
    description:
      "Uma proposta para acabar com a digitação manual do IRPF, economizando tempo e eliminando erros.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modernização do Informe de Rendimentos",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modernização do Informe de Rendimentos",
    description:
      "Uma proposta para acabar com a digitação manual do IRPF, economizando tempo e eliminando erros.",
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
      <body className={inter.className}>
        <ThemeProvider>
          <FloatingHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
