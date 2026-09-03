import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
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
        {/* LEFT SIDE */}
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

          {/* BUTTONS */}
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
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-neutral-400"
              style={{ color: "#ffffff" }}
            >
              What I&apos;m building
            </a>
          </div>

          {/* CURRENT PROJECT */}
          <div className="mt-16 flex items-center gap-3 text-sm text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span>Currently building MPA Learning Portal</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* PROFILE IMAGE */}
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

            {/* IMAGE INFORMATION */}
            <div className="absolute bottom-0 left-0 z-20 w-full p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Mechatronics · Software
              </p>

              <p className="mt-2 text-xl font-medium text-white">
                Intan Maisara
              </p>
            </div>
          </div>

          {/* PROFILE DETAILS */}
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
    </main>
  );
}
