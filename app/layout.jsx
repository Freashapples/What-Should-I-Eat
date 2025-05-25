import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: '300',
  subsets: ["latin"],
});

export const metadata = {
  title: "What Should I Eat?",
  description: "What Should I Eat? By FreashApples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
