function swap(i, j, a) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function partition(a, lt, gt) {
  let p =  Math.floor((lt+gt)/2)
  swap(0,p,a)
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
  swap(0,gt,a)
  return gt;
}
function qs(a,s,e) {
  let k = 4
  s= s || 0
  e= e || a.length -1
  if(a.length <2) return a
  let p = partition(a,s,e)
  //  if(p === k) {
  //    return a[p]
  //  }
  //  if(p>k) {
  //    qs(a,s,p-1)
  //  }
  //  else if(p<k) {
  //    k = k-p
  //   qs(a,p+1,e)
  // }
  if(s < p-1)
    qs(a,s,p-1)
  if(e > p+1)
    qs(a,p+1,e)
  return a
}

console.log(qs([4,1,3,2,5,9,8,1,7,12,13]))
