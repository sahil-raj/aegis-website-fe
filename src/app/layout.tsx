import "./globals.css";
export const metadata = {
  title: "Aegis",
  description: "Aegis Invictus",
};
import GetInTouchFooter from "@/components/GetInTouch";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
        <GetInTouchFooter />
      </body>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </html>
  );
}
