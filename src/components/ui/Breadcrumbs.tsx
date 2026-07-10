import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex px-4 py-3 bg-brand-gray/40 rounded-lg text-xs md:text-sm text-brand-gray-dark border border-gray-100" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-brand-gray-dark hover:text-brand-red transition-colors duration-200">
            <Home className="w-3.5 h-3.5 mr-1.5" />
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-gray-300 mx-1 md:mx-2" />
              {isLast || !item.href ? (
                <span className="text-brand-charcoal font-semibold max-w-[200px] truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-brand-gray-dark hover:text-brand-red transition-colors duration-200">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
