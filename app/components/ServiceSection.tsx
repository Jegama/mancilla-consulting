// app/components/ServiceSection.tsx

import { LucideIcon } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

interface SectionItem {
  title: string;
  description: string; // Can contain HTML
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string; // Can contain HTML
  icon: LucideIcon;
  items: SectionItem[];
  relatedLinks?: Array<{ title: string; href: string }>;
}

export default function ServiceSection({
  id,
  title,
  description,
  icon: Icon,
  items,
  relatedLinks,
}: ServiceSectionProps) {
  return (
    <section id={id} className="mt-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Icon className="w-6 h-6 mr-2" />
        {title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />
      {items.map((item, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.description),
            }}
          />
        </div>
      ))}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Related Links:</h3>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            {relatedLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-blue-600">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
