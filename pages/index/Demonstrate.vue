<template>
  <section>
    <div class="slash">
      <div class="slash1">
        <img src="~static/img/T--USTC-Software--slash.png" class="picture" />
      </div>
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Demonstrate</h1>
        <h3>
          <a id="Professional" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Professional Version
        </h3>
        <video width="80%" controls="controls">
          <source src="~static/img/T--USTC-Software--demonstrationvp.mp4" />
        </video>
        <h3>
          <a id="Educational" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Educational Version
        </h3>
        <video width="80%" controls="controls">
          <source src="~static/img/T--USTC-Software--educationdemon.mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Demonstrate",
  }),
};
</script>

<style scoped>
.slash {
  position: absolute;
  margin-top: -100px;
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
  margin-left: -54px;
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