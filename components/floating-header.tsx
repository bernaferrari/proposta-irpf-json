"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      <Link
        href="https://github.com/bernaferrari/proposta-irpf-json"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "p-2 rounded-full bg-background hover:bg-foreground/5 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
        )}
      >
        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </Link>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
