export const BRANDS = [
  { id: 1, name: "Europe" },
  { id: 1, name: "American" },
  { id: 1, name: "Asian" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (value, index) => YEARMAX - index
);
