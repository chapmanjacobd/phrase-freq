#!/usr/bin/env ts-node
import * as getStdin from "get-stdin";
import { findPlaceNames, wordFreq } from "./lib/functions";

(async () => {
  let text = await getStdin();

  console.log(
    wordFreq(findPlaceNames(text))
      //   .filter((x) => x.count > 0)
      //   .filter((x, i) => i < 100)
      .map((x) => `${x.count}\t\t${x.key}`)
      .join("\n")
  );
})();
