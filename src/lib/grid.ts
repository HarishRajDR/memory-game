function shuffle(h: number[]) {
  var tmp,
    current,
    top = h.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = h[current];
      h[current] = h[top];
      h[top] = tmp;
    }
  return h;
}

export const gridGenerate = () => {
  var a = [];
  var b = new Array(12).fill(0);
  for (var i = 0; i < 6; ++i) a[i] = i;
  a = shuffle(a);
  b = a.concat(a);
  return b;
};
