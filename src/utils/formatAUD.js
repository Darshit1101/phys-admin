export function formatAUD(value) {
  const cleaned = String(value).replace(/[ ,]/g, "");
  let n = Number(cleaned);
  if (isNaN(n)) n = 0;
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(n);
}
