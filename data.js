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
    // --
    "1:21:11|I dreamt I was standing in your doorstep",
    "1:23:33|Licking sweat off of your forehead",
    "1:26:38|With your finger in my mouth",
    "1:29:00|And the sound when leather jackets hit the ground",
    "1:32:47|You should hear when you're not around",
    "1:35:38|When it's just us horny poets",
    "1:37:49|Who can't wait to write it down",
    "1:40:18|Swear we were only being being honest",
    "1:43:18|Do you like these little sonnets?",
    "1:45:42|'Cause I wrote them just for you",
    "1:48:14|How quickly they turn sour",
    "1:50:51|So be careful who you screw",
    "1:54:18|And never call",
    "1:57:12|And I'm starting to suspect",
    "1:59:12|You don't intend to do anything you say at all",
  ].map((e) => `3|${e}`),
  [
    "2:22:42|All by yourself, sittin' alone",
    "2:25:19|I hope we're still friends, yeah, I hope you don't mind",
  ].map((e) => `2|${e}`),
].map((e) => e.map(fixRow));

groups.push([
  fixRow("1|1:02:27|Hey (0)"),
  ...copy(groups[0], "1:02:13"),
  ...copy(groups[0].slice(10, 14), "1:19:35"),
]);
groups.push(copy(groups[1].slice(1, -1), "63:49"));
groups.push(copy(groups[1].slice(1), "2:04:38"));

for (let i = 0; i < 7; i++) {
  groups.push(
    copy(
      groups[3],
      fromCapcutToMs("2:25:19") +
        (i+1) * (fromCapcutToMs("2:25:46") - fromCapcutToMs("2:22:39"))
    )
  );
}

function copy(section, start) {
  let new_section = JSON.parse(JSON.stringify(section)); // deep copy array
  return new_section.map((l) => {
    l[1] = ++id;
    l[2] = l[2] - section[0][2] + fromCapcutToMs(start);
    l[3] = l[3] + " (copy)";
    return l;
  });
}
function fromCapcutToMs(e) {
  if (typeof e === "number") return e;
  let capcutTime = e.split(":").map(Number);
  let ms = (capcutTime.pop() / 60) * 1000 || 0;
  let s = capcutTime.pop() * 1000 || 0;
  let m = capcutTime.pop() * 1000 * 60 || 0;
  return Math.trunc(m + s + ms);
}
function fixRow(e) {
  let row = e.split("|");
  return [Number(row[0]), ++id, fromCapcutToMs(row[1]), row[2]];
}
