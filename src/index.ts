export default function splitn(str: string, delimiter: string | RegExp, limit = Infinity) {
  let curStr = str;
  const a = [];

  while (a.length < limit && curStr.length) {
    const next = curStr.split(delimiter, 1);
    a.push(next[0]);
    curStr = curStr.slice(next[0].length);
    if (a.length < limit && curStr) {
      curStr = curStr.replace(delimiter, '');
      if (!curStr) {
        a.push(curStr);
      }
    }
  }

  if (curStr && limit > 0) {
    a[a.length - 1] += curStr;
  }

  return a;
}
