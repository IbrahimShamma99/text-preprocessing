class Preprocessor {
  constructor(text) {
    this.text = text;
    this.breakText();
  }

  breakText = () => {
    const splittedArr = this.text.trim().split(" ");
    this.splittedArr = splittedArr;
    this.n_words = splittedArr.length;
    this.n_letters = this.text.length - splittedArr.length + 1;
  };
  toJSON = () => {
    return {
      splittedArr: this.splittedArr,
      n_words: this.n_words,
      n_letters: this.n_letters,
      text: this.text,
    };
  };
}

module.exports = Preprocessor;
