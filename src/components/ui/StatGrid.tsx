import { ReactNode } from "react";

type StatItem =
  | { value: string; label: string; icon?: never; sublabel?: never }
  | { icon: ReactNode; label: string; sublabel?: string; value?: never };

interface StatGridProps {
  items: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: "card" | "plain";
  className?: string;
}

const columnsClass: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

export default function StatGrid({
  items,
  columns = 4,
  variant = "card",
  className = "",
}: StatGridProps) {
  if (variant === "plain") {
    return (
      <div className={`grid ${columnsClass[columns]} gap-6 ${className}`}>
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">
              {item.value}
            </div>
            <div className="mt-1 text-xs tracking-wider text-stone-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${columnsClass[columns]} gap-px bg-stone-700 ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-stone-800 p-8 flex flex-col items-center justify-center text-center min-h-[140px]"
        >
          {item.value ? (
            <>
              <span className="text-4xl md:text-5xl font-bold text-accent-light">
                {item.value}
              </span>
              <span className="mt-2 text-xs tracking-[0.2em] text-stone-400 uppercase">
                {item.label}
              </span>
            </>
          ) : (
            <>
              <div className="text-accent-light">{item.icon}</div>
              <span className="mt-3 text-sm font-bold text-accent-light tracking-[0.18em] uppercase">
                {item.label}
              </span>
              {item.sublabel && (
                <span className="mt-1.5 text-[10px] tracking-[0.22em] text-stone-500 uppercase">
                  {item.sublabel}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
