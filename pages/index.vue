<template>
  <div class="app" ref="app">
    <app-header />
    <nuxt-child keep-alive></nuxt-child>
    <div class="cat-log-up">
      <img
        id="catlogoup"
        src="~static/img/T--USTC-Software--toback.png"
        alt=""
        @click="backToTop"
        class="cat-logo-show"
        style="display: none; opacity: 1"
      />
    </div>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "~/components/appHeader.vue";
import appFooter from "~/components/appFooter.vue";
export default {
  head: () => ({
    titleTemplate: "[重制版]Team:USTC-Software%s",
  }),
  components: {
    appHeader,
    appFooter,
  },
  data: () => ({}),
  mounted() {
    window.addEventListener("scroll", () => {
      let toTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (toTop > 500) {
        document.getElementById("catlogoup").style.display = "block";
        document.getElementById("catlogoup").classList.remove("cat-logo-off");
        document.getElementById("catlogoup").classList.add("cat-logo-show");
      } else {
        document.getElementById("catlogoup").style.display = "none";
        document.getElementById("catlogoup").classList.remove("cat-logo-show");
        document.getElementById("catlogoup").classList.add("cat-logo-off");
      }
    });
    document.getElementById("catlogoup").addEventListener("mousemove", () => {
      document.getElementById("catlogoup").style.opacity = 1;
    });
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    },
  },
};
</script>

<style scope>
.cat-log-up {
  transition: 0.3s;
  opacity: 0.5;
}

.cat-log-up:hover {
  opacity: 1;
}
#catlogoup {
  position: fixed;
  display: block;
  bottom: 10%;
  right: 0;
  height: 150px;
  width: 102px;
  display: none;
  opacity: 0;
}
#catlogoup:hover {
  opacity: 1;
  cursor: pointer;
}
.cat-logo-show {
  animation: showUp 1s;
  animation-fill-mode: forwards;
}
@keyframes showUp {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
.cat-logo-off {
  animation: showOff 0.5s;
  animation-fill-mode: forwards;
}
@keyframes showOff {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>

