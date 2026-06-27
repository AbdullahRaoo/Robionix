"use client";

import { useState } from "react";

export default function VideoFrame({
  src,
  poster,
  label = "video",
  chrome = true,
}: {
  src: string;
  poster: string;
  label?: string;
  chrome?: boolean;
}) {
  const [play, setPlay] = useState(false);

  return (
    <div className="cine-stage relative overflow-hidden rounded-[20px] p-3">
      {chrome && (
        <div className="mb-2 flex items-center gap-2 px-2 pt-1">
          <span className="h-2 w-2 rounded-full bg-[#F0A800]/80" />
          <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">{label}</span>
        </div>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-black">
        {play ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={src} poster={poster} controls autoPlay playsInline className="h-full w-full object-cover" />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label="Play video"
            className="group absolute inset-0 h-full w-full"
          >
            <img src={poster} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(4,18,25,.15),rgba(4,18,25,.45))" }} />
            <span aria-hidden className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(180deg,#FFC53D,#F0A800)", boxShadow: "0 14px 34px -6px rgba(240,168,0,.6)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#04151d" className="ml-1"><path d="M5 3.5v17l15-8.5z" /></svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
