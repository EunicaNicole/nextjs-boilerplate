import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow flex flex-col items-center justify-center p-12 bg-white text-slate-950">

        {/* Change the body to Hello World */}
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">
          Hello, World!
        </h1>

        {/* Add your own photo */}
        <div className="mb-6 relative w-48 h-48">
          <Image
            src="/profile.png"
            alt="My Profile Picture"
            width={192}
            height={192}
            className="mb-6 rounded-full object-cover border-4 border-slate-200 shadow-xl"
            priority
          />
        </div>

      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}