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
