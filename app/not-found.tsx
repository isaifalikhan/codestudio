import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-[#F6F4EC]">
      <h1 className="text-6xl md:text-9xl font-display font-bold text-[#14171F] mb-4">404</h1>
      <p className="text-xl text-[#14171F]/60 mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-8 py-4 bg-[#14171F] text-[#F6F4EC] rounded-full font-bold hover:bg-[#D98A2C] transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="px-8 py-4 border border-[#14171F]/20 text-[#14171F] rounded-full font-bold hover:bg-[#14171F]/5 transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
