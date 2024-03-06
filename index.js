// EXAMPLE 1 - Get Country name from Country code using JavaScript

const regionNames = new Intl.DisplayNames(['en'], {
  type: 'region',
});

console.log(regionNames.of('US')); // 👉️ "United States"
console.log(regionNames.of('GB')); // 👉️ "United kingdom"
console.log(regionNames.of('DE')); // 👉️ "Germany"
console.log(regionNames.of('AU')); // 👉️ "Australia"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting Country names in a different language

// const regionNames = new Intl.DisplayNames(['de'], {
//   type: 'region',
// });

// console.log(regionNames.of('US')); // 👉️ "Vereinigte Staaten"
// console.log(regionNames.of('DE')); // 👉️ "Deutschland"
// console.log(regionNames.of('KR')); // 👉️ "Südkorea"
// console.log(regionNames.of('CA')); // 👉️ "Kanada"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get a language name from a language code

// const regionNames = new Intl.DisplayNames(['en'], {
//   type: 'language',
// });

// console.log(regionNames.of('en-US')); // 👉️ "American English"
// console.log(regionNames.of('en-GB')); // 👉️ "British English"
// console.log(regionNames.of('de-DE')); // 👉️ "German (Germany)"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a currency code to the currency's display name

// const regionNames = new Intl.DisplayNames(['en'], {
//   type: 'currency',
// });

// console.log(regionNames.of('USD')); // 👉️ "US Dollar"
// console.log(regionNames.of('EUR')); // 👉️ "Euro"
// console.log(regionNames.of('JPY')); // 👉️ "Japanese Yen"
