"use client";

import DriftWall from "@/components/ui/DriftWall";

const DRIFT_ITEMS = [
  { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80" },
  { image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" }
];

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.45] z-0">
      <DriftWall
        items={DRIFT_ITEMS}
        columns={8}
        tileWidth={200}
        tileHeight={130}
        gap={18}
        tilt={16}
        turn={-14}
        perspective={1050}
        depth={120}
        speed={15}
        direction="up"
        variance={0.65}
        parallax={0.6}
        lift={0}
        fade={1}
        dim={1}
        overlayColor="#050505"
        radius={14}
        roll={0}
        pauseOnHover={false}
        grayscale={true}
        decorative={true}
      />
    </div>
  );
}
