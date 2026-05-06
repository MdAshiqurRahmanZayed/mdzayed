import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Md. Ashiqur Rahman Zayed - Portfolio",
  description: "Portfolio of Md. Ashiqur Rahman Zayed, Software Engineer (Backend) at Strativ AB",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider>
          {children}
          <footer className="max-w-[1200px] mx-auto w-full px-4 py-6 text-center text-[var(--foreground)]/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Md. Ashiqur Rahman Zayed | All Rights Reserved</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}