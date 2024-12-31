import './globals.css';
export const metadata = {
  title: 'Aegis',
  description: 'Aegis Invictus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </html>
  )
}
