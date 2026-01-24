import { BlogSectionData } from "./types";

const ContentSection = ({ data }: { data: BlogSectionData }) => (
  <section className="mb-12 scroll-mt-24">
    {data.title && (
      <h2 className="font-serif text-2xl font-bold mb-4">{data.title}</h2>
    )}

    {data.image && (
      <figure className="mb-6 rounded-xl overflow-hidden">
        <img src={data.image} alt={data.imageAlt} />
        {data.caption && <figcaption>{data.caption}</figcaption>}
      </figure>
    )}

    {data.highlight && (
      <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 italic">
        {data.highlight}
      </blockquote>
    )}

    {data.paragraphs.map((p, i) => (
      <p key={i} className="mb-4 text-gray-700">
        {p}
      </p>
    ))}
  </section>
);

export default ContentSection;
