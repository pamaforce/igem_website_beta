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
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Collaborations</h1>
        <h3>
          <a id="SJTU" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          SJTU
        </h3>
        <div class="text">
          During CCiC, we had a lot of interactions with other iGemers in China,
          especially SJTU-Software from Shanghai Jiaotong University. Through
          the in-depth exchanges with SJTU-Software, we learned that the core of
          their project is probe design and RNA secondary structure prediction.
          Our platform is a collection of models or websites that perform
          protein sequence prediction, and among the models we collected, we
          also have protein secondary structure prediction. So we realized that
          we could collaborate on this one the part of RNA secondary structure
          prediction.
        </div>
        <img src="~static/img/T--USTC-Software--Logo.png" />
        <div class="text">
          Thus, we started our collaboration. We added an RNA platform into our
          website and SJTU-Software provided their trained models which predicts
          the secondary structure of RNA sequences.
        </div>
        <img src="~static/img/T--USTC-Software--RNA.png" />
        <div class="text">
          We have had several zoom meetings with SJTU-Software, and members of
          both parties often communicate in online chat group about models, web
          page presentation, user requirements, etc. The addition of
          SJTU-Software's models makes the platform more comprehensive in its
          functionality.
        </div>
        <img src="~static/img/T--USTC-Software--SJTU1.jpg" />
        <img src="~static/img/T--USTC-Software--SJTU2.jpg" />
        <h3>
          <a id="USTC" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          USTC
        </h3>
        <div class="text">
          We are closely associated with USTC, which is our school's wet team.
          USTC focuses on biology, so most of their members are biology majors.
          We have had a lot of meaningful communication throughout the
          project.<br />
        </div>
        <img src="~static/img/T--USTC-Software--USTC5.jpg" /><br />

        <div class="text">
          Initially, members of USTC-Software came up with ideas for a topic and
          set a general direction, which we then discussed with the wet team.
          Our initial idea was to develop a search engine for searching the
          appropriate protein backbone. Discussions with them allowed us to
          further clarify the feasibility and significance of the idea and to
          understand the needs of biologists.<br />
        </div>
        <img src="~static/img/T--USTC-Software--USTC7.jpg" /><br />
        <div class="text">
          After the discussion, we made appropriate adjustments to our
          direction. the USTC team members also made suggestions to us,
          suggesting that we add something of universal value to our project.
          Something that is not only for developers, but also for the general
          public. We got the idea to develop an educational version for primary
          and secondary school students.<br />
        </div>
        <img src="~static/img/T--USTC-Software--USTC3.jpg" /><br />
        <div class="text">
          Since the beginning of the project, we have had a lot of communication
          both online and offline. They constantly gave us help, such as
          answering biology questions, suggesting suitable databases, helping us
          test the site and giving suggestions, such as interface optimization
          and adding web effects, and we also provided them with some technical
          help. Having a clear idea of how basic experiments are performed and
          what we can do to help synthetic biology researchers improve the
          effectiveness of their work through the process of doing biological
          experiments is of great importance to us in our development. Although
          most of our software team members were computer science majors, USTC
          helped us fill these gaps.
          <br />
        </div>
        <img src="~static/img/T--USTC-Software--USTC4.jpg" /><br />
        <div class="text">
          After building our project, we invited USTC to test our tools. The wet
          team used our website, made predictions, and compared our results with
          their known results. They gave us a lot of advice on how to upgrade
          our program. We sincerely appreciate their feedback.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Collaborations",
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