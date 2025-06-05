import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitCardProps {
  category: string;
  icon: LucideIcon;
  className: string;
  items: BenefitItem[];
}

export function BenefitCard({
  category,
  icon: CategoryIcon,
  className,
  items,
}: BenefitCardProps) {
  return (
    <div className="relative flex flex-col h-full">
      {/* Overlapping Icon with proper background color */}
      <div className="relative z-10 flex justify-center">
        <div
          className={cn(
            `flex h-16 w-16 items-center bg-red-500 justify-center rounded-full shadow-lg`,
            className,
            "bg-red-500"
          )}
        >
          <CategoryIcon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Card with negative margin to overlap */}
      <Card className="flex-1 relative -mt-8 pt-12 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="flex flex-col h-full text-center px-6 pb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {category}
          </h3>

          <div className="space-y-4 flex-1">
            {items.map((item, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
