export type ArticleType = {
  id: number;
  title: string;
  exerpt: string;
  url: string;
};

export const popularArticles: ArticleType[] = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    exerpt: "What happens when old PCs are given modern upgrades?",
    url: "#",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    exerpt: "Our best picks for various needs and budgets.",
    url: "#",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    exerpt: "How the pandemic has sparked fresh opportunities.",
    url: "#",
  },
];

export const newArticles: ArticleType[] = [
  {
    id: 4,
    title: "Hydrogen VS Electric Cars",
    exerpt: "Will hydrogen-fueled cars ever catch up to EVs?",
    url: "#",
  },
  {
    id: 5,
    title: "The Downsides of AI Artistry",
    exerpt:
      "What are the possible adverse effects of on-demand AI image generation?",
    url: "#",
  },
  {
    id: 6,
    title: "Is VC Funding Drying Up?",
    exerpt:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    url: "#",
  },
];

export const heroArticle: ArticleType = {
  id: 7,
  title: "The Bright Future of Web 3.0?",
  exerpt:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  url: "#",
};
