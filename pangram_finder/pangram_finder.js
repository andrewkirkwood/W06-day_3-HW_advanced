const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().replace(/[^0-9a-z]/gi, ' ');

}

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((letter) => {
    return this.phrase.includes(letter)
  })
  return result
}

module.exports = PangramFinder;
