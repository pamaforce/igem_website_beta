<template>
  <section>
    <nav id="nav" class="nav">
      <div class="nav-head">
        <div class="nav-header nav-logo">USTC-SOFTWARE</div>
        <div id="nav-hidden" class="nav-hidden nav-header">
          <span class="orange">USTC-SOFTWARE</span>
        </div>
      </div>
      <div class="nav-body">
        <nuxt-link to="/Awards">
          <div class="nav-item">
            <a>AWARDS</a>
          </div>
        </nuxt-link>
        <div class="nav-item">
          HUMAN PRACTICE <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
          <div class="nav-sec">
            <nuxt-link to="/Human_Practices">
              <div>
                <a>Integrated Human Practices</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Education">
              <div>
                <a>Education</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Communication">
              <div>
                <a>Communication</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Sustainable">
              <div>
                <a>Sustainable</a>
              </div>
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/Safety">
          <div class="nav-item">
            <a>SAFETY</a>
          </div>
        </nuxt-link>
        <div class="nav-item">
          PROJECT <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
          <div class="nav-sec">
            <nuxt-link to="/Description">
              <div>
                <a>Description</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Model">
              <div>
                <a>Model</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Engineering">
              <div>
                <a>Engineering</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Implementation">
              <div>
                <a>Implementation</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Demonstrate">
              <div>
                <a>Demonstrate</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Future">
              <div>
                <a>Features &amp; Future</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Contribution">
              <div>
                <a>Contribution</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Proof_Of_Concept">
              <div>
                <a>Proof of Concept</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Attributions">
              <div>
                <a>Attributions</a>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="nav-item">
          TEAM <i class="bx bxs-chevron-down arrow team-arrow-1"></i>
          <div class="nav-sec">
            <nuxt-link to="/Team">
              <div>
                <a>Team Members</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Collaborations">
              <div>
                <a>Collaborations</a>
              </div>
            </nuxt-link>
            <nuxt-link to="/Partnership">
              <div>
                <a>Partnership</a>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <nav class="nv" id="nv">
      <div class="nv-items">
        <div class="nv-progress" id="nv-progress">
          <div class="nv-line-shadow"></div>
          <div class="nv-line" id="nv-line" style="width: 0%"></div>
        </div>
        <div id="nv-points" class="nv-points"></div>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nvList: {
        "/Team": [
          "USTC-Software",
          "Management",
          "Backend",
          "Frontend",
          "Art",
          "Biology-Group",
        ],
        "/Collaborations": ["SJTU", "USTC"],
        "/Partnership": ["Overview", "Start", "Event"],
        "/Description": ["Background", "Inspiration", "Obstacle", "Cat"],
        "/Model": ["Biological-Models", "Computer-Models", "References"],
        "/Attributions": [
          "Models",
          "Everyone",
          "PI",
          "Instructor",
          "Support",
          "Cooperation",
        ],
        "/Awards": ["Bronze-Medal", "Silver-Medal", "Gold-Medal"],
        "/Communication": ["Overview", "Museum", "Junior", "Senior"],
        "/Contribution": [
          "Overview",
          "Models",
          "Disseminate-Knowledge",
          "Human-Practice",
        ],
        "/Demonstrate": ["Professional", "Educational"],
        "/Education": [
          "Overview",
          "Educational-Version",
          "Brochure",
          "Lectures",
          "More",
          "Educational-Event",
        ],
        "/Engineering": [
          "Overview",
          "Investigation",
          "Reorientation",
          "Educational",
          "Hot-plug",
          "Improvement",
          "Effectiveness",
        ],
        "/Future": ["Features", "Future"],
        "/Human_Practices": [
          "Conference",
          "Discussion",
          "Meeting",
          "CCiC",
          "Brochures",
        ],
        "/Implementation": ["Goals", "Efforts", "Future"],
        "/Proof_Of_Concept": [
          "JPred",
          "IPC",
          "DeepTMHMM",
          "Cell-PLoc",
          "Reference",
        ],
        "/Safety": ["Safety"],
        "/Sustainable": ["Overview", "Goal-4", "Goal-9", "Reference"],
      },
    };
  },
  methods: {
    updatePoints() {
      let path = this.$route.path;
      document.getElementById(
        "nav-hidden"
      ).innerHTML = `<span class="orange">${path
        .replace("/", "")
        .replace("_", "-")
        .toUpperCase()}</span>`;
      setTimeout(() => {
        const point_array = this.nvList[path] || [];
        console.log(point_array);
        if (!point_array.length) {
          console.log(document.getElementById("nv-progress"));
          document.getElementById("nv-progress").style.opacity = "0";
        } else {
          document.getElementById("nv-progress").style.opacity = "1";
        }
        let point_eles = [];

        let point_pec = 1 / (point_array.length - 1);
        const nav2ELe = document.getElementById("nv-line");

        function debounce(fn, delay = 5) {
          let timer = null;
          return function () {
            if (timer) {
              clearTimeout(timer);
              timer = setTimeout(fn, delay);
            } else {
              timer = setTimeout(fn, delay);
            }
          };
        }

        const locatePoint = () => {
          point_eles = [];
          const points_ele = document.getElementById("nv-points");
          points_ele.innerHTML = "";

          function genPoint(id, ele, num) {
            const pointEle = document.createElement("div");

            pointEle.classList.add("nv-point");
            pointEle.classList.add("nv-point-passed");
            pointEle.style.left = `${num * point_pec * 100}%`;
            pointEle.innerHTML = `<div class="nv-round"></div>
        <div class="nv-intro"><a  href="#${id}">${id.replace(
              "-",
              " "
            )}</a></div>`;

            points_ele.appendChild(pointEle);
            if (!ele) {
              setTimeout(() => {
                locatePoint();
              }, 10);
            }
            return [
              ele?.getBoundingClientRect().top +
                document.documentElement.scrollTop,
              pointEle,
            ];
          }

          let point_num = 0;
          point_array.forEach((point_id) => {
            const nodeEle = document.getElementById(point_id);
            const [height, titleEle] = genPoint(point_id, nodeEle, point_num);
            point_eles.push({
              nodeEle,
              titleEle,
              height,
            });
            point_num++;
          });
        };
        const DOMLoadedHandler = () => {
          locatePoint();
        };

        const PointScrollHandler = () => {
          const top =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.pageYOffset;
          let prev_ele = null;
          let wd = 0;
          let has_calc = false;
          let buggy = false;
          for (let i = point_eles.length - 1; i >= 0; i--) {
            const ele = point_eles[i];
            ele.titleEle.classList.remove(
              "nv-point-passed",
              "nv-point-inactive",
              "nv-point-active"
            );
            if (!has_calc) {
              if (top <= ele.height - 5) {
                prev_ele = ele;
                ele.titleEle.classList.add("nv-point-inactive");
              } else {
                if (prev_ele) {
                  wd = (i / (point_eles.length - 1)) * 100;
                  wd +=
                    ((top - ele.height) / (prev_ele.height - ele.height)) *
                    point_pec *
                    100;
                  has_calc = true;
                  if (buggy) {
                    ele.titleEle.classList.add("nv-point-passed");
                  } else {
                    ele.titleEle.classList.add("nv-point-active");
                  }
                } else {
                  prev_ele = ele;
                  wd = 100;
                  if (i === point_eles.length - 1) {
                    buggy = true;
                  }
                  if (buggy) {
                    ele.titleEle.classList.add("nv-point-active");
                  } else {
                    ele.titleEle.classList.add("nv-point-passed");
                  }
                }
              }
            } else {
              ele.titleEle.classList.add("nv-point-passed");
            }
          }
          nav2ELe.style.width = `${Math.min(wd, 100)}%`;
        };
        locatePoint();
        //window.addEventListener("DOMContentLoaded", DOMLoadedHandler);
        window.addEventListener("resize", locatePoint);
        window.addEventListener("scroll", debounce(PointScrollHandler));
      }, 10);
    },
  },
  watch: {
    $route(to) {
      if (!to.hash) this.updatePoints();
    },
  },
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
    this.updatePoints();
  },
};
</script>
<style>
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
.mw-content-ltr {
  margin-top: 60px;
}

