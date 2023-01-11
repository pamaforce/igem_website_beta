<template>
  <section>
    <div class="slash">
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
      <div class="slash2">
        <img src="~static/img/T--USTC-Software--slash2.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Implementation</h1>
        <h3>
          <a id="Goals" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Goals
        </h3>
        <div class="text">
          Implement <b>an integrated and easy-to-use tool platform</b> to help
          researchers shorten their experimentation and advance their projects.
        </div>
        <div class="text">
          Design <b>a friendly learning platform</b> for beginners in machine
          learning to help interested researchers or students learn about basic
          knowledge about machine learning.
        </div>
        <img src="" />
        <img src="" />

        <h3>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Efforts
        </h3>

        <div class="text">
          <div class="texttitle">A convenient tool</div>
          We have conducted extensive paper research to learn about the current
          development of machine learning in synthetic biology, and have trialed
          some publicly available machine learning models in person. In addition
          to this, we also tried to get in touch with the developers of some
          models and tried our best to investigate the principles of these
          models in order to expect accurate results to the users give the users
          accurate results.
        </div>
        <a id="Efforts" class="anchor"></a>
        <div class="text">
          We talked with some teachers and students in our school lab to make
          sure our tool provide the functionality they expect, and also to know
          how they wanted to interact (with our platform) in order to improve
          our tool to be more user-friendly.
        </div>
        <div class="text">
          In the end, we selected machine learning models that provided four
          properties, subcellular localization, transmembrane topology,
          secondary structure, and isoelectric sites. We knew that providing
          just these few models would not satisfy the needs of all researchers,
          so we designed the hot-plug extensible module to facilitate the
          addition of more models in the future, which will help more
          researchers and iGEMers.
        </div>

        <div class="text">
          <div class="texttitle">A learning platform</div>
          We believe that researchers can't solve the problem very well just by
          relying on other people's tools, and knowing basic knowledge of
          machine learning will help researchers to choose a model more suitable
          for their needs.
        </div>
        <div class="text">
          We went through a lot of introductory materials on machine learning,
          combined some team members' learning experience about machine
          learning, and finally we chose some very simple examples to explain
          the basic principles of machine learning and to avoid confusing
          beginners. Besides, we also asked teachers for effective ways to
          deliver knowledge, such as setting up appropriate exercises after
          learning.
        </div>
        <div class="text">
          When we used this platform for science activities, we also received
          feedback from some users. Based on those feedback suggestions. Thus,
          we modified some layout and improved the interaction. We believe these
          improvements will make our platform more effective.
        </div>
        <img src="" />

        <h3>
          <a id="Future" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Future
        </h3>
        <div class="text">
          In order to bring CAT to more people, we are trying to put CAT on
          larger related platforms or collaborate with other platforms. We know
          that CAT has a lot of room for improvement, so we will use our
          hot-plug extensible module to absorb more models to help more
          researchers and iGEMers. We will also consider adding scientific and
          educational knowledge suitable for a wider audience. After all, it’s a
          saying that wisdom in the mind is better than money in the hand.
        </div>
        <img src="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Implementation",
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
.texttitle {
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
  letter-spacing: 0.05em;
  font-family: Righteous !important;
}
.anchor {
  position: relative;
  top: -150px;
}
</style>