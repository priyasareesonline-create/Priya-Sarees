import { siteConfig } from "@/config/site";

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

/** Homepage hero fallback until Admin → Home Banner uploads product photos. */
export const heroSlides: HeroSlide[] = [
  {
    id: "silk",
    title: "Silk sarees",
    subtitle: "Rich weaves for weddings and celebrations",
    href: "/shop",
    cta: "Shop now",
    image: "/images/priya-sarees-hero-silk.svg",
    imageAlt: `${siteConfig.name} — silk sarees`,
  },
  {
    id: "wedding",
    title: "Wedding collection",
    subtitle: "Bridal and festive sarees for every occasion",
    href: "/collections",
    cta: "Explore",
    image: "/images/priya-sarees-hero-wedding.svg",
    imageAlt: `${siteConfig.name} — wedding sarees`,
  },
  {
    id: "everyday",
    title: "Cotton & everyday wear",
    subtitle: "Comfortable weaves for daily elegance",
    href: "/shop",
    cta: "Browse all",
    image: "/images/priya-sarees-hero-festive.svg",
    imageAlt: `${siteConfig.name} — cotton and festive sarees`,
  },
];
