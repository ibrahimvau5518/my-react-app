export default function LandingPage() {
  const sections = [
    'Hero',
    'Features',
    'About Us',
    'Services',
    'Pricing',
    'Testimonials',
    'Contact',
  ];
  return (
    <main>
      {sections.map((sec, i) => (
        <section
          key={i}
          className="h-screen flex items-center justify-center border-b text-4xl font-bold"
        >
          {sec} Section
        </section>
      ))}
    </main>
  );
}
