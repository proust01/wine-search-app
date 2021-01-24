import data from "./data.js";

const product = data.products.filter((c) => c["lotCode"] === "15MPPN002-VK");
// console.log(product);

if (product) {
    let initial = [];
  const breakdown = product[0].components.reduce((a, c) => {
    let index = a?.findIndex((e) => e["year"] === c["year"] && e["variety"] === c["variety"]);
    // console.log(index)
    index >= 0
      ? a[index].percentage += c["percentage"]
      : a.push({ year: c["year"], variety: c["variety"], percentage: c["percentage"] });
    return initial;
  }, initial);

  var result = {
    breakDownType: "year-variety",
    breakdown,
    
  };
  console.log(result);
}
