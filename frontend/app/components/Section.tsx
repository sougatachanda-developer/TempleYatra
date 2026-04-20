export default function Section({ title, children, bg }: { title: string; children: React.ReactNode; bg?: string }) {
  return (
    <section className={`py-12 ${bg || ""}`}>
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6">{title}</h2>

        {children}
      </div>
    </section>
  );
}