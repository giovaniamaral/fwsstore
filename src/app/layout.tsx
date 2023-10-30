import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import FooterComponent from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <FooterComponent />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
