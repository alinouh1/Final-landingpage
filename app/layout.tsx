import type { Metadata } from "next";
import { Cairo, IBM_Plex_Mono } from "next/font/google";
import "./styles.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Launch Playbook · Growth Station",
  description: "The Complete Launch Playbook, From Strategy to the Last Ready-to-Publish Post",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cairo.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
