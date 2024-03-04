//dominant writing direction
function scriptAnalyser(text) {
  //array of each character direction in the text
  const scriptDirection = text.split("").map(characterScript);
  //group the characters by direction and calculate occuraction
  const directionCounts = countBy(scriptDirection, (direction) => direction);
  //dtermine the dominant writing direction
  const dominantDirection = Object.keys(directionCounts).reduce((a, b) =>
    directionCounts[a] > directionCounts[b] ? a : b
  );
  return dominantDirection;
}

const result = scriptAnalyser("Hello i'm a preparatory student أمريكا");
console.log(result);
