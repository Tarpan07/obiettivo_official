"use client";

import React, { useState } from "react";
import { ExternalLink, Calendar, MapPin, CheckCircle, Sparkles, ArrowRight, FolderKanban } from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  avatarUrl: string;
  description: string;
  isUpcoming: boolean;
  registrationUrl?: string;
  driveUrl?: string;
  badge?: string;
}

interface EventCardProps {
  event: EventItem;
  className?: string;
}

export function EventCard({ event, className = "" }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`group relative w-full h-[460px] cursor-pointer [perspective:1000px] select-none ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      {/* Behind Glow Effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-pink-600/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Flip Card Container */}
      <div
        className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ==================== FRONT SIDE ==================== */}
        <div className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-zinc-950/90 overflow-hidden shadow-2xl [backface-visibility:hidden]">
          {/* Cover DP Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={event.avatarUrl}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/home-bg1.png";
              }}
            />
            {/* Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              <Sparkles size={12} className="text-blue-400" />
              <span>{event.category}</span>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              {event.isUpcoming ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider backdrop-blur-md animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Upcoming
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-800/80 border border-white/10 px-3 py-1 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider backdrop-blur-md">
                  <CheckCircle size={10} className="text-zinc-400" />
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Front Content */}
          <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide line-clamp-1 font-[family-name:var(--font-sora)]">
                {event.title}
              </h3>

              <div className="mt-3 space-y-2 text-xs text-zinc-400 font-light">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-blue-400 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-purple-400 shrink-0" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              </div>
            </div>

            {/* Flip Indicator */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-light">
              <span className="text-[11px] group-hover:text-blue-400 transition-colors">
                Hover to flip & view details
              </span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-zinc-500 group-hover:text-blue-400" />
            </div>
          </div>
        </div>

        {/* ==================== BACK SIDE ==================== */}
        <div className="absolute inset-0 w-full h-full rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6 flex flex-col justify-between shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {/* Top Header */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-[family-name:var(--font-syncopate)]">
                {event.category}
              </span>
              {event.isUpcoming ? (
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  Open for Registration
                </span>
              ) : (
                <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-900 border border-white/10 px-2.5 py-0.5 rounded-full">
                  Event Concluded
                </span>
              )}
            </div>

            <h4 className="text-lg font-bold text-white mb-2 leading-snug font-[family-name:var(--font-sora)]">
              {event.title}
            </h4>

            <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-6">
              {event.description}
            </p>
          </div>

          {/* Bottom Action Area */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="text-xs space-y-1 text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-blue-400" />
                <span className="font-medium text-white">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-purple-400" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Action Buttons based on status */}
            {event.isUpcoming ? (
              event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95 cursor-pointer"
                >
                  <span>Register Now</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-zinc-900 border border-white/10 text-center text-xs font-semibold text-zinc-400">
                  Registrations Opening Soon
                </div>
              )
            ) : (
              event.driveUrl ? (
                <a
                  href={event.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-zinc-900/80 hover:bg-zinc-800 py-3 px-4 text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <FolderKanban size={14} className="text-amber-400" />
                  <span>View Drive Album</span>
                  <ExternalLink size={13} className="text-zinc-400" />
                </a>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-zinc-900/60 border border-white/5 text-center text-xs font-medium text-zinc-500">
                  Gallery Album Archived
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
