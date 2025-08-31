export default function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`font-bold text-[0.65rem] ml-4 bg-[var(--primary-color)] px-2 py-1 rounded-full color-[var(--third-color)] opacity-80 ${className}`}>{children}</span>
  );
}