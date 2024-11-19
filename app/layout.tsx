// app/layout.tsx (or _app.tsx)
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";

// IBM Plex font configuration
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

// Define metadata for the app
export const metadata = {
  title: "ImageWorld",
  description: "AI-powered image generator",
  icons: {
    icon: "/logo.svg", // Path to your favicon
  },
  openGraph: {
    title: "ImageWorld",
    description: "AI-powered image generator",
    url: "https://yourwebsite.com",
    siteName: "ImageWorld",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "ImageWorld",
    description: "AI-powered image generator",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
