<template>
  <section>
    <div class="slash">
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Safety</h1>
        <a id="Safety" class="anchor"></a>
        <div class="text">
          CAT is a highly integrated and friendly platform for beginners of
          machine learning, specially designed for synthetic biologists. It
          integrates several models that use machine learning to predict some
          properties of proteins, so that users can get them only on one
          platform, which greatly improves the retrieval efficiency. At the same
          time, it also provides some introduction of synthetic biology and
          machine learning models in the educational version, which is easy to
          understand for beginners to learn better.
        </div>
        <h3>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Q1: Does It Have Any Risks in Laboratory?
        </h3>
        <div class="text">
          The CAT platform runs only on a computer and predicts the properties
          of proteins for synthetic biologists and does not require experiments
          in the laboratory, so there is no laboratory risk.
        </div>
        <h3>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Q2: Is CAT harmful to the user's personal computer?
        </h3>
        <div class="text">
          CAT is safe for the user's personal computer. Users only need to
          upload the necessary protein sequence and our server will send the
          results. All will run on our server and will not endanger the user's
          computer.
        </div>
        <h3>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Q4: Will our project infringe on software copyright?
        </h3>
        <div class="text">
          The packages we use are all open source and we have emailed the
          developers of the packages to get the permission to use them, so there
          is no question of copyright infringement.
        </div>
        <h3>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Q5: Will CAT harm the humanity or the environment?
        </h3>
        <div class="text">
          As a software platform, it is not harmful to human beings or the
          environment. In addition, our team complies with local epidemic
          prevention policies when conducting practical research and does not
          pose a risk to others or the environment.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Safety",
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