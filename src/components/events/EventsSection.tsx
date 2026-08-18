"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, Clock, Camera, Flame, CalendarX2 } from "lucide-react";
import EventCard, { EventItem } from "./EventCard";

const sampleEvents: EventItem[] = [
  // Upcoming Events
  {
    id: "up-1",
    title: "Framing Lights Masterclass 2026",
    category: "Workshop",
    date: "Sept 12, 2026 • 4:00 PM",
    location: "SAC Auditorium, NIT Silchar",
    avatarUrl: "/images/home-bg1.png",
    description:
      "Master the art of long-exposure and dynamic night photography in this hands-on workshop hosted by senior Obiettivo mentors.",
    isUpcoming: true,
    registrationUrl: "https://forms.google.com",
  },
  {
    id: "up-2",
    title: "Monochrome Photowalk Vol. 4",
    category: "Photowalk",
    date: "Oct 05, 2026 • 6:30 AM",
    location: "Barak River Bank & Campus Trails",
    avatarUrl: "/images/home-bg2.jpg",
    description:
      "Explore high-contrast black & white street composition. Walk through historic campus trails and capture golden hour silhouettes.",
    isUpcoming: true,
    registrationUrl: "https://forms.google.com",
  },

  // Past Events
  {
    id: "past-1",
    title: "Annual Campus Lens Contest '25",
    category: "Competition",
    date: "Nov 20, 2025",
    location: "NIT Silchar Main Campus",
    avatarUrl: "/images/home-bg3.jpg",
    description:
      "Over 200 student entries capturing campus life, vibrant festivals, and nature. Winners showcased at the Annual Gallery Exhibition.",
    isUpcoming: false,
    driveUrl: "https://drive.google.com",
  },
  {
    id: "past-2",
    title: "Portraiture & Lighting Bootcamp",
    category: "Bootcamp",
    date: "Aug 14, 2025",
    location: "Obiettivo Studio & SAC",
    avatarUrl: "/images/home-bg4.jpg",
    description:
      "Intensive 2-day session covering studio speedlights, bounce diffusers, and Adobe Lightroom portrait color grading.",
    isUpcoming: false,
    driveUrl: "https://drive.google.com",
  },
  {
    id: "past-3",
    title: "Astrophotography Expedition",
    category: "Expedition",
    date: "April 18, 2025",
    location: "Silchar Suburbs & Hillside",
    avatarUrl: "/images/about-bg.jpg",
    description:
      "Overnight stargazing and Milky Way tracking shoot equipped with wide-angle prime lenses and tracker rigs.",
    isUpcoming: false,
    driveUrl: "https://drive.google.com",
  },
];

export function EventsSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = sampleEvents.filter((event) =>
    activeTab === "upcoming" ? event.isUpcoming : !event.isUpcoming
  );

  return (
    <section id="events" className="relative w-full pt-12 pb-20 md:pt-14 md:pb-24 px-6 md:px-12 bg-transparent text-white overflow-hidden select-none font-[family-name:var(--font-sora)]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
            <Camera size={14} className="text-blue-400" />
            <span className="uppercase tracking-widest font-[family-name:var(--font-syncopate)] text-[10px]">
              Club Events & Workshops
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Capturing Moments, Inspiring Creators
          </h2>

          {/* Photography Quote */}
          <p className="text-sm md:text-base font-light italic text-zinc-400 leading-relaxed max-w-2xl">
            &ldquo;Photography is the story we fail to put into words. Step behind the lens, master visual storytelling, and join our photowalks &amp; exhibitions.&rdquo;
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "upcoming"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Flame size={14} />
              <span>Upcoming Events</span>
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "past"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Clock size={14} />
              <span>Past Events</span>
            </button>
          </div>
        </div>

        {/* Events Grid or Fallback */}
        <div className="mt-12">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-6 rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl text-center space-y-3">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 mb-1">
                <CalendarX2 size={28} className="text-zinc-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-zinc-300 tracking-wide font-[family-name:var(--font-sora)]">
                There are no upcoming events
              </h3>
              <p className="text-xs text-zinc-500 font-light max-w-md">
                Check back shortly for new workshops and photowalks, or explore our past events!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
