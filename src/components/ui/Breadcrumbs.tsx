import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, type BreadcrumbItem } from "@/components/seo/JsonLd";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border-subtle bg-surface">
      <JsonLd data={breadcrumbJsonLd(items)} />
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-sm text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight size={14} aria-hidden="true" className="text-text-muted" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-text-primary">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-teal-text">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
