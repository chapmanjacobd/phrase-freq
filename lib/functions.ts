import { countries, notPlaces, prepositions, stopWords } from "./words";

export function splitByPhrase(text: string) {
  const outputFreq = text
    .split(/(?= [a-z]|(?<!\b[A-Z][a-z]*) (?=[A-Z]))|\.|\,|\)|\:/)
    .map((x) =>
      x
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]\,\'\"\^’\(/g, "")
        .replace(/\n/g, " ")
        .replace(/'s/g, " ")
        .split("(")[0]
        .split(" -")[0]
        .trim()
    )
    .filter((x) => !stopWords.includes(x.toLowerCase()))
    .filter((x) => !prepositions.includes(x.toLowerCase()))
    .filter((x) => String(Number(x)) !== x)
    .filter(Boolean);

  return outputFreq;
}

export function findPlaceNames(text: string): string[] {
  return splitByPhrase(text)
    .filter((x) =>
      x.match(/[A-Z]+[a-z]+|(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?/)
    )
    .filter((x) => !x.includes("https:"))
    .map((x) => {
      prepositions.forEach((y) => {
        x = x.replace(RegExp(`^${toTitleCase(y)}`), "");
      });

      return x.trim();
    })
    .filter((x) => x.match(/^[A-Z]/))
    .filter((x) => ![...notPlaces, ...countries].includes(x))
    .filter(Boolean)
    .map((x) => x.trim())
    .filter(Boolean);
}

export function wordFreq(words: string[]) {
  var freqMap = {};
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  const o = Object.keys(freqMap).map((v) => ({ key: v, count: freqMap[v] }));

  return o.sort((a, b) => b.count - a.count);
}
