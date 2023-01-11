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
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Description</h1>
        <h3>
          <a id="Background" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Background
        </h3>
        <img src="~static/img/T--USTC-Software--AI.png" />
        <div class="text">
          Traditional synthetic biology often relies on a large number of
          repetitive experiments to obtain results. Such an approach always
          requires a lot of effort and high cost. With the rapid development of
          data science, researchers can use machine learning or deep learning to
          find patterns or discover new phenomena in huge amounts of data, which
          makes machine learning and deep learning extremely important in fields
          such as search and prediction.
        </div>
        <div class="text">
          In fact, synthetic biology has accumulated enough data over a long
          period of time. We’ve brought computer science into our synthetic
          biology experiments, which can be of great benefit to us, such as
          helping iGEMers design biological experiments, predicting biological
          properties, etc. There are already many successful attempts by a
          number of groups.
        </div>

        <h3>
          <a id="Inspiration" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Inspiration
        </h3>
        <img src="~static/img/T--USTC-Software--chem.png" />
        <div class="text">
          Synthetic biology is a multidisciplinary subject and our inspiration
          came from other disciplines as well. When we can't come up with a good
          idea, our university happened to host a presentation on the
          application of machine learning in materials science. Thanks to this
          presentation, we had the idea of combining synthetic biology and
          machine learning. Meanwhile, we had a in-depth conversation with Prof.
          Haiyan Liu and he gave us the idea of machine learning and thought our
          idea was promising and worthwhile. Thus, we set the direction of our
          project and put it into action.
        </div>
        <img src="" />

        <h3>
          <a id="Obstacle" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Obstacle
        </h3>
        <div class="text">
          In the earliest stages of the project, we wanted to design a novel
          machine learning model predicting properties that hasn’t been done
          before. But after a long period of researching, collecting data and
          talking to members of USTC and our faculty, we realized that the high
          cost and difficulty of the project would not allow us to complete it
          in a limited time. Therefore, We did further research and find that
          there is no highly integrated and novice-friendly platform for machine
          learning models that predict protein properties by its sequence.
          That's how we came up with the current project, CAT.
        </div>

        <h3>
          <a id="Cat" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          CAT
        </h3>
        <img class="catpng" src="~static/img/T--USTC-Software--cat_logo.png" />

        <div class="text">
          CAT is a user-friendly platform designed for people who would like to
          obtain knowledge of machine learning and predict protein properties.
          It greatly simplifies the time needed for retrieval by integrating
          machine learning prediction software such as Jpred4, IPC2.0,
          DeepTMHMM, Cell-PLoc 2.0 to predict protein secondary structure,
          isoelectric point, transmembrane topology, subcellular localization in
          one click. For beginners, we provided the demonstration videos in the
          <a href="/Demonstrate">demonstrate section</a>. For iGEMers or
          students who are interested in machine learning, we design an
          educational version to deliver knowledge machine learning and
          synthetic biology.
        </div>
        <img src="~static/img/T--USTC-Software--1.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Description",
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
.catpng {
  margin-top: -90px !important;
  margin-bottom: -50px !important;
  width: 30% !important;
}
.board h1 {
  letter-spacing: 0.05em;
  font-size: 40px;
  font-family: Righteous !important;
  margin-top: 50px;
  margin-bottom: 20px;
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
.board h3 img {
  margin-top: 12px;
  width: 50px;
  height: 50px;
  margin-right: -35px;
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