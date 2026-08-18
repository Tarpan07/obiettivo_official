import EventsSection from "@/components/events/EventsSection";

export const metadata = {
  title: "Events | Obiettivo Photography Club",
  description: "Explore upcoming and past photography workshops, photowalks, and exhibitions hosted by Obiettivo Photography Club, NIT Silchar.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20 bg-transparent">
      <EventsSection />
    </main>
  );
}
