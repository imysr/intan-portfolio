import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "Full-Stack Platform",
    title: "MPA Learning Portal",
    status: "Active",
    progress: 78,
    description:
      "I built this as a proper learning platform rather than just a course website. Students can learn at their own pace, while the system handles courses, enrolments, assessments, certificates and payments behind the scenes.",
    stack: ["Next.js", "TypeScript", "Supabase", "ToyyibPay"],
  },
  {
    number: "02",
    category: "Creative Web Product",
    title: "Just For You.",
    status: "Building",
    progress: 52,
    description:
      "This started from my love for giving personal letters. I wanted to turn that feeling into something digital, where people can create private letters with their own themes, photos, memories and little details that make the message feel personal.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
  },
  {
    number: "03",
    category: "Mobile Product",
    title: "RideBuddy",
    status: "Prototype",
    progress: 36,
    description:
      "I designed RideBuddy around a simple thought: riders spend a lot of time on the road earning a living or just getting from place to place, and someone may be waiting for them to come home safely. The idea focuses on safety, ride tracking, maintenance and everyday support for riders.",
    stack: ["Flutter", "FlutterFlow", "Supabase", "Mobile UX"],
  },
  {
    number: "04",
    category: "Game Development",
    title: "The Sixth Recording",
    status: "In Development",
    progress: 41,
    description:
      "A psychological mystery game I am building in Godot. Instead of relying only on jumpscares, I want the tension to come from investigation, strange recordings, difficult choices and the feeling that something in the story is not quite right.",
    stack: ["Godot", "GDScript", "3D", "Game Systems"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* NAVIGATION */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="text-xl font-semibold tracking-tight">
          INTAN.
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#now" className="transition hover:text-white">
            /Now
          </a>

          <a href="#freelance" className="transition hover:text-white">
            Freelance
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-10 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.24em] text-neutral-500">
            Mechatronics · IoT · Software · Product Development
          </p>

          <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            I like building things
            <br />
            that connect software
            <br />
            with the real world.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
            I&apos;m Intan Maisara. I&apos;m a mechatronics graduate who likes
            turning ideas into things people can actually use, from web
            platforms and mobile products to interactive experiences and
            engineering projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold transition hover:bg-neutral-200"
              style={{ color: "#000000" }}
            >
              Explore my work ↘
            </a>

            <a
              href="#now"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-400"
            >
              What I&apos;m building
            </a>
          </div>

          <div className="mt-16 flex items-center gap-3 text-sm text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Currently building MPA Learning Portal</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <Image
              src="/images/intan-profile.jpeg"
              alt="Portrait of Intan Maisara"
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 z-20 w-full p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Mechatronics · Software
              </p>

              <p className="mt-2 text-xl font-medium text-white">
                Intan Maisara
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-500">
            <div className="rounded-2xl border border-neutral-800 px-4 py-3">
              <span>Focus</span>

              <div className="mt-1 text-sm text-neutral-200">
                Product &amp; Engineering
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 px-4 py-3">
              <span>Status</span>

              <div className="mt-1 text-sm text-neutral-200">
                Building in public
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10"
      >
        {/* PROJECT INTRO */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Things I&apos;ve been building.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500">
            These are some of the ideas I&apos;ve turned into real projects.
            Some started because I needed them, some because I was curious, and
            some simply because I wanted to see if I could build them.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-[2rem] border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600"
            >
              {/* TOP */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-500">
                    {project.number} · {project.category}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
                  {project.status}
                </span>
              </div>

              {/* DESCRIPTION + METER */}
              <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <p className="leading-7 text-neutral-400">
                  {project.description}
                </p>

                {/* CIRCULAR METER */}
                <div
                  className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(
                      rgb(52 211 153) ${project.progress * 3.6}deg,
                      rgb(38 38 38) ${project.progress * 3.6}deg
                    )`,
                  }}
                >
                  <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full bg-neutral-950">
                    <span className="text-2xl font-semibold">
                      {project.progress}%
                    </span>

                    <span className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                      Complete
                    </span>
                  </div>
                </div>
              </div>

              {/* TECH STACK */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Project progress</span>

                  <span className="text-neutral-300">{project.progress}%</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-900">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-700"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-8 flex items-center justify-between border-t border-neutral-900 pt-5 text-sm">
                <span className="text-neutral-600">Built by Intan · 2026</span>

                <a
                  href="#now"
                  className="text-neutral-300 transition group-hover:text-white"
                >
                  View progress ↗
                </a>
              </div>
            </article>
          ))}

          {/* IOT / MECHATRONICS */}
          <article className="rounded-[2rem] border border-dashed border-neutral-800 bg-neutral-950/40 p-6 lg:col-span-2">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.45fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-600">
                  05 · Coming Soon
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                  IoT / Mechatronics Lab
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-neutral-500">
                  This will be the more hands-on side of my portfolio. I want
                  this space to hold the things I build with sensors,
                  microcontrollers, automation and whatever engineering idea
                  makes me curious enough to start experimenting.
                </p>
              </div>

              {/* 0% METER */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-800 px-6 py-8">
                <span className="text-4xl font-semibold text-neutral-300">
                  0%
                </span>

                <span className="mt-2 text-xs text-neutral-600">
                  Not started yet
                </span>
              </div>

              {/* COMING SOON */}
              <div>
                <p className="mb-4 text-sm font-medium text-neutral-300">
                  What&apos;s coming
                </p>

                <div className="space-y-3 text-sm text-neutral-500">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Smart monitoring systems
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    IoT &amp; automation experiments
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ESP32 &amp; Arduino projects
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    More hands-on engineering builds
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
