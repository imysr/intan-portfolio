"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Full-Stack Platform",
    title: "MPA Learning Portal",
    status: "Active",
    progress: 78,
    description:
      "I built this as a proper learning platform rather than just a course website. Students can browse and join courses, while the admin side handles users, roles, enrolments, certificates and payments behind the scenes.",
    stack: ["Next.js", "TypeScript", "Supabase", "ToyyibPay"],
    imageStyle: "desktop",
    images: [
      {
        src: "/images/projects/mpa/mpa-homepage.png",
        label: "Homepage",
      },
      {
        src: "/images/projects/mpa/mpa-courses.png",
        label: "Explore Courses",
      },
      {
        src: "/images/projects/mpa/mpa-admin.png",
        label: "Admin Dashboard",
      },
    ],
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
    imageStyle: "desktop",
    images: [
      {
        src: "/images/projects/just-for-you/just-for-you-home.png",
        label: "Homepage",
      },
      {
        src: "/images/projects/just-for-you/just-for-you-envelope.png",
        label: "Letter Arrival",
      },
      {
        src: "/images/projects/just-for-you/just-for-you-flowers.png",
        label: "Digital Bouquet",
      },
    ],
  },
  {
    number: "03",
    category: "Mobile Product",
    title: "RideBuddy",
    status: "Prototype",
    progress: 36,
    description:
      "RideBuddy started from a simple thought: riders spend hours on the road, sometimes earning their living while dealing with traffic, navigation and deliveries at the same time. I wanted to explore a companion that looks after both the rider and the motorcycle, because getting home safely matters more than any trip.",
    stack: ["Flutter", "FlutterFlow", "Supabase", "Mobile UX"],
    imageStyle: "mobile",
    images: [
      {
        src: "/images/projects/ridebuddy/ridebuddy-personalize.png",
        label: "Personalize Your Ride",
      },
      {
        src: "/images/projects/ridebuddy/ridebuddy-garage.png",
        label: "Garage & Maintenance",
      },
      {
        src: "/images/projects/ridebuddy/ridebuddy-companion.png",
        label: "Muslim Companion Mode",
      },
    ],
  },
  {
    number: "04",
    category: "Game Development",
    title: "The Sixth Recording",
    status: "In Development",
    progress: 41,
    description:
      "The Sixth Recording is my first psychological mystery game, and it is still very much a work in progress. I am building it in Godot while learning more about 3D game development along the way. The story revolves around recordings, investigation and choices that slowly change what the player thinks is happening.",
    stack: ["Godot", "GDScript", "3D", "Game Systems"],
    imageStyle: "game",
    images: [
      {
        src: "/images/projects/sixth-recording/sixth-recording-choice.png",
        label: "Player Choice",
      },
      {
        src: "/images/projects/sixth-recording/sixth-recording-dispatch.png",
        label: "Dispatch Log",
      },
      {
        src: "/images/projects/sixth-recording/sixth-recording-interaction.png",
        label: "Recording Interaction",
      },
    ],
  },
];

type LightboxImage = {
  src: string;
  label: string;
};

