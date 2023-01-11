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
        <h1 class="title">Engineering Success</h1>
        <h3>
          <a id="Overview" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Overview
        </h3>
        <img
          id="firstpng"
          src="~static/img/T--USTC-Software--Engineering1.png"
        />
        <div class="text">
          With 13 talented students from different departments, our teams is
          full of variety of abilities, possibilities and sparks of thought.
          Given the size of our team, we draw on the overall development mindset
          of agile development. In software development, agile (sometimes
          written Agile) is a set of practices intended to improve the
          effectiveness of software development professionals, teams, and
          organizations. It involves discovering requirements and developing
          solutions through the collaborative effort of self-organizing and
          cross-functional teams and their customer(s)/end user(s). So we take
          iterative development.
        </div>

        <h3>
          <a id="Investigation" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Investigation and Research
        </h3>
        <div class="text">
          After reading a lot of papers related to synthetic biology, we found
          that traditional synthetic biology often relies on a large number of
          repetitive experiments to obtain results, and the failure of the
          experiments often means the passage of time and the stagnation of
          project progress. With the rapid development of data science,
          researchers can use machine learning or deep learning to find patterns
          or discover new phenomena in huge amounts of data. A presentation on
          the application of machine learning in materials science during the
          research gave us the idea of conducting a project about machine
          learning.
        </div>

        <h3>
          <a id="Reorientation" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Project Reorientation
        </h3>
        <div class="text">
          As the project progressed, we found that there were many fields with
          similar requirements. We thought that if we developed a model with our
          own knowledge and technology, it might only help a small number of
          researchers and iGEMers, so we conducted another research effort and
          found that there are some mature machine learning models and results
          in certain biological fields. Thus, we talked with our teachers again
          and decided to build a tool that provides various biology-related
          machine learning models.
        </div>
        <img src="" />

        <h3>
          <a id="Educational" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Birth of Educational Version
        </h3>
        <div class="text">
          After our platform was built to provide some tools to predict four
          properties of proteins, we introduced out platform to teachers and
          students in related labs at school, in addition to some iGEMers.
          During this period, we tried to do some science popularization, and at
          the same time we found that education has an extremely important role
          in synthetic biology development, so we had the idea to make an
          educational version. The purpose of the educational version is to
          introduce the basics of synthetic biology to students who do not know
          about synthetic biology, and to introduce the basics of machine
          learning to some biology researchers who want to combine machine
          learning with synthetic biology.
        </div>
        <img src="" />

        <h3>
          <a id="Hot-plug" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Hot-plug Extensible Module
        </h3>
        <div class="text">
          During CCiC, the Conference of China iGEMer Community, we start a
          collaboration with team SJTU-Software from Shanghai Jiao Tong
          University. We needed to introduce their model of predicting RNA
          secondary structure in our project. To facilitate the addition of
          models, we designed the hot extension model, which is for more modules
          to be directly inserted into our service. Our background structure was
          born with hot-plug features. To be specific, each of scripts from
          contributors are packed into different python modules. And each module
          should export a class with the same name of module. This makes it
          possible to conveniently add more models to the platform.
        </div>
        <h3>
          <a id="Improvement" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Improvement
        </h3>
        <div class="text">
          After CAT was basically completed, we printed brochures about our
          project and related knowledge. The main content is as follows:
        </div>
        <img
          id="secondpng"
          src="~static/img/T--USTC-Software--Engineering3.png"
        />

        <h3>
          <a id="Effectiveness" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Project Effectiveness
        </h3>
        <div class="text">
          We introduced the platform after the iterations to teachers and
          students in school labs and got a lot of positive feedback. We used
          the educational version to popularize science to students of all ages,
          and they were almost interested about this, which made us have a great
          day. We are very glad that we chose the iterative mode for
          development. We also got a lot of valuable suggestions during the
          Human Practices process, and we will make this project better in the
          future.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Engineering",
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
#firstpng {
  min-height: 100px;
}
#secondpng {
  min-height: 100px;
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