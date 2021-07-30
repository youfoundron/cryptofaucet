import React from "react";
import Link from "next/link";

export interface ResultCardProps {
  title: string;
  description?: string;
  cta?: {
    url: string;
    label: string;
  };
}

export const ResultCard: React.FC<ResultCardProps> = ({
  title,
  description,
  cta,
  children,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        {cta && (
          <div className="ml-4 mt-4 flex-shrink-0">
            <Link href={cta.url}>
              <a className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {cta.label}
              </a>
            </Link>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
