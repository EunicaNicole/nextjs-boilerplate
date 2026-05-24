import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] transition-colors duration-300 flex flex-col">
      
      {/* BACKGROUND DECORATIVE GLOW ACCENTS */}
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-600/10" />
      <div className="absolute top-[800px] right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-[150px] dark:bg-purple-600/10" />

      {/* STICKY GLASS HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/70 px-6 py-4 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-[#050505]/70 transition-all">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Eunica Nicole
          </h1>

          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Socials</a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 pt-24 pb-16 text-center">
          {/* Glowing Profile Ring */}
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 p-[3px] shadow-2xl shadow-blue-500/20">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white bg-zinc-100 dark:border-zinc-900">
              <Image
                src="/profile.png" 
                alt="Eunica Nicole Profile"
                fill
                className="object-cover scale-105 transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-zinc-900 dark:text-white">
              Full-Stack Developer
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Hi, I’m <span className="font-bold text-blue-600 dark:text-blue-400">Eunica Nicole G. Lasam</span>. 
              I build beautiful, highly operational web applications with a dedicated focus on 
              <span className="underline decoration-indigo-500 decoration-2 underline-offset-4 font-medium"> UI/UX Design</span> and 
              <span className="underline decoration-purple-500 decoration-2 underline-offset-4 font-medium"> Human-Computer Interaction (HCI) Principles</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>

            <a
              href="https://github.com" 
              target="_blank"
              className="rounded-xl border border-zinc-300/80 bg-white/40 px-6 py-3 font-medium backdrop-blur-md hover:bg-zinc-100 dark:border-zinc-700/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              View GitHub
            </a>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="mx-auto w-full max-w-3xl px-6 py-16 scroll-mt-20">
          <div className="rounded-2xl border border-zinc-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/30">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">About Me</h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base text-justify">
              I am an IT student at <span className="font-semibold text-zinc-900 dark:text-white">Saint Paul University Philippines</span> with a deep interest in Full-Stack Development. 
              My passion centers around bridgeing complex data frameworks with intuitive, aesthetic front-end layouts. I consistently apply established 
              HCI usability principles to ensure software is responsive, fully accessible, and pixel-perfect.
            </p>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="mx-auto w-full max-w-3xl px-6 py-12 scroll-mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">Technical Toolbox</h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "PHP", "MySQL", "Tailwind CSS",
              "HCI Frameworks", "UI/UX Architecture", "Git Automation", "Responsive Layouts"
            ].map((skill) => (
              <div
                key={skill}
                className="group relative rounded-xl border border-zinc-200/80 bg-white/50 p-4 text-center backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="mx-auto w-full max-w-3xl px-6 py-16 scroll-mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">Education & Journey</h3>

          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 space-y-10 ml-2">
            
            {/* College */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-zinc-50 dark:bg-black" />
              <p className="text-lg font-bold text-zinc-900 dark:text-white">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Saint Paul University Philippines
              </p>
              <p className="text-xs text-zinc-400 mt-1">2022 – Present</p>
            </div>

            {/* Bootcamp */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-purple-500 bg-zinc-50 dark:bg-black" />
              <p className="text-lg font-bold text-zinc-900 dark:text-white">
                Advanced Full-Stack Development Training
              </p>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                AI Agent Developer Masterclass
              </p>
              <p className="text-xs text-zinc-400 mt-1">Cohort 2026</p>
            </div>

          </div>
        </section>

        {/* SOCIAL LINKS SECTION */}
        <section id="contact" className="mx-auto w-full max-w-3xl px-6 py-16 text-center border-t border-zinc-200/50 dark:border-zinc-800/50 scroll-mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">Connect With Me</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Let's talk about web apps, design optimization, or front-end structures.</p>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* PREMIUM SEPARATE FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}
