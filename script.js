let id = 0;

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
 /* {} */
document.getElementById("audioelem").onplay = function () {
  for (let lyric of profiles) {
    setTimeout(() => {
      document.getElementById("prsn" + lyric.who).innerText = lyric.text;
    }, lyric.time);
  }
};
