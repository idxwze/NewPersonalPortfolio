import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">Page not found</h1>
        <p className="text-muted-foreground">
          The page you were looking for does not exist or may have been moved. Head back to the portfolio homepage to continue exploring.
        </p>
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
