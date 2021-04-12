let similarity = require("./Similarity");
let similarityScore = require("./SimilarityScore");

const abstractSim = (s1, s2) => {
  let winkOpts = {
    f: similarityScore.winklerMetaphone,
    options: { threshold: 0 },
  };
  return similarity(s1, s2, winkOpts);
};

module.exports = abstractSim;