.nav-down {
  box-shadow: none;
}
.nv {
  position: fixed;
  padding: 0 12%;
  width: 100vw;
  top: 60px;
  height: 68px;
  padding-top: 10px;
  left: 0;
  background: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  z-index: 50;
}

.nv-down {
  background: rgb(255, 252, 243);
  background: linear-gradient(
    180deg,
    rgba(255, 252, 243, 1) 0%,
    rgba(255, 252, 243, 1) 62%,
    rgba(0, 212, 255, 0) 100%
  );
}

.nv-bread {
  font-family: "Righteous", cursive;
  font-size: 30px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.nv-bread span {
  color: black;
}

.nv-bread span:first-child {
  color: #f0b82f;
}

.nv-progress {
  position: relative;
}

.nv-line-shadow,
.nv-line {
  position: absolute;
  top: 0;
  height: 2px;
  width: 100%;
}

.nv-line-shadow {
  background: #dcd8cb;
}

.nv-line {
  width: 0;
  background: #f0b82f;
}

.nv-items {
  position: relative;
}
.nv-items a:hover {
  text-decoration: none;
}
.nv-round {
  transition: 0.3s;
  position: absolute;
  top: -5px;
  left: -5px;
  background: white;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid #f0b82f;
}

.nv-point {
  position: absolute;
}

.nv-intro {
  position: relative;
  font-size: 20px;
  left: -50%;
  margin-top: 15px;
  font-family: "Righteous", cursive;
  color: #f0b82f;
}

.nv-point-passed .nv-round {
  border-color: #f0b82f;
  /*background: #F0B82F;*/
  background: white;
}

.nv-point-passed .nv-intro {
  color: #dcd8cb;
}

.nv-point-active .nv-round {
  border-color: #f0b82f;
  background: #f0b82f;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
}

.nv-point-active .nv-intro {
  color: #f0b82f;
}

.nv-point-inactive .nv-round {
  border-color: #dcd8cb;
  background: white;
}

.nv-point-inactive .nv-intro {
  color: #dcd8cb;
}

.nv-intro {
  white-space: nowrap;
  color: #dcd8cb;
}

.nv-intro a {
  color: #dcd8cb;
}

.nv-point-active a {
  color: #f0b82f !important;
}
.anchor {
  position: relative;
  top: -170px;
}
</style>