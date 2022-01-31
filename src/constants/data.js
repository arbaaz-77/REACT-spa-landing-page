import images from "./images";

const wines = [
  {
    title: "Express Manicure",
    price: "$56",
    tags: "1hr | Couples Available",
  },
  {
    title: "Classic Manicure",
    price: "$59",
    tags: "1.5hr | Couples Available",
  },
  {
    title: "Citrus SpaManicure",
    price: "$44",
    tags: "2hr | Lemons",
  },
  {
    title: "Almond SpaManicure",
    price: "$31",
    tags: "2hr | Nuts and Cocoa",
  },
  {
    title: "Aloevera SpaManicure",
    price: "$26",
    tags: "2hr | Specially home-grown aloevera plants",
  },
];

const cocktails = [
  {
    title: "Express Pedicure",
    price: "$20",
    tags: "1hr | Couples Available",
  },
  {
    title: "Classic Pedicure",
    price: "$16",
    tags: "1hr | Couples Available",
  },
  {
    title: "Marine SpaPedicure",
    price: "$10",
    tags: "2hr | Sea-salts | menthol | marine boutanicals | quartz crystals",
  },
  {
    title: "Earth SpaPedicure",
    price: "$31",
    tags: "2hr | Vitamins | flat feet | moisturizing agents",
  },
  {
    title: "Harmony Gelish",
    price: "$26",
    tags: "2hr | Nail specialize | Gelish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "best spa, 2019",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Best upcoming spa, 2017",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Elite hospitality 2019 | 2020",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Service",
    subtitle: "Outstanding service, 2019",
  },
];

export default { wines, cocktails, awards };
