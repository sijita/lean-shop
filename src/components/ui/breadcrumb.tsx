'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Breadcrumb({
  alternativeText,
}: {
  alternativeText?: string;
}) {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path);

  const breadcrumbs = paths.map((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/');
    const isLastPath = index === paths.length - 1;

    const label =
      isLastPath && alternativeText
        ? alternativeText
        : path.charAt(0).toUpperCase() + path.slice(1);

    return {
      href,
      label,
    };
  });

  return (
    <nav className="px-4 py-3 text-sm text-gray-500 bg-gray-50 w-full overflow-auto">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <React.Fragment key={breadcrumb.href}>
            <li>/</li>
            <li>
              <Link href={breadcrumb.href} className="hover:text-gray-700">
                {breadcrumb.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
