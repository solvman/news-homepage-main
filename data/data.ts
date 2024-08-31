export type ArticleType = {
  id: number;
  title: string;
  exerpt: string;
  rank: number;
  published: string;
  featured?: boolean;
  url: string;
  img?: string;
};

export const articles: ArticleType[] = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    exerpt: "What happens when old PCs are given modern upgrades?",
    rank: 10,
    published: "2022-08-25",
    url: "#",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    exerpt: "Our best picks for various needs and budgets.",
    rank: 9,
    published: "2022-08-26",
    url: "#",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    exerpt: "How the pandemic has sparked fresh opportunities.",
    rank: 8,
    published: "2022-08-27",
    url: "#",
  },
  {
    id: 4,
    title: "Hydrogen VS Electric Cars",
    exerpt: "Will hydrogen-fueled cars ever catch up to EVs?",
    rank: 7,
    published: "2024-08-30",
    url: "#",
  },
  {
    id: 5,
    title: "The Downsides of AI Artistry",
    exerpt:
      "What are the possible adverse effects of on-demand AI image generation?",
    rank: 6,
    published: "2022-08-29",
    url: "#",
  },
  {
    id: 6,
    title: "Is VC Funding Drying Up?",
    exerpt:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    rank: 5,
    published: "2022-08-28",
    url: "#",
  },
  {
    id: 7,
    title: "The Bright Future of Web 3.0?",
    exerpt:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    rank: 4,
    published: "2022-08-24",
    featured: true,
    url: "#",
  },
];
