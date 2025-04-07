const TAX_TABLE_2023 = [
  {min: 0, max: 18_200, base: 0, rate: 0},
  {min: 18_201, max: 37_000, base: 0, rate: 0.19},
  {min: 37_001, max: 90_000, base: 3572,rate: 0.325},
  {min: 90_001, max:180_000, base: 20797 ,rate: 0.37},
  {min: 180_001, max: Number.POSITIVE_INFINITY, base: 54096, rate: 0.45}
]

const calcuateTax = (income, taxTable) => {
  const { min, base, rate } = taxTable.find(taxRow => income <= taxRow.max && income > taxRow.min)
  return base + (income - min) * rate;
}

console.log(calcuateTax(200_000,TAX_TABLE_2023));