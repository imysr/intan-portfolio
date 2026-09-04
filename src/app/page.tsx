"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
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

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-24 md:px-10"
        >
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
              Some started because I needed them, some because I was curious,
              and some simply because I wanted to see if I could build them.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-[2rem] border border-neutral-800 bg-neutral-950 p-6 transition duration-300 hover:border-neutral-600"
              >
                {/* MOBILE SHOWCASE */}
                {project.images.length > 0 &&
                  project.imageStyle === "mobile" && (
                    <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-[#0c1018] p-4 sm:p-6">
                      <div className="grid grid-cols-3 items-start gap-3 sm:gap-5">
                        {project.images.map((image, index) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() =>
                              openLightbox(project.title, project.images, index)
                            }
                            className={`cursor-zoom-in overflow-hidden rounded-[1rem] border border-neutral-700 bg-neutral-900 text-left shadow-2xl transition duration-500 hover:border-neutral-500 group-hover:-translate-y-1 ${
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

                      <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                        <span>Mobile Product</span>
                        <span>Click to inspect</span>
                      </div>
                    </div>
                  )}

                {/* DESKTOP SHOWCASE */}
                {project.images.length > 0 &&
                  project.imageStyle === "desktop" && (
                    <div className="mb-8">
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox(project.title, project.images, 0)
                        }
                        className="block w-full cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-900 text-left transition hover:border-neutral-600"
                      >
                        <Image
                          src={project.images[0].src}
                          alt={`${project.title} ${project.images[0].label}`}
                          width={1400}
                          height={850}
                          className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                        />
                      </button>

                      {project.images.length > 1 && (
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {project.images.slice(1, 3).map((image, index) => (
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
                              className="cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 text-left transition hover:border-neutral-600"
                            >
                              <Image
                                src={image.src}
                                alt={`${project.title} ${image.label}`}
                                width={800}
                                height={500}
                                className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                {/* GAME SHOWCASE */}
                {project.images.length > 0 && project.imageStyle === "game" && (
                  <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-[#080a0d] p-3">
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(project.title, project.images, 0)
                      }
                      className="relative block w-full cursor-zoom-in overflow-hidden rounded-[1.1rem] border border-neutral-800 text-left transition hover:border-neutral-600"
                    >
                      <Image
                        src={project.images[0].src}
                        alt={`${project.title} ${project.images[0].label}`}
                        width={1400}
                        height={850}
                        className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                      />

                      <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-neutral-300 backdrop-blur-sm">
                        Prototype Build · Godot
                      </div>
                    </button>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {project.images.slice(1, 3).map((image, index) => (
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
                          className="cursor-zoom-in overflow-hidden rounded-xl border border-neutral-800 text-left transition hover:border-neutral-600"
                        >
                          <Image
                            src={image.src}
                            alt={`${project.title} ${image.label}`}
                            width={800}
                            height={500}
                            className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                          />
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                      <span>Development Footage</span>
                      <span>Click to inspect</span>
                    </div>
                  </div>
                )}

                {/* PROJECT HEADER */}
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
                <div className="mt-8 grid flex-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="leading-7 text-neutral-400">
                    {project.description}
                  </p>

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

                {/* STACK */}
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
                    <span className="text-neutral-300">
                      {project.progress}%
                    </span>
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
                  <span className="text-neutral-600">
                    Built by Intan · 2026
                  </span>

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

                <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-800 px-6 py-8">
                  <span className="text-4xl font-semibold text-neutral-300">
                    0%
                  </span>

                  <span className="mt-2 text-xs text-neutral-600">
                    Not started yet
                  </span>
                </div>

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

      {/* IMAGE LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-7xl flex-col rounded-[2rem] border border-neutral-800 bg-[#0c0c0c] p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            {/* LIGHTBOX HEADER */}
            <div className="mb-4 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  {lightbox.projectTitle}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {lightbox.images[lightbox.index].label}
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-xl text-neutral-400 transition hover:border-neutral-500 hover:text-white"
                aria-label="Close image preview"
              >
                ×
              </button>
            </div>

            {/* LARGE IMAGE */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-black">
              <Image
                src={lightbox.images[lightbox.index].src}
                alt={`${lightbox.projectTitle} ${
                  lightbox.images[lightbox.index].label
                }`}
                width={1800}
                height={1200}
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />

              {/* CENTER WATERMARK */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="select-none text-center font-semibold uppercase tracking-[0.18em] text-white/20 drop-shadow-lg">
                  <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Intan Maisara
                  </div>

                  <div className="mt-2 text-sm tracking-[0.45em] sm:text-lg md:text-xl">
                    Portfolio
                  </div>
                </div>
              </div>

              {/* LEFT */}
              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xl text-white backdrop-blur-md transition hover:bg-black/80 md:left-5"
                  aria-label="Previous image"
                >
                  ←
                </button>
              )}

              {/* RIGHT */}
              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xl text-white backdrop-blur-md transition hover:bg-black/80 md:right-5"
                  aria-label="Next image"
                >
                  →
                </button>
              )}
            </div>

            {/* THUMBNAILS */}
            {lightbox.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {lightbox.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() =>
                      setLightbox({
                        ...lightbox,
                        index,
                      })
                    }
                    className={`min-w-[120px] overflow-hidden rounded-xl border transition ${
                      index === lightbox.index
                        ? "border-emerald-400"
                        : "border-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.label}
                      width={250}
                      height={150}
                      className="aspect-[16/9] w-full object-cover object-top"
                    />

                    <div className="bg-neutral-950 px-3 py-2 text-left text-[10px] text-neutral-500">
                      {image.label}
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 text-center text-xs text-neutral-600">
              Click outside or press Esc to close · Arrow keys to browse
            </div>
          </div>
        </div>
      )}
    </>
  );
}
