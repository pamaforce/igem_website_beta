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
        <h1 class="title">Partnership</h1>
        <h3>
          <a id="Overview" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Overview
        </h3>
        <img src="~static/img/T--USTC-Software--USTC4.jpg" />
        <div class="text">
          Over the past year, USTC-Software has maintained a close contact with
          USTC. We have generated a deep relationship over this year. Due to our
          location, we have been able to have good online and offline
          interaction, which makes our communication much more convenient.
        </div>
        <h3>
          <a id="Start" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Start
        </h3>
        <div class="text">
          Our team and USTC have always maintained a harmonious and cooperative
          relationship since before, and the two teams have communicated
          frequently on-line and off-line. Moreover, USTC and USTC-Software have
          also set up the Association of Coding Life in our school, dedicated to
          passing on iGem and synthetic biology to a wider audience.
        </div>
        <img src="~static/img/T--USTC-Software--flag.jpg" alt="" />
        <div class="text">
          Since the beginning of our project in June, two parties have been in
          close communication online and offline, and USTC has given us many
          suggestions and guidance in biology. During the filming of our
          promotion video, we also went to their laboratory for shooting, and
          one of their team members was featured in our promotion video.
        </div>
        <img src="~static/img/T--USTC-Software--USTC3.jpg" alt="" />
        <div class="text">
          From July to August, we encountered a huge bottleneck in our initial
          idea. USTC were very helpful in advising us from using the protein
          database to understanding of protein properties and implementing of
          this idea. Thanks to their advice, we realized the infeasibility of
          the project and changed the topic immediately. In terms of software,
          when they encountered bottlenecks, we lent a hand to help them solve
          software problems. For example, the calculation speed of modeling
          software, and the beautification on page presentation.
        </div>
        <img src="~static/img/T--USTC-Software--USTC6.jpg" alt="" />
        <div class="text">
          At the late stage of the project, we hold joint group meetings
          frequently to discuss the progress of the project and the possibility
          of optimization. During this period, our project has reached the
          testing stage, where USTC also provided comments on our project from
          the perspective of users and students, and provided many proteins for
          testing.
        </div>
        <h3>
          <a id="Event" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Event
        </h3>
        <div class="text">
          USTC and USTC-Software manage jointly the Society of Coding Life .
          This year both of us have launched iGEM promotional activities in the
          Hefei Science and Technology Museum in succession. USTC showed
          experiments, and USTC-Software delivered knowledges of computer
          science applying to synthetic biology field. We hope that the Society
          of Coding Life can Make Contribution to the field of synthetic
          biology.
        </div>
        <img src="~static/img/T--USTC-Software--USTCTeamM.jpg" alt="" />
        <img src="~static/img/T--USTC-Software--TeamMusuem.jpg" alt="" />
        <div class="text">
          Click the link below to visit their Wiki. <br />
          <a href="https://2021.igem.org/Team:USTC/Partnership" target="_blank">
            https://2021.igem.org/Team:USTC/Partnership
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Partnership",
  }),
};
</script>

<style scoped>
body {
  background-color: #fffcf3;
}
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