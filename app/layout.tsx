import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import ToastContainer from "@/components/layout/Toast";
import { portfolioData } from "@/data/portfolio";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Software Engineer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Md. Ashiqur Rahman Zayed",
    "Ashiqur Rahman Zayed",
    "Software Engineer",
    "Backend Developer",
    "Django",
    "Odoo",
    "Python",
    "Dhaka, Bangladesh",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  alternates: { canonical: "./" },
  openGraph: {
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    images: [{ url: "/md-zayed-profile.png", alt: siteName }],
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
    images: ["/md-zayed-profile.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  jobTitle: portfolioData.profile.role,
  url: siteUrl,
  image: `${siteUrl}${portfolioData.profile.avatar}`,
  sameAs: portfolioData.profile.socials.map((social) => social.href),
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  knowsAbout: ["Backend development", "Django", "Odoo", "Python", "REST APIs"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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