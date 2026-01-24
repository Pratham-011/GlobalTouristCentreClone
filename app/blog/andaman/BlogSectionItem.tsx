// components/blog/BlogSectionItem.tsx
import { BlogSectionData } from "../blogData";

const BlogSectionItem = ({ data }: { data: BlogSectionData }) => {
  return (
    <section className="mb-16 scroll-mt-24" id={data.id}>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
        {data.title}
      </h2>

      {/* Image Wrapper */}
      <figure className="mb-6 mx-auto max-w-[600px] w-full overflow-hidden rounded-xl shadow-md bg-gray-100">
        <div className="relative aspect-video">
          <img
            src={data.image}
            alt={data.imageAlt}
            className="max-w-[600px] max-h-[600px] object-cover transition-transform duration-300"
          />
        </div>
        <figcaption className="px-4 py-3 text-center text-xs sm:text-sm italic text-emerald-800/70 bg-emerald-50/50">
          {data.caption}
        </figcaption>
      </figure>

      <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default BlogSectionItem;
