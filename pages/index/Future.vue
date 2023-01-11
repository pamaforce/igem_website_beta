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
        <h1 class="title">Features and Future</h1>
        <h3>
          <a id="Features" class="anchor"></a>
          Features
        </h3>
        <div class="text">
          <div class="texttitle"># User-Friendly</div>
          No command line and various links
        </div>
        <img src="~static/img/T--USTC-Software--userfriendly.png" />
        <div class="text">
          <div class="texttitle"># Concise and Clear</div>
          Models has been integrated, results are displayed clear
        </div>
        <img src="~static/img/T--USTC-Software--Conciseclear.png" />
        <div class="text">
          <div class="texttitle"># Convenient and Accurate</div>
          Get result with high accuracy anywhere anytimeclear
        </div>
        <img src="~static/img/T--USTC-Software--ConvenientAccurate.png" />
        <div class="text">
          <div class="texttitle"># Lasting Support</div>
          Long term maintanance and more models is provided
        </div>
        <img src="~static/img/T--USTC-Software--lastingsupport.png" />
        <div class="text">
          <div class="texttitle">#High educational meanings</div>
          Introduction of the combination of Machine Learning and Synthetic
          biology
        </div>
        <img src="~static/img/T--USTC-Software--highlyeducation.png" />
        <h3>
          <a id="Future" class="anchor"></a>
          Future
        </h3>
        <div class="text">
          <div class="texttitle"># Hot-plug</div>
          We have designed the hot extension model for users to let researchers
          submit and use new models. Developing to an open platform. Our
          platform will continue to follow the trend of machine learning
          development and update the models in our platform in a timely and
          accurate way. We will continue to communicate with biological
          researchers to see which properties they are most interested, and try
          to integrate more models into our platform.
        </div>
        <img src="~static/img/T--USTC-Software--moremodel.png" />
        <div class="text">
          <div class="texttitle"># Extending Educational Version</div>
          As the number of models grows and the progress of machine learning, we
          update our educational version in order to provide more and more
          cutting-edge knowledge.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Future",
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
.slash1 {
  margin-top: -10% !important;
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
  width: 20%;
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
  line-height: 1;
  font-size: 30px;
  font-family: Righteous !important;
  margin-top: 40px;
  margin-bottom: 1px important;
  font-weight: normal;
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
.texttitle span {
  color: #f6c54c;
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
.text br {
  margin: 5px;
}
.anchor {
  position: relative;
  top: -150px;
}
</style>