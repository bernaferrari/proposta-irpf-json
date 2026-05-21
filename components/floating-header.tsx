"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.588 2 12.253c0 4.533 2.865 8.375 6.839 9.731.5.094.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.62-3.369-1.375-3.369-1.375-.455-1.184-1.11-1.499-1.11-1.499-.908-.636.069-.623.069-.623 1.004.072 1.532 1.057 1.532 1.057.892 1.567 2.341 1.115 2.91.853.091-.662.349-1.115.635-1.371-2.221-.259-4.555-1.139-4.555-5.067 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.051A9.37 9.37 0 0 1 12 6.964a9.35 9.35 0 0 1 2.504.345c1.909-1.327 2.747-1.051 2.747-1.051.546 1.412.203 2.455.1 2.714.641.717 1.028 1.632 1.028 2.751 0 3.938-2.338 4.805-4.566 5.059.359.317.679.943.679 1.9 0 1.371-.012 2.477-.012 2.814 0 .274.18.592.688.492C19.138 20.629 22 16.789 22 12.253 22 6.588 17.523 2 12 2Z" />
    </svg>
  );
}

export function FloatingHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      <Link
        href="https://github.com/bernaferrari/proposta-irpf-json"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
        className={cn(
          "size-8 inline-flex items-center justify-center rounded-full bg-background border border-gray-200 dark:border-gray-700 hover:bg-foreground/5 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
        )}
      >
        <GitHubIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </Link>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
        className="bg-background rounded-lg hover:bg-foreground/5 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
