import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_NAME_DESCRIPTION, SERVICE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_NAME_DESCRIPTION}`,
  metadataBase: new URL(SERVICE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${roboto.className}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
