import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Doces da Lelis | Confeitaria Artesanal",
  description:
    "Doces artesanais feitos com carinho e ingredientes selecionados. Brigadeiros, bolos, brownies e muito mais para tornar seus momentos especiais.",
  keywords: [
    "doces artesanais",
    "confeitaria",
    "brigadeiros",
    "bolos",
    "encomendas",
    "Doces da Lelis",
  ],
  openGraph: {
    title: "Doces da Lelis | Confeitaria Artesanal",
    description:
      "Doces feitos com carinho para momentos especiais. Peça pelo WhatsApp!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
