function swap(i, j, a) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function partition(a, lt, gt) {
  var p = Math.floor(Math.random() * (gt - lt + 1)) + lt;
  swap(0, p, a)
  while (lt <= gt) {
    while (a[lt] <= a[0]) {
      lt++;
    }
    while (a[gt] > a[0]) {
      gt--;
    }
    if (lt < gt) {
      swap(lt, gt, a);
      lt++;
      gt--;
    }
  }
  swap(0, gt, a)
  return gt;
}
function qs(a, s, e) {
  let k = 2
  s = s || 0
  e = e || a.length - 1
  while (s !== e) {
    let p = partition(a, s, e)
    if (k > p)
      s = p + 1
    else
      e = p
  }
  return a[k]
}

console.log(qs([1, 2, 3, 4, 5, 6]))
