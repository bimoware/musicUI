
// console.log(groups);

groups = groups.map(grp => grp.map((row) => {
  return {
    who: Number(row[0]),
    id: Number(row[1]),
    time: row[2],
    text: row[3],
  };
})).flat(2)


console.log(groups)
groups = groups.map((t, i) => {
  let lastT = groups.find((p) => p.who === t.who && p.id === t.id - 1);
  return {
    ...t,
    msAfterPrevious: t.time - (lastT?.time || 0),
  };
});

 /* {} */
document.getElementById("audioelem").onplay = function () {
  for (let lyric of groups) {
    setTimeout(() => {
      document.getElementById("prsn" + lyric.who).innerText = lyric.text;
    }, lyric.time);
  }
};
