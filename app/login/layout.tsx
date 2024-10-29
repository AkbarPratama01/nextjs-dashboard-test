// app/layout.tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: 'Login Page',
  description: 'A simple login page using Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
