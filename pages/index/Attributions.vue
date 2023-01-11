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
        <h1 class="title">Attributions</h1>
        <h3>
          <a id="Models" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Models
        </h3>
        <img
          class="Modelpng"
          src="~static/img/T--USTC-Software--Attributions1.png"
        />

        <h3>
          <a id="Everyone" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Everyone in the USTC-Software
        </h3>
        <div class="text">
          <div class="texttitle">Skillful Front-ends and Back-ends:</div>
          <b>Haoyuan Wang</b> and <b>Longbang Liu</b>, who devoted to integrate
          the software programming with biology by coding pieces of logic to
          lines of lyric. <b>Xuanchao Peng</b>, who managed to program the
          terrific professional and educational websites by realizing the
          imaginative design into the vivid, graceful user interfaces.
        </div>
        <div class="text">
          <div class="texttitle">Diligent and imaginative biology group:</div>
          <b>Runhao Zhang</b> and <b>Jiawang Guan</b>, who excavated biological
          information from piles of papers and websites by applying their
          knowledge and diligence to the filtration of essence.
        </div>
        <div class="text">
          <div class="texttitle">Creative and expert Art group:</div>
          <b>Yiwen Chen</b> and <b>Xingyue Yang</b> who created excellent
          artworks by exerting their great talents into the process of
          depiction. To be honest, they enchant our pages with soul and spirits.
        </div>
        <div class="text">
          <div class="texttitle">
            Excellent management and project planning:
          </div>
          <b>Shuyuan Shen</b> who undertaken all the burden of team and finance
          management by scheduling pieces of critical parts into the course of
          iGEM. Only with our responsible leader can we cover the intensive
          preparation.
        </div>
        <div class="text">
          Everyone is indispensable, and therefore the CAT develops.
        </div>

        <h3>
          <a id="PI" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          PI
        </h3>
        <div class="text">
          <b>Dr. Jiong Hong</b>, who gave us a basic idea, helped us determine
          the topic of our project, and always reminded us patiently of our
          arrangements.<br />
          <b>Prof. Haiyan Liu</b>, who gave us lots of valuable advice in
          systematic biology and helped us make improvements during our working
          process.
        </div>
        <h3>
          <a id="Instructor" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Instructor
        </h3>
        <div class="text">
          <b>Junxi Yi</b>, who helped investigate the biological background and
          applications of the project.<br />
          <b>Yaozhong Cao</b>, the leader of team USTC, who offered us lots of
          advises.
        </div>
        <h3>
          <a id="Support" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Support
        </h3>
        <div class="text">
          <b>The Western Library of USTC</b>, who gives us one year’s access to
          Room 214, where we get accomplished most of our work.<br />
          <b
            >The University of Science and Technology of China Initiative
            Foundation</b
          >, which had been giving us sponsorship and firm support all these
          years.<br />
          <b>The School of Life Sciences</b>, USTC, for their academic support
          and inspiring advice on our project.<br />
          <b
            >The University of Science and Technology of China Education
            Foundation</b
          >, for their selfless financial help.
        </div>
        <h3>
          <a id="Cooperation" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Cooperation
        </h3>
        <div class="text">
          <b>Team USTC</b>, University of Science and Technology of China.<br />
          <b>Team SJTU-Software</b>, Shanghai Jiao Tong University
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Attributions",
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
.Modelpng {
  min-height: 400px;
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