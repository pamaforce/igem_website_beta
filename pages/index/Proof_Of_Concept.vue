<template>
  <section>
    <div class="slash">
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
      <div class="slash2">
        <img src="~static/img/T--USTC-Software--slash2.png" class="picture" />
      </div>
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
      <div class="slash2">
        <img src="~static/img/T--USTC-Software--slash2.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Proof of Concept</h1>

        <div class="text">The project is supported by a number of papers:</div>
        <h3 id="firsth3">
          <a id="JPred" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Prediction of Secondary Structure(JPred4):
        </h3>
        <img class="jpredpng" src="~static/img/T--USTC-Software--P0.png" />
        <div class="text">
          On the blind test, the average secondary structure prediction Q3 score
          increased to 82.0% from 81.5% for JNet v.2.0, and solvent
          accessibility prediction accuracy rose to 90.0, 83.6 and 78.1% from
          88.9, 82.4 and 77.8% for JNet v.2.0 for each of &gt;0, &gt;5 and
          &gt;25% relative solvent accessibility thresholds<sup>[1]</sup>.
        </div>
        <h3>
          <a id="IPC" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Prediction of Isoelectric Point(IPC2.0):
        </h3>
        <img src="~static/img/T--USTC-Software--P1.png" />
        <div class="text">
          The current pKa prediction methods are: MCCE, H++ and pKa Rosetta in
          three ways, the algorithm used in IPC2.0 achieved the minimum value in
          RMSE (root mean square error), MAE (mean absolute
          error)<sup>[2]</sup>.
        </div>
        <h3>
          <a id="DeepTMHMM" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Prediction of Transmembrane Topology (DeepTMHMM):
        </h3>
        <div class="text">
          TMHMM predicts transmembrane helices from single sequences with a high
          level of accuracy. Only about 2.5% of the 696 helices in the data set
          of 160 proteins are missed, and about an equal number of false helices
          are predicted. About 77–78% of the topologies are predicted correctly,
          and an additional 7 % were correct except that the topology was
          inverted, i.e. the cytoplasmic side was predicted as periplasmic and
          vice versa. On the testing data, TMHMM’s cross-validated accuracy is
          79%, while non-cross-validated TMHMM reaches 84%
          accuracy<sup>[3]</sup>.
        </div>
        <h3>
          <a id="Cell-PLoc" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Subcellular Locations (Cell-PLoc2.0):
        </h3>
        <img src="~static/img/T--USTC-Software--P2.png" />
        <div class="text">
          After redeveloping the algorithm, the overall prediction accuracy of
          Cell-PLoc2.0 has been greatly improved, as shown in the above
          figure<sup>[4]</sup>.
        </div>
        <div class="text">
          <div class="texttitle">Comparison</div>
          <div class="texttitle">1. Gram-negative bacterial</div>
          PSORTb v.2.0 is a predictor is widely used by biologists for
          predicting the subcellular locations of Gram-negative bacterial
          proteins. A comparison of the prediction results between Gnegc-mPloc
          and PSORTb v.2.0 on the Online Support Information B test dataset is
          shown below.
        </div>
        <img src="~static/img/T--USTC-Software--P3.png" />
        <div class="text">
          <div class="texttitle">2. Plant</div>
          TargetP is widely used by biologists for predicting the subcellular
          locations of plant proteins. As reported, the overall success rates by
          Plant-mPLoc on a testing dataset that contains 1,775 plant proteins of
          which 1,500 are of chloroplast and 275 of mitochondrion was 86%, which
          is more than 40% higher than that by TargetP on the same testing
          dataset<sup>[5]</sup>.
        </div>
        <h3>
          <a id="Reference" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Reference
        </h3>
        <div class="text">
          [1]Alexey Drozdetskiy, Christian Cole, James Procter, Geoffrey J.
          Barton, JPred4: a protein secondary structure prediction server,
          Nucleic Acids Research, Volume 43, Issue W1, 1 July 2015, Pages
          W389–W394,
          <a href="https://doi.org/10.1093/nar/gkv332"
            >https://doi.org/10.1093/nar/gkv332</a
          >
        </div>
        <div class="text">
          [2]Lukasz Pawel Kozlowski, IPC 2.0: prediction of isoelectric point
          and pKa dissociation constants, Nucleic Acids Research, Volume 49,
          Issue W1, 2 July 2021, Pages W285–W292,
          <a href="https://doi.org/10.1093/nar/gkab295"
            >https://doi.org/10.1093/nar/gkab295</a
          >
        </div>
        <div class="text">
          [3]Chou, K. and Shen, H. (2010) Cell-PLoc 2.0: an improved package of
          web-servers for predicting subcellular localization of proteins in
          various organisms. Natural Science, 2, 1090-1103. doi:
          10.4236/ns.2010.210136.
        </div>
        <div class="text">
          [4]Anders Krogh, Björn Larsson, Gunnar von Heijne, Erik L.L
          Sonnhammer,Predicting transmembrane protein topology with a hidden
          markov model: application to complete genomes11Edited by F.
          Cohen,Journal of Molecular Biology,Volume 305, Issue
          3,2001,Pages567-580,ISSN0022-2836,
          <a href="https://doi.org/10.1006/jmbi.2000.4315"
            >https://doi.org/10.1006/jmbi.2000.4315</a
          >.
        </div>
        <div class="text">
          [5]Chou, K.C., Shen, H.B. (2010) Plant-mPLoc: A top- down strategy to
          augment the power for predicting plant protein subcellular
          localization. PLoS ONE, 5, e11335
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Proof_Of_Concept",
  }),
};
</script>

<style scoped>
.slash {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #fffcf3;
}
.slash2 {
  margin-bottom: -500px !important;
  margin-top: -500px !important;
}
.picture {
  width: 100%;
}

.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.board {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: #dcd8cb;
  background-color: #fffcf3;
  padding-bottom: 100px;
}
.all img {
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.jpredpng {
  width: 40% !important;
  min-height: 400px;
}
.board h1 {
  letter-spacing: 0.05em;
  font-size: 40px;
  font-family: Righteous !important;
  margin-top: 50px;
  margin-bottom: 30px !important;
  padding-bottom: 20px;
  font-weight: normal !important;
}
.board h3 {
  width: 80%;
  letter-spacing: 0.05em;
  font-size: 30px;
  font-family: Righteous !important;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: -54px;
  font-weight: normal;
}
#firsth3 {
  margin-top: 0px !important;
}
.board h3 img {
  margin-top: 12px;
  width: 50px;
  height: 50px;
  margin-right: -35px;
}
.texttitle {
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 20px;
  letter-spacing: 0.05em;
}
.text {
  width: 80%;
  font-size: 20px;
  font-family: Lexend;
  font-weight: 400;
  padding: 20px;
  padding-bottom: 0px;
  display: block;
  line-height: 1.5;
  text-align: justify;
}
.anchor {
  position: relative;
  top: -150px;
}
</style>