import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import ToastContainer from "@/components/layout/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Md. Ashiqur Rahman Zayed - Portfolio",
  description: "Portfolio of Md. Ashiqur Rahman Zayed, Software Engineer specializing in backend development and LLM-based solutions.",
  openGraph: {
    title: "Md. Ashiqur Rahman Zayed - Portfolio",
    description: "Software Engineer specializing in backend development and LLM-based solutions.",
    type: "website",
    images: ["/md-zayed-profile.png"],
  },
  twitter: {
    card: "summary",
    title: "Md. Ashiqur Rahman Zayed - Portfolio",
    description: "Software Engineer specializing in backend development and LLM-based solutions.",
    images: ["/md-zayed-profile.png"],
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
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
          <ToastContainer />
          <footer className="max-w-[1200px] mx-auto w-full px-4 py-6 text-center text-foreground/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Md. Ashiqur Rahman Zayed | All Rights Reserved</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}