import { ResourcesBreadcrumbs } from '@/app/components/ResourcesBreadcrumbs';

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResourcesBreadcrumbs />
      {children}
    </>
  );
}
