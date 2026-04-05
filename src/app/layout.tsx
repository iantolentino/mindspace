import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MindSpace | Enterprise Mindmap Builder',
  description: 'Secure, client-side only mindmap generation tool.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-canvas text-primary">
        {children}
      </body>
    </html>
  );
}