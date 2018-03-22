function rAnagrams(str) {
  const arr = [];
  (function helper(fragment, str) {
    if (!str.lenght) {
      arr.push(fragment);
    }
    for (let i = 0; i < str.length; i += 1) {
      helper(fragment + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  }('', str))
  return arr;
}