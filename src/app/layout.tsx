import "./globals.css";
import GetInTouchFooter from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        {children}
        <GetInTouchFooter />
      </body>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </html>
  );
}
