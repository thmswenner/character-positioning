function countLetters (str) {
  var letterCounting = {};
  str = str.split(' ').join('')
  for (var i = 0; i < str.length; i++ ) {
    if (!letterCounting[str[i]]) {
      letterCounting[str[i]] = [i];
    } else {
      letterCounting[str[i]].push(i);
    }
  }
    return letterCounting
}


console.log(countLetters("lighthouse in the house"));
