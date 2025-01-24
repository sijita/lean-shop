'use client';
import './breadcrumb.scss';
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
    <nav className="breadcrumb-container">
      <ol className="list">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <React.Fragment key={breadcrumb.href}>
            <li>/</li>
            <li>
              <Link href={breadcrumb.href} className="link">
                {breadcrumb.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
