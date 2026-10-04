import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PlanProvider } from "@/context/PlanContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog — Train with intent",
  description:
    "A focused workout library and training log. Pick a lift, build today's plan, and track your work.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${oswald.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <PlanProvider>
          <Header />
          {children}
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}
