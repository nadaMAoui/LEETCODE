// this function calculates correlation  of 2x2 array
function Phi(tab) {
  return (
    (tab[3] * tab[0] - tab[1] * tab[2]) /
    Math.sqrt(
      (tab[2] + tab[3]) *
        (tab[0] + tab[1]) *
        (tab[3] + tab[1]) *
        (tab[0] + tab[2])
    )
  );
}
console.log(Phi());
//extract a two-by-two table for a specific event from the journal
function correlation(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    // create simple binary representation
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
