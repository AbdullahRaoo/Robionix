"use client";

import { useState } from "react";

export default function VideoThumb({
  src,
  poster,
  imgClass,
}: {
  src: string;
  poster: string;
  imgClass: string;
}) {
  const [play, setPlay] = useState(false);

  if (play) {
    // eslint-disable-next-line jsx-a11y/media-has-caption
    return <video src={src} poster={poster} controls autoPlay playsInline className={imgClass} />;
  }
  return (
    <button type="button" onClick={() => setPlay(true)} aria-label="Play video" className="group relative block h-full w-full">
      <img src={poster} alt="" className={imgClass} />
      <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(4,18,25,.1),rgba(4,18,25,.45))" }} />
      <span aria-hidden className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(180deg,#FFC53D,#F0A800)", boxShadow: "0 12px 30px -6px rgba(240,168,0,.6)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#04151d" className="ml-0.5"><path d="M5 3.5v17l15-8.5z" /></svg>
      </span>
    </button>
  );
}
