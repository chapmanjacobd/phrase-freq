# phrase-freq
Simple ASCII Phrase Detector

## Examples

```sh
𝄞 bat ~/Documents/research_hn_moviestowatch.txt | ./phrase-freq.ts | head -50
13              Fight Club
7               I
6               Grave
5               America
5               Fireflies
5               Kurosawa
5               Wall-E
4               Matrix
4               Men
4               Koyaanisqatsi
3               Parasite
2               Tyler Durden
2               Durden
2               Palahniuk
2               Sounds
2               Raymond K
2               Hessel
2               Mind
2               Adam Curtis
2               Margin Call
2               Wally
2               Spirited Away
```

```fish
🌥 bat ~/placedata -ascii/wikivoyage/88\ Temple\ Pilgrimage.txt | ./phrase-freq.ts | head -50
9               Shikoku
4               Mount Koya
4               Kokubunji
3               Kobo Daishi
3               Ryozenji
3               Dainichiji
2               Xun
2               Pilgrims
2               Kochi
2               Arrows
2               Kan'onji
2               Anan Tokushima
2               Zentsuji
1               Temple Pilgrimage  The 88
1               Temple Pilgrimage
1               Kukai
1               Esoteric Buddhism
1               Japanese Shingon
```

You should probably use something else for non-ASCII languages :/
