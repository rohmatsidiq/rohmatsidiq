import localFont from "next/font/local";
import "./globals.css";
import { ConfigProvider } from "antd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rohmat Sidiq M",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#eab308",
              borderRadius: 24,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
