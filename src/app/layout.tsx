import "./globals.css";
import BackgroundLayout from "@/components/BackgroundLayout";
import GetInTouchFooter from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import {HackathonBanner} from "@/components/Banner";

export const metadata = {
  title: "Aegis",
  description: "Aegis Invictus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className="overflow-x-hidden">
        <BackgroundLayout>
          <Navbar />
          {children}
          <HackathonBanner />
          <GetInTouchFooter />
        </BackgroundLayout>
      </body>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </html>
  );
}
