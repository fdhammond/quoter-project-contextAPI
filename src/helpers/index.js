export function obtainYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function obtainBrandValue(brand) {
  let add;

  switch (brand) {
    case '1':
        add = 1.30
      break;
    case '2':
        add = 1.15;
      break;
    case '3':
        add = 1.05;
      break;
    default:
      break;
  }

  return add;
}

export function calculatePlan(plan) {
  return plan === "1" ? 1.20 : 1.5;
}

export function formatCurrency(quantity) {
  return quantity.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}