const IsogramFinder = function (word) {
  // this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.word = word.toLowerCase().split('')
}

IsogramFinder.prototype.isIsogram = function () {

  const unresult = [...new Set(this.word)]

  return unresult.length >= this.word.length
  // return unresult
}




module.exports = IsogramFinder;
