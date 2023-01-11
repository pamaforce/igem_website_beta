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
      <div class="slash2">
        <img src="~static/img/T--USTC-Software--slash2.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Education</h1>
        <h3>
          <a id="Overview" class="anchor"></a>
          Overview
        </h3>
        <img
          class="Overviewpng"
          src="~static/img/T--USTC-Software--EduOverview.png"
        />
        <div class="text">
          Genius without education is like silver in the mine. We have always
          believed that an important purpose of iGEM is to inform and educate
          the public. We believe that even a usual presentation or explanation
          can influence the future of an important scientist or other important
          person. From beginning to end, we attach great importance to the
          educational nature of our platform, and we have made great efforts to
          achieve our stated goals.
        </div>

        <h3>
          <a id="Educational-Version" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Birth of the educational version
        </h3>
        <img src="~static/img/T--USTC-Software--mainwebpage.png" />
        <img src="" />
        <div class="text">
          Our initial target users were only synthetic biologists. But later on
          we realized that machine learning and synthetic biology didn't seem to
          be that widely understood in later communication with the public.
          Therefore, we had the idea to create two versions (educational and
          professional) and put them into practice, and we continued to optimize
          the pages and model explanations in the later human practice, in order
          to be able to better fulfill its educational function.
        </div>

        <h3>
          <a id="Brochure" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          The Brochure
        </h3>
        <img src="~static/img/T--USTC-Software--Brochure.jpg" />
        <div class="text">
          Protein properties and machine learning are very profound in the eyes
          of the public without biological background. Therefore, we have
          designed a set of brochures to provide a complete overview of
          synthetic biology and machine learning in a vivid and interesting way.
          Compared with the boring explanations in other books, the whole set of
          brochures is lively and light-hearted, with easy-to-understand
          explanation, avoiding complicated and advanced terms as much as
          possible; and we also use cartoon images to visualize the models,
          which makes the descriptions more graphic and more acceptable.
        </div>
        <img src="" />

        <h3>
          <a id="Lectures" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Science lectures
        </h3>
        <img
          id="sciencepng"
          src="~static/img/T--USTC-Software--3Lectures.png"
        />
        <div class="text">
          The content of the science lectures has been described in detail in
          the communication section. Every lecture, we are moved by people's
          thirst for knowledge. We are all surprised and gratified by every
          question raised by the children. When we accept people's applause, we
          feel more responsibility than happiness - we need to do our best to
          truly fulfill our responsibility of science popularization and
          education. This sense of mission will also motivate us to keep
          improving our platform and serve more people.
        </div>
        <img src="" />
        <img src="" />

        <h3>
          <a id="More" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          More diversified communication
        </h3>

        <div class="text">
          WeChat is a very important social platform in China, just like twitter
          or Instagram. Together with the USTC team, we started our own WeChat
          Official Account for promotion. During the project, we also wrote
          popular science articles on the application of machine learning in
          synthetic biology to promote the project, and the content of the
          lectures was polished based on the feedback from the previous lectures
          in order to get more people's attention.
        </div>
        <img src="~static/img/T--USTC-Software--Operating_Account.png" />
        <div class="text">
          BiliBili is a cultural community and video platform which is highly
          popular among young generations in China, and we hope that our work
          will also be more visible to young people - who have a lot of energy,
          active minds, and the ability to turn ideas into reality. We upload
          our promotion video. Maybe somewhere in China, a young person will see
          our video and may light a torch of thought and curiosity and start
          trying to climb the heights of synthetic biology.
        </div>
        <h3>
          <a id="Educational-Event" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Educational Event
        </h3>
        <video width="80%" controls="controls">
          <source src="~static/img/T--USTC-Software--educationevent.mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Education",
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
.board video {
  margin-top: 20px;
  margin-bottom: 20px;
}
.all img {
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
}
#sciencepng {
  width: 80%;
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
#Overview {
  top: 0px;
}
.Overviewpng {
  min-height: 280px;
  width: 50% !important;
}
</style>