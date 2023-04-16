import './globals.css'

export const metadata = {
  title: 'ThreeJS NextJS',
  description: 'Build example web application using ThreeJS and NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
