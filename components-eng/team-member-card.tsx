import { Avatar, AvatarFallback, AvatarImage } from "@/components-eng/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imagelink: string;
  alt: string;
}

export function TeamMemberCard({ name, role, imagelink, alt }: TeamMemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article
      className="
        group cursor-pointer text-center
        bg-white rounded-xl p-6
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
        transition-all duration-300 hover:-translate-y-2
        w-64 sm:w-72
      "
      aria-label={`${name}, ${role}`}
    >
      <Avatar className="w-32 h-32 mx-auto mb-4 transition-all">
        <AvatarImage
          src={imagelink}
          alt={alt}
          className="object-cover"
        />
        <AvatarFallback className="text-2xl bg-primary/10 text-primary">
          {initials}
        </AvatarFallback>
      </Avatar>

      <p className="font-serif font-bold text-gray-900 text-lg mb-1">
        {name}
      </p>
      <p className="text-teal-600 text-sm font-medium">{role}</p>
    </article>



  );
}

