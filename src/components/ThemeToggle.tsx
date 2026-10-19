import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount the theme is unknown; render neither side as active.
  const current = mounted ? resolvedTheme : undefined;

  const option = (value: "light" | "dark", Icon: typeof Sun) => {
    const active = current === value;
    return (
      <button
        type="button"
        role="radio"
        aria-checked={active}
        aria-label={`Switch to ${value} mode`}
        onClick={() => setTheme(value)}
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </button>
    );
  };

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn("inline-flex items-center gap-0.5 rounded-full border border-border bg-card p-0.5", className)}
    >
      {option("light", Sun)}
      {option("dark", Moon)}
    </div>
  );
};

export default ThemeToggle;
