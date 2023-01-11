<template>
  <div class="footpage">
    <div class="foot">
      <div class="footlist">
        <div class="footlisttitle">Sponsors</div>
        <h3 class="footlink">
          <a href="https://biox.ustc.edu.cn/">School of Life Science, USTC</a>
        </h3>
        <h3 class="footlink">
          <a href="https://www.ustcif.org.cn/default.php"
            >Initiative Foundation</a
          >
        </h3>
      </div>
      <div class="footlist">
        <div class="footlisttitle">Links</div>
        <h3 class="footlink">
          <a href="/">Homepage</a>
        </h3>
        <h3 class="footlink">
          <a
            href="https://github.com/pamaforce/igem_website_beta"
            target="_blank"
            >Projects</a
          >
        </h3>
      </div>
      <div class="footlist">
        <div class="footlisttitle">Contact Us</div>
        <h3>
          Mail: <br />
          USTC_Software2021@163.com
        </h3>
      </div>
    </div>
    <h3 class="foothint" id="End">
      University of Science and Technology of China, No.96, JinZhai Road Baohe
      District, Hefei, Anhui, 230026, P.R.China
    </h3>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  margin-top: 100px;
  background-image: linear-gradient(to top, #ffe39e, #fffcf3);
  padding: 20px;
}
.foot {
  padding: 20px;
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Lexend !important;
  width: 100%;
}
.footlisttitle {
  font-weight: 400 !important;
  font-size: 25px !important;
  font-family: Righteous !important;
  margin-bottom: 15px;
  color: black;
}
.footlist {
  text-align: center;
}
.foot h3 {
  font-weight: 500 !important;
  font-family: Lexend !important;
  color: black;
}
.footlink a {
  color: black;
}
.foothint {
  text-align: center;
  font-weight: 500 !important;
  font-family: Lexend !important;
  color: #0000004d;
}
</style>