<template>
  <nav id="nav" class="nav">
    <div class="nav-head">
      <div class="nav-header nav-logo">USTC-SOFTWARE</div>
      <div id="nav-hidden" class="nav-hidden nav-header">
        <span class="orange">USTC-SOFTWARE</span>
      </div>
    </div>
    <div class="nav-body">
      <div class="nav-item">
        <nuxt-link to="/Awards">
          <a>AWARDS</a>
        </nuxt-link>
      </div>
      <div class="nav-item">
        HUMAN PRACTICE <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
        <div class="nav-sec">
          <div>
            <nuxt-link to="/Human_Practices">
              <a>Integrated Human Practices</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Education">
              <a>Education</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Communication">
              <a>Communication</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Sustainable">
              <a>Sustainable</a>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <nuxt-link to="/Safety">
          <a>SAFETY</a>
        </nuxt-link>
      </div>
      <div class="nav-item">
        PROJECT <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
        <div class="nav-sec">
          <div>
            <nuxt-link to="/Description">
              <a>Description</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Model">
              <a>Model</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Engineering">
              <a>Engineering</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Implementation">
              <a>Implementation</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Demonstrate">
              <a>Demonstrate</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Future">
              <a>Features &amp; Future</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Contribution">
              <a>Contribution</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Proof_Of_Concep">
              <a>Proof of Concept</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Attributions">
              <a>Attributions</a>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="nav-item">
        TEAM <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
        <div class="nav-sec">
          <div>
            <nuxt-link to="/Team">
              <a>Team Members</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Collaborations">
              <a>Collaborations</a>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/Partnership">
              <a>Partnership</a>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    const navElement = document.getElementById("nav");
    let hasHidden = false;
    if (document.getElementById("nav-hidden")) hasHidden = true;
    window.addEventListener("scroll", () => {
      const nav2Ele = document.getElementById("nv");
      const scrollTop = document.documentElement.scrollTop;
      const firHei =
        document.documentElement.clientHeight || document.body.clientHeight;
      if (scrollTop / firHei > 0.2) {
        if (hasHidden) {
          document.querySelector(".nav-logo")?.classList.add("nav-logo-down");
          document
            .querySelector(".nav-hidden")
            ?.classList.add("nav-hidden-down");
        }
        navElement?.classList.add("nav-down");
        nav2Ele?.classList.add("nv-down");
      } else {
        if (hasHidden) {
          document
            .querySelector(".nav-logo")
            ?.classList.remove("nav-logo-down");
          document
            .querySelector(".nav-hidden")
            ?.classList.remove("nav-hidden-down");
        }
        navElement?.classList.remove("nav-down");
        nav2Ele?.classList.remove("nv-down");
      }
    });
  },
};
</script>
<style scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  background: rgba(0, 0, 0, 0);
  transition: 0.3s;
  padding: 0 12%;
  padding-left: 8%;
  z-index: 100;
}
.nav-blank {
  position: relative;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
}

.nav:hover {
  background: #fffcf3;
  box-shadow: 0px 0px 50px #f1eee4;
}

.nav-down {
  background: #fffcf3;
  box-shadow: 0px 0px 50px #f1eee4;
}

.nav-hidden {
  position: absolute;
  top: 0;
  transform: rotateX(180deg);
  visibility: hidden;
  opacity: 0;
}

.nav-hidden-down {
  visibility: visible;
  opacity: 1;
  transform: rotateX(0deg);
}

.nav-logo-down {
  visibility: hidden;
  opacity: 0;
  transform: rotateX(180deg);
}

.nav-head:hover .nav-hidden {
  visibility: visible;
  opacity: 1;
  transform: rotateX(0deg);
}

.nav-head:hover .nav-logo {
  visibility: hidden;
  opacity: 0;
  transform: rotateX(180deg);
}

.nav-header {
  font-family: "Lexend Exa", sans-serif;
  line-height: 60px;
  font-size: 24px;
  text-align: center;
  transition: 0.3s;
}

.nav-body {
  letter-spacing: 2px;
  line-height: 60px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.nav-item {
  cursor: pointer;
  position: relative;
  font-size: 16px;
  padding: 0 20px;
}

.nav-sec {
  display: none;
  line-height: 26px;
  position: absolute;
  z-index: 100;
  background: #fffcf3;
  white-space: nowrap;
  letter-spacing: 1px;

  /*top: 90%;*/
  top: 100%;
  box-shadow: 0px 0 4px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translateX(-50%);
  left: 50%;
  animation: fadeInUp 0.3s 0.1s ease both;
}
.nav-sec div {
  transition: 0.3s;
}

.nav-sec div:hover {
  background: #f8f1db;
}

.nav-item:hover .nav-sec {
  display: block;
  transition: all 0.4s;
}

.nav-item i {
  transition: 0.3s;
}
.nav-item a {
  text-decoration: none !important;
  color: black !important;
}
.nav-item:hover i {
  transform: rotate(180deg);
}

.nav-sec:before {
  /*content: "";*/
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #ffe29d;
}

.nav-sec div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 10px 15px;
}

.nav-hide {
  opacity: 0;
  visiblity: hidden;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
    animation: fadeInUp 0.3s 0.1s ease both;
  }
}
</style>