import { useEffect, useRef, useState } from "react";

export default function StopMotion({ frames }: { frames: string[] }) {
  const [index, setIndex] = useState(0);
  const last = useRef(-1);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const next = Math.floor(progress * frames.length);

      if (next !== last.current) {
        last.current = next;
        setIndex(Math.min(frames.length - 1, next));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [frames.length]);

  return (
    <div
      style={{
        position: "fixed",
        left: 24,
        bottom: 24,
        width: 240,
        pointerEvents: "none",
        opacity: 0.9,
      }}
      aria-hidden="true"
    >
      <img
        src={frames[index]}
        alt=""
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
