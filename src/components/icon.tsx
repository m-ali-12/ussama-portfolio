import { Layout, Rocket, Sparkles, TrendingUp } from "lucide-react";

export function HighlightIcon({ name }: { name: string }) {
  const props = { size: 18 };
  switch (name) {
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Layout":
      return <Layout {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "Rocket":
      return <Rocket {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}
