import "./globals.css";
import Navbar from "@/components/NavBar";
import { orbitron } from "./fonts";


// Important to Add  META TAgs such as Title or description for SEO \\

export const metadata = {
  title: {
    default: "GamERK",
    template: "%s | GamERK"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className='bg-teal-700 flex flex-col px-4 py-2 min-h-screen'>
        <header>
          <Navbar />
        </header>
        <main className='grow py-3'>
          {children}
        </main>
        <footer className='border-t py-3 text-center text-slate-100 text-xs'>
          Game data and images courtesy of {"  "} <a href="https://rawg.io/" target='_blank'
          className="text-slate-950 hover:underline">{"  "}  RAWG</a>
        </footer>
      </body>
    </html>
  );
}
