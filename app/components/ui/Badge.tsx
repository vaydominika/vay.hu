export default function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`font-bold text-[0.65rem] px-2 py-1 rounded-full bg-[var(--secondary-color)] ${className}`}>{children}</span>
  );
}