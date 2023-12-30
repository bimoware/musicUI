let id = 0;

let prsn1 = [
  "0:33",
  "2:07",
  "2:38",
  "3:09",
  "3:56",
  "4:24",
  "4:52",
  "5:54",
  "6:34",
  "7:02",
  "7:30",
  "8:28",
  "8:55",
  "9:22",
  "10:01",
  "10:44",
  "12:15",
  "12:46",
  "13:17",
  "14:04",
  "14:32",
  "15:00",
  "15:50",
  "16:42",
  "17:10",
  "17:38",
].map((time, i) => `1|${++id}|${time}|Hey ${i + 1}`);

let prsn2 = [
  "0:00|Now you suck",
  "2:47|We wanna talk about sex but we're not allowed",
  "7:50|Well, we may not like it but you better learn how",
  "10:44|'Cause it's your turn now",
  "14:16|Boy, you're wasting your tongue with lame excuses and lies",
  "18:54|Now, what's on your nasty old mind?",
]
prsn2 = prsn2.map((e) => `2|${++id}|${e}`);

let prsn3 = [
  "20:42|So how should I begin this?",
  "22:50|I guess it started when you were with him",
  "25:37|And how he never even took you out to dance",
  "29:09|But did he fuck with any rhythm?",
  "32:04|But now he's playing with your head",
  "34:34|But did he ever make you cum?",
  "37:16|Did he ever make you cry?",
  "39:45|Do the wires in your mind get sewn together",
  "43:16|Rubbed and severed by the heat",
  "45:38|And you don't know how long I could stare into your picture",
  "50:03|And wish that it was me",
  "52:13|I guess it's different 'cause you love him",
  "55:00|But I've got an interactive",
  "57:12|Sick and twisted imagination",
  "59:57|And that's gotta count for something"
].map((e) => `3|${++id}|${e}`);

let profiles = [...prsn1, ...prsn2, ...prsn3];

profiles = profiles.map((t) => {
  let rows = t.split("|");
  return {
    who: Number(rows[0]),
    id: Number(rows[1]),
    time:
      Number(rows[2].split(":")[0]) * 1000 +
      (Number(rows[2].split(":")[1]) / 60) * 1000,
    text: rows[3],
  };
});

profiles = profiles.map((t, i) => {
  let lastT = profiles.find((p) => p.who === t.who && p.id === t.id - 1);
  return {
    ...t,
    msAfterPrevious: t.time - (lastT?.time || 0),
  };
});

console.log(profiles);

document.getElementById("audioelem").onplay = function () {
  for (let lyric of profiles) {
    setTimeout(() => {
      document.getElementById("prsn" + lyric.who).innerText = lyric.text;
    }, lyric.time);
  }
};