type LightboxState = {
  projectTitle: string;
  images: LightboxImage[];
  index: number;
} | null;

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  function openLightbox(
    projectTitle: string,
    images: LightboxImage[],
    index: number,
  ) {
    setLightbox({
      projectTitle,
      images,
      index,
    });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function previousImage() {
    if (!lightbox) return;

    setLightbox({
      ...lightbox,
      index:
        lightbox.index === 0 ? lightbox.images.length - 1 : lightbox.index - 1,
    });
  }

  function nextImage() {
    if (!lightbox) return;

    setLightbox({
      ...lightbox,
      index:
        lightbox.index === lightbox.images.length - 1 ? 0 : lightbox.index + 1,
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!lightbox) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <>
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

          {/* PROFILE */}
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

        {/* ABOUT */}
        <section
          id="about"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                About
              </p>

              <div className="mt-6 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-700 lg:flex">
                <span className="h-px w-12 bg-neutral-800" />A little about how
                I think
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                I build things with
                <br />a reason behind them.
              </h2>

              <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-400 md:grid-cols-2 md:text-[17px]">
                <div className="space-y-6">
                  <p>
                    I graduated in{" "}
                    <span className="text-neutral-100">
                      Mechatronics Engineering
                    </span>
                    , where I learned how machines, electronics, automation and
                    programming come together to make something work.
                  </p>

                  <p>
                    But somewhere along the way, I realised I didn&apos;t want
                    to limit myself to only one side of technology.
                  </p>

                  <p>
                    I started exploring further into software development,
                    building web platforms, experimenting with mobile products,
                    working with databases, and finding new ways to connect that
                    software knowledge back to IoT and automation.
                  </p>

                  <p>
                    Some things were already familiar. Others started with me
                    having an idea and figuring things out while I was building
                    it.
                  </p>

                  <p className="text-neutral-200">
                    And I think that&apos;s how I learn best.
                  </p>
                </div>

                <div className="space-y-6">
                  <p>
                    Regardless of what I&apos;m building, there&apos;s usually
                    one question somewhere in my head:
                  </p>

                  <p className="border-l border-emerald-400 pl-5 text-xl font-medium leading-8 text-white">
                    Does this actually mean something to the person using it?
                  </p>

                  <p>
                    I like building things that are useful, but I also like when
                    there&apos;s a little bit of heart behind them.
                  </p>

                  <p>
                    Sometimes what I build starts from a practical problem.
                    Sometimes it comes from something sentimental. And sometimes
                    I&apos;m simply curious enough about an idea that I want to
                    see whether I can make it real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                01 · Useful
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                Think beyond the feature.
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                When I thought about building something for riders, I
                wasn&apos;t only thinking about navigation, motorcycle
                maintenance or features on a screen. I thought about the person
                riding the motorcycle too.
              </p>

              <p className="mt-4 leading-7 text-neutral-400">
                They might spend hours on the road, and at the end of the day,
                there may be someone at home waiting for them to return safely.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                02 · Sentimental
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                Make it feel like someone cared.
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                When I started building a digital letter platform, I didn&apos;t
                want it to feel like another place where you type something into
                a box and press send.
              </p>

              <p className="mt-4 leading-7 text-neutral-400">
                I wanted receiving one to feel personal, like someone had
                actually taken their time to make something specifically for
                you.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-y border-neutral-900 py-14 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-sm uppercase tracking-[0.24em] text-neutral-600">
              Where that leaves me
            </p>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-neutral-400">
                Maybe that&apos;s why the things I build don&apos;t fit
                perfectly into one category. I&apos;m still an engineer. I still
                enjoy automation, electronics, sensors and figuring out how
                physical systems work. But I also enjoy building the software
                around those ideas, designing experiences people interact with,
                and learning technologies I haven&apos;t worked with before.
              </p>

              <p className="mt-8 max-w-4xl text-2xl font-medium leading-9 tracking-[-0.025em] text-white md:text-3xl md:leading-10">
                I build software. I build engineering projects. I experiment.
                But whatever I&apos;m making, I want there to be a reason for it
                to exist.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10"
        >
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Things I&apos;ve been building.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-[2rem] border border-neutral-800 bg-neutral-950 p-6 transition duration-300 hover:border-neutral-600"
              >
                {project.imageStyle === "mobile" && (
                  <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-[#0c1018] p-4 sm:p-6">
                    <div className="grid grid-cols-3 items-start gap-3 sm:gap-5">
                      {project.images.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() =>
                            openLightbox(project.title, project.images, index)
                          }
                          className={`cursor-zoom-in overflow-hidden rounded-[1rem] border border-neutral-700 ${
                            index === 1 ? "mt-8" : ""
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={`${project.title} ${image.label}`}
                            width={420}
                            height={850}
                            className="h-auto w-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {project.imageStyle === "desktop" && (
                  <div className="mb-8">
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(project.title, project.images, 0)
                      }
                      className="block w-full overflow-hidden rounded-[1.5rem] border border-neutral-800"
                    >
                      <Image
                        src={project.images[0].src}
                        alt={project.title}
                        width={1400}
                        height={850}
                        className="aspect-[16/9] w-full object-cover object-top"
                      />
                    </button>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {project.images.slice(1).map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() =>
                            openLightbox(
                              project.title,
                              project.images,
                              index + 1,
                            )
                          }
                          className="overflow-hidden rounded-2xl border border-neutral-800"
                        >
                          <Image
                            src={image.src}
                            alt={image.label}
                            width={800}
                            height={500}
                            className="aspect-[16/10] w-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {project.imageStyle === "game" && (
                  <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-[#080a0d] p-3">
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(project.title, project.images, 0)
                      }
                      className="relative block w-full overflow-hidden rounded-[1.1rem]"
                    >
                      <Image
                        src={project.images[0].src}
                        alt={project.title}
                        width={1400}
                        height={850}
                        className="aspect-[16/9] w-full object-cover object-top"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[9px] uppercase tracking-[0.18em]">
                        Prototype Build · Godot
                      </div>
                    </button>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {project.images.slice(1).map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() =>
                            openLightbox(
                              project.title,
                              project.images,
                              index + 1,
                            )
                          }
                          className="overflow-hidden rounded-xl border border-neutral-800"
                        >
                          <Image
                            src={image.src}
                            alt={image.label}
                            width={800}
                            height={500}
                            className="aspect-[16/10] w-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {project.number} · {project.category}
                </p>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-semibold">{project.title}</h3>

                  <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
                    {project.status}
                  </span>
                </div>

                <p className="mt-8 flex-1 leading-7 text-neutral-400">
                  {project.description}
                </p>

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

                <div className="mt-8">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-neutral-500">Project progress</span>
                    <span>{project.progress}%</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-neutral-900">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOW */}
        <section
          id="now"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10 md:py-32"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            /Now
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            What I&apos;m working on lately.
          </h2>

          <div className="mt-14 rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8 md:p-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Active Now
            </div>

            <h3 className="mt-8 text-3xl font-semibold">MPA Learning Portal</h3>

            <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
              Currently my main development priority. I&apos;m working on
              turning it into a complete learning platform, from course delivery
              and student enrolment to payments, certificates and the systems
              behind them.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">
                Exploring
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Software × Mechatronics
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                Continuing to grow on the software side while finding ways to
                connect it back to automation, IoT and physical systems.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">
                On The Side
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                A few ideas I&apos;m not ready to abandon.
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                RideBuddy, Just For You and The Sixth Recording are still
                somewhere between prototype, experiment and &quot;I really want
                to finish this.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* FREELANCE */}
        <section
          id="freelance"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                Freelance
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                I&apos;m open to
                <br />
                selected projects.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-neutral-400">
                I&apos;m open to selected freelance projects that allow for a
                reasonable timeline, as I balance them alongside my full-time
                work.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  ["01", "Web Development"],
                  ["02", "Prototype Development"],
                  ["03", "Internal Tools"],
                  ["04", "IoT & Automation"],
                ].map(([number, title]) => (
                  <div
                    key={title}
                    className="rounded-[1.75rem] border border-neutral-800 bg-neutral-950 p-6"
                  >
                    <p className="text-xs text-neutral-600">{number}</p>
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10 md:py-32"
        >
          {/* TOP */}
          <div className="grid gap-14 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
            {/* PHOTOBOOTH */}
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                Contact
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <div className="-rotate-2 bg-[#f2f2f0] p-[7px] pb-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:rotate-0">
                  <div className="space-y-[7px]">
                    <div className="relative h-[150px] w-[125px] overflow-hidden bg-neutral-300 sm:h-[175px] sm:w-[145px]">
                      <Image
                        src="/images/photobooth/intan-1.jpg"
                        alt="Intan photobooth photo 1"
                        fill
                        sizes="145px"
                        className="object-cover"
                      />
                    </div>

                    <div className="relative h-[150px] w-[125px] overflow-hidden bg-neutral-300 sm:h-[175px] sm:w-[145px]">
                      <Image
                        src="/images/photobooth/intan-2.jpg"
                        alt="Intan photobooth photo 2"
                        fill
                        sizes="145px"
                        className="object-cover"
                      />
                    </div>

                    <div className="relative h-[150px] w-[125px] overflow-hidden bg-neutral-300 sm:h-[175px] sm:w-[145px]">
                      <Image
                        src="/images/photobooth/intan-3.jpg"
                        alt="Intan photobooth photo 3"
                        fill
                        sizes="145px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                      INTAN · 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT CONTENT */}
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Have something in mind?
                <br />
                Tell me about it.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
                Whether it&apos;s a project, collaboration, opportunity or just
                a conversation about something interesting, you&apos;re welcome
                to reach out.
              </p>

              {/* CONTACT BOX */}
              <div className="mt-14 overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950">
                <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
                  <div className="p-7 md:p-10">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">
                      Start a conversation
                    </p>

                    <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em]">
                      I&apos;d rather hear the idea while it&apos;s still messy
                      than only when everything is figured out.
                    </h3>

                    <p className="mt-6 max-w-xl leading-7 text-neutral-500">
                      Tell me what you&apos;re thinking about, what you&apos;re
                      trying to build and roughly when you need it. We can
                      figure out the rest from there.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <a
                        href="mailto:intanmaisara0403@gmail.com"
                        className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold transition hover:bg-neutral-200"
                        style={{ color: "#000000" }}
                      >
                        <Mail size={16} />
                        Send me an email
                        <ArrowUpRight size={14} />
                      </a>

                      <a
                        href="https://wa.me/60109626051"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm text-white transition hover:border-neutral-400"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-neutral-800 bg-[#0c0c0c] p-7 md:p-10 lg:border-l lg:border-t-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">
                      Currently
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <p className="font-medium">Open to selected work</p>
                    </div>

                    <div className="mt-8 space-y-6 border-t border-neutral-900 pt-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                          Based in
                        </p>
                        <p className="mt-2 text-sm text-neutral-300">
                          Miri, Sarawak · Malaysia
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                          Best for
                        </p>
                        <p className="mt-2 text-sm text-neutral-300">
                          Freelance · Collaboration · Tech opportunities
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                          Response
                        </p>
                        <p className="mt-2 text-sm text-neutral-300">
                          When I&apos;m away from work
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <a
                  href="https://github.com/imysr"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.4rem] border border-neutral-800 p-5 transition hover:border-neutral-600 hover:bg-neutral-950"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[22px] w-[22px] fill-none stroke-neutral-300"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.26 5.26 0 0 0 19.08.32S17.9-.06 15 1.82a13.38 13.38 0 0 0-7 0C5.1-.06 3.92.32 3.92.32a5.26 5.26 0 0 0-.14 2.98A5.65 5.65 0 0 0 2.28 7.25c0 5.63 3.44 6.89 6.72 7.25A4.8 4.8 0 0 0 8 18v4" />
                      <path d="M8 19c-3 .92-3-1.5-4-2" />
                    </svg>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                        Code
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">GitHub</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-neutral-600 transition group-hover:text-white"
                  />
                </a>

                <a
                  href="https://www.instagram.com/ysrr.mka/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.4rem] border border-neutral-800 p-5 transition hover:border-neutral-600 hover:bg-neutral-950"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[22px] w-[22px] fill-none stroke-neutral-300"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        className="fill-neutral-300 stroke-none"
                      />
                    </svg>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                        Social
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">Instagram</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-neutral-600 transition group-hover:text-white"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@ninimysr"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.4rem] border border-neutral-800 p-5 transition hover:border-neutral-600 hover:bg-neutral-950"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[22px] w-[22px] fill-none stroke-neutral-300"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3v11.5a4.5 4.5 0 1 1-4-4.47" />
                      <path d="M14 3c.65 2.8 2.38 4.45 5 5" />
                      <path d="M19 8v3c-1.9-.24-3.55-.98-5-2.2" />
                    </svg>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                        Social
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">TikTok</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-neutral-600 transition group-hover:text-white"
                  />
                </a>

                <a
                  href="mailto:intanmaisara0403@gmail.com"
                  className="group flex items-center justify-between rounded-[1.4rem] border border-neutral-800 p-5 transition hover:border-neutral-600 hover:bg-neutral-950"
                >
                  <div className="flex items-center gap-4">
                    <Mail
                      size={22}
                      strokeWidth={1.6}
                      className="text-neutral-300"
                    />

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                        Direct
                      </p>
                      <p className="mt-1 text-sm text-neutral-200">Email</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-neutral-600 transition group-hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="mt-24 border-t border-neutral-900 pt-8">
            <div className="flex flex-col justify-between gap-6 text-sm text-neutral-600 md:flex-row md:items-center">
              <p>© 2026 Intan Maisara.</p>

              <p>Mechatronics · Software · Still building</p>

              <a href="#" className="transition hover:text-neutral-300">
                Back to top ↑
              </a>
            </div>
          </footer>
        </section>
      </main>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-7xl flex-col rounded-[2rem] border border-neutral-800 bg-[#0c0c0c] p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex justify-between">
              <div>
                <p className="text-xs text-neutral-500">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  {lightbox.projectTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="h-11 w-11 rounded-full border border-neutral-700"
              >
                ×
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-black">
              <Image
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].label}
                width={1800}
                height={1200}
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="select-none text-center font-semibold uppercase tracking-[0.18em] text-white/20">
                  <div className="text-2xl sm:text-4xl md:text-5xl">
                    Intan Maisara
                  </div>
                  <div className="mt-2 text-sm tracking-[0.45em]">
                    Portfolio
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={previousImage}
                className="absolute left-4 h-11 w-11 rounded-full bg-black/60"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 h-11 w-11 rounded-full bg-black/60"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
