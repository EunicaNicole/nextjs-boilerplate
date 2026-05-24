export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/50 bg-white/20 py-8 px-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/20 mt-auto transition-colors duration-300">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        
        {/* BRAND / COPYRIGHT */}
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
            Eunica Nicole G. Lasam
          </span>{" "}
          • Crafted beautifully using Next.js
        </p>

        {/* ANIMATED FOOTER LINKS MAP */}
        <div className="flex gap-6 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
          <a 
            href="#about" 
            className="relative p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="relative p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Skills
          </a>
          <a 
            href="#education" 
            className="relative p-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Education
          </a>
        </div>

      </div>
    </footer>
  );
}
