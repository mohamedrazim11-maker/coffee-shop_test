export interface CoffeeFlavor {
  name: string;
  ratio: string;
  description: string;
  tag?: string;
}

export const NAV_LINKS = [
  { label: "Flavors", href: "#flavors" },
  { label: "About Us", href: "#story" },
  { label: "Visit Cafe", href: "#cafe" }
];

export const COFFEE_FLAVORS: CoffeeFlavor[] = [
  {
    name: "Espresso",
    ratio: "1:2 coffee to water",
    description: "7g ground coffee | 30ml serving",
    tag: "Classic"
  },
  {
    name: "Ristretto",
    ratio: "1:1 coffee to water",
    description: "A short, concentrated espresso shot"
  },
  {
    name: "Lungo",
    ratio: "1:3 coffee to water",
    description: "A stretched, long espresso shot"
  },
  {
    name: "Doppio",
    ratio: "1:2 coffee to water",
    description: "Double espresso shot | 14g ground coffee"
  },
  {
    name: "Red Eye",
    ratio: "1:6 espresso to brewed coffee",
    description: "Drip coffee boosted with an espresso shot",
    tag: "Strong"
  },
  {
    name: "Americano",
    ratio: "1:2 espresso to water",
    description: "Espresso diluted with hot water"
  },
  {
    name: "Latte",
    ratio: "1:3 espresso to steamed milk",
    description: "Finished with a thin layer of micro-foam"
  },
  {
    name: "Cappuccino",
    ratio: "1:1:1 espresso to steamed milk to foam",
    description: "Equal parts espresso, milk, and velvety foam",
    tag: "Popular"
  },
  {
    name: "Flat White",
    ratio: "1:2 espresso to steamed milk",
    description: "Rich espresso with fine micro-foam layer"
  },
  {
    name: "Cafe Au Lait",
    ratio: "1:1 brewed coffee and steamed milk",
    description: "Smooth blend of dark brew & steamed milk"
  },
  {
    name: "Cortado",
    ratio: "1:1 espresso to steamed milk",
    description: "Equal balance of rich espresso and warm milk"
  },
  {
    name: "Macchiato",
    ratio: "2:1 espresso to steamed milk",
    description: "Bold espresso marked with a dash of milk"
  },
  {
    name: "Mocha",
    ratio: "1:1:4 espresso to chocolate to milk",
    description: "Decadent mix of espresso, cocoa & warm milk",
    tag: "Sweet"
  }
];