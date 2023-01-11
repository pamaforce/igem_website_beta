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
        <h1 class="title">Human Practices</h1>
        <h3>
          <a id="Conference" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Conference: iGEM introduction
        </h3>
        <div class="text">
          At the beginning of our project, the core members of USTC-Software
          conducted a meeting of iGEM introduction. During the meeting, the team
          leader Shuyuan Shen introduced the targets and requirements of the
          iGEM competition. Then the frontend and backend leader, Xuanchao Peng,
          Haoyuan Wang and Longbang Liu, introduced the skills needed and the
          reference material to learn. Given the large scale of our team, tasks
          need to be scheduled and distributed properly to ensure the efficiency
          of the development of our project.
        </div>
        <img
          id="firstpng"
          src="~static/img/T--USTC-Software--allconference.png"
        />

        <h3>
          <a id="Discussion" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Discussion with bioinformatic researcher
        </h3>
        <div class="text">
          In order to decide on the topic of our project, we reviewed the
          projects of the outstanding iGEM teams in previous years, and we found
          that the first thing we should do is to visit bio informatic
          researcher. So we contacted Junxi Yi from the
          <a href="http://biocomp.ustc.edu.cn/">Biocomp Lab</a> in our school
          and got a better understanding of synthetic biology. <br /><br />
          During the conversation, we learned that the traditional synthetic
          biology suffers from repetitive trail and errors, and they need
          predictors to help them determine some features of proteins in
          advance. So we suppose that machine learning may help with the
          prediction process, but we are in lack of academic achievement of
          machine learning on biology information.
        </div>
        <div class="text">
          With the help of Junxi Yi, we contacted Professor Liu Haiyan,
          Principal Investigator of Biocamp, and arranged a meeting with him.
        </div>

        <h3>
          <a id="Meeting" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Meeting with Professor Liu
        </h3>
        <div class="text">
          After the preliminary information collection, we met with professor
          Haiyan Liu in School of Life Sciences, USTC. Professor Liu introduced
          their research on computational tools for biomolecules and the current
          progress of their development. When mentioned machine learning, he
          offered us possible directions of our work and the possible issues we
          may be trapped during our development, and then gave us several
          examples on the machine learning model of other research group.
          <br /><br />
          During the conversation, we realized that it may be not a wise choice
          for us to implement another model to predict protein properties.
          First, the difficulty of getting reliable databases is huge, and we
          are not the experts at model training. Second, the training process is
          some kinds of brute force, precise models often come with those
          clusters of computation nodes. However, we found that most of the
          models does not provide a pretty, modern frontend, and what's more,
          they are not integrated enough to allow researchers to experience at
          one place. Then the imagination of integrated site for those machine
          learning came up in our mind. Finally, after the discussion with
          professor Liu, we set the direction of software developing to the
          integrated web application.
        </div>
        <img src="~static/img/T--USTC-Software--Meetinglhy.jpg" />

        <h3>
          <a id="CCiC" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          CCiC Online and Collaboration with SJTU-Software
        </h3>
        <div class="text">
          At the end of August, we attended the Conference of China iGEMer
          Community (CCiC), the largest synthetic biology conference in China.
          In the online meeting, we introduced our project CAT, the Convenient
          and Accurate Tool, to the other teams in this conference, which was
          highly evaluated by many experts and researchers in the field of
          synthetic biology. During the conference, we listened to reports and
          advices from each team to further improve and enrich our CAT.
        </div>
        <div class="text">
          Furthermore, we successfully form a partnership with the
          <a href="">SJTU-Software</a>, the software team devoted themselves to
          training of machine learning model. After a deep conversation, we
          exchanged our ideas on machine learning service and they will provide
          an API for our website.
        </div>
        <div class="twopng">
          <img src="~static/img/T--USTC-Software--CCiC.jpg" />
          <img src="~static/img/T--USTC-Software--poster.jpg" />
        </div>

        <h3>
          <a id="Brochures" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Hand Out of Brochures
        </h3>
        <img src="~static/img/T--USTC-Software--handout.jpg" />
        <div class="text">
          After CAT was basically completed, we designed brochures about our
          project and related knowledge. By comparing the two methods of protein
          prediction - traditional biological methods and machine learning
          methods, the brochure provides a comprehensive overview of how CAT
          works and the merits and demerits of machine learning on protein
          prediction. By distributing the brochures in science and technology
          museums, middle schools, high schools, and in USTC campus, we spread
          the basic knowledge of protein prediction and machine learning to
          students at all levels as well as many adults, and received many
          positive feedbacks.
        </div>
        <div class="text">
          "This brochure showed me a lot of novel knowledge about synthetic
          biology and the iGEM competition, and I hope to do in-depth studies
          about biology and machine learning in the future." <br />
          <div align="right">-- From A high school student</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Human_Practices",
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
#firstpng {
  min-height: 200px;
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
.twopng {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.twopng img {
  width: 45%;
}
.anchor {
  position: relative;
  top: -150px;
}
</style>