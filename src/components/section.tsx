type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  boxsize?: "lg" | "xl";
};

export default function Section({
  id,
  title,
  children,
  boxsize = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`bg-black max-w-screen-${boxsize} mx-auto px-4 py-32 text-neutral-100`}
    >
      <h2 className="text-4xl text-neutral-100 font-semibold pb-6">{title}</h2>
      {children}
    </section>
  );
}
