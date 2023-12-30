let id = 0;
let groups = [
  [
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
  ].map((e, i) => `1|${e}|Hey ${i + 1}`),
  [
    "0:00|Now you suck",
    "2:47|We wanna talk about sex but we're not allowed",
    "7:50|Well, we may not like it but you better learn how",
    "10:44|'Cause it's your turn now",
    "14:16|Boy, you're wasting your tongue with lame excuses and lies",
    "18:54|Now, what's on your nasty old mind?",
  ].map((e) => `2|${e}`),
  [
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
    "59:57|And that's gotta count for something",
  ].map((e) => `3|${e}`),
].map((e) =>
  e.map((e) => {
    let row = e.split("|");
    return [Number(row[0]), ++id, fromCapcutToMs(row[1]), row[2]];
  })
);


groups.push(copy(groups[0], "61:23"))
// groups.push(copy(groups[1].slice(1, -1), "63:49"));

function copy(section, start) {
  let new_section = JSON.parse(JSON.stringify(section)); // deep copy array
  return new_section.map((l) => {
    l[1] = ++id;
    l[2] = l[2] - section[0][2] + fromCapcutToMs(start);
    l[3] = l[3] + " (repeat)";
    return l;
  });
}
function fromCapcutToMs(e) {
  let [s, capcutms] = e.split(":").map(Number);
  return Math.trunc(s * 1000 + (capcutms / 60) * 1000);
}
