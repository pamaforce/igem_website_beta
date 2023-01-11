<template>
  <section>
    <div class="all index-all">
      <div class="idx">
        <div class="backgroundcolor"></div>
        <img
          class="backgroundcircle"
          src="~/static/img/T--USTC-Software--wikibkgcircle.png"
        />
        <div class="info">
          <div class="content">
            <img src="~/static/img/T--USTC-Software--cat_black.png" />
            <div class="contenttitle">
              <span>C</span>onvenient <span>A</span>ccurate <span>T</span>ool
            </div>
            <div class="contentpara">
              <span>A</span>n integrated platform of machine learning models
              predicting protein properties
            </div>
            <nuxt-link to="/Description">
              <button class="pushable btn1">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front"> CAT INFO </span>
              </button>
            </nuxt-link>
            <button
              class="pushable btn2"
              onclick="window.location = 'https://catustc.tech'"
            >
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front">
                TRY ME! <span class="small">meow</span>
              </span>
            </button>
          </div>
          <img class="logo" src="~/static/img/T--USTC-Software--cat_logo.png" />
        </div>
      </div>

      <div class="main">
        <div class="main-items">
          <div class="main-item">
            <div class="main-img">
              <img
                class="main-round-left"
                src="~/static/img/T--USTC-Software--Index1-1.png"
                alt=""
              />
              <img
                class="main-round-right"
                src="~/static/img/T--USTC-Software--Index1-2.png"
                alt=""
              />
              <img
                class="main-round-center"
                src="~/static/img/T--USTC-Software--Index1-3.png"
                alt=""
              />
              <img
                class="main-round"
                src="~/static/img/T--USTC-Software--Index1-0.png"
                alt=""
              />
            </div>
            <div class="main-info">
              <div class="main-title">
                <div>Artificial Intelligence</div>
                <div>x</div>
                <div>Synthetic Biology</div>
              </div>
              <div class="main-ct">
                <div>
                  Nowadays, Artificial Intelligence has been devoted to various
                  areas, and has made some magnificent contribution in Synthetic
                  biology.
                </div>
                <div>
                  For example, Alphafold2 by Google, which can accurately
                  predict the 3D structure by protein sequence, and some other
                  machine learning models predicting the properties of protein
                  sequence.
                </div>
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-img">
              <img src="~/static/img/T--USTC-Software--Index2-0.png" alt="" />

              <img
                class="main-arm-left"
                src="~/static/img/T--USTC-Software--Index2-1.png"
                alt=""
              />
              <img
                class="main-arm-right"
                src="~/static/img/T--USTC-Software--Index2-2.png"
                alt=""
              />
            </div>
            <div class="main-info">
              <div class="main-title">
                <div>Integrated Tools</div>
                <div>for Machine Learning Models</div>
              </div>
              <div class="main-ct">
                <div>
                  After a long period of researching, we found that recently
                  there is still lack of tools that is user-friendly and can
                  integrate existing Machine Learning models and software.
                </div>
                <div>
                  Thus, we thought whether we can design a platform which is
                  user-friendly, lasting-support and keeping updating with more
                  cutting-edge models.
                </div>
              </div>
            </div>
          </div>

          <div class="main-item">
            <div class="main-img">
              <img src="~/static/img/T--USTC-Software--Index3-0.png" alt="" />
              <img
                class="main-cat-left"
                src="~/static/img/T--USTC-Software--Index3-1.png"
                alt=""
              />
              <img
                class="main-cat-right"
                src="~/static/img/T--USTC-Software--Index3-2.png"
                alt=""
              />
            </div>
            <div class="main-info">
              <div class="main-title">
                <div>CAT,</div>
                <div>Convenient and Accurate Tool</div>
              </div>
              <div class="main-ct">
                <div>
                  CAT, Convenient and Accurate Tool, is born and is based on the
                  purpose of offering an highly-efficient software to our users.
                </div>
                <div>
                  Furthermore, we’ve not only designed a professional version
                  for researchers, but also an educational one for students to
                  learn more about machine learning and synthetic biology.
                </div>
              </div>
            </div>
          </div>

          <div class="main-item">
            <div class="main-img">
              <img src="~/static/img/T--USTC-Software--Index4-0.png" alt="" />
            </div>
            <div class="main-info">
              <div class="main-title">
                <div>Professional Version</div>
              </div>
              <div class="main-ct">
                <div>
                  In the professional version, after lots of researching and
                  collecting, we provide four properties so far, secondary
                  structure, subcellular localization, transmembrane topo-logy
                  and isoelectric point. Users can key in the protein sequence
                  and obtain the properties.
                </div>
              </div>
            </div>
          </div>

          <div class="main-item">
            <div class="main-img">
              <img src="~/static/img/T--USTC-Software--Index5-0.png" alt="" />
            </div>
            <div class="main-info">
              <div class="main-title">
                <div>Educational Version</div>
              </div>
              <div class="main-ct">
                <div>
                  We’ve designed the educational version from the scratch. From
                  writing the content to designing the examples and format, our
                  talented teammembers created this incredible part.
                </div>
                <div>
                  Educational version can be divided into three part,
                  traditional mothods, the history of Artifitial intellegence
                  and four machine learning models with some comprehensible
                  samples.
                </div>
                <div>
                  We hope that, by using CAT educational version, we can arouse
                  students’ interest and motivate them devoting into this
                  interdisplinary of Synthetic Biology and Machine Learnig.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import appHeader from "~/components/appHeader.vue";
import appFooter from "~/components/appFooter.vue";

export default {
  head: () => ({
    title: "/about",
  }),
  components: {
    appHeader,
    appFooter,
  },
  mounted() {
    const IOoptions = {
      threshold: 0.5,
    };
    const IOHandler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add("main-enter");
          }
        }
      });
    };
    const IObserver = new IntersectionObserver(IOHandler, IOoptions);
    const mainItems = document.getElementsByClassName("main-item");
    for (const mainItem of mainItems) {
      IObserver.observe(mainItem);
    }
  },
};
</script>

<style scope>
.index-all {
  padding-top: 0 !important;
}
.pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}
.front {
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.pushable:hover {
  filter: brightness(110%);
}
.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}
.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}
.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}
.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}
.pushable:focus:not(:focus-visible) {
  outline: none;
}

.btn1,
.btn2 {
  color: white;
}

.btn1 {
  margin-right: 20px;
}

.btn1 span,
.btn2 span {
  color: white;
}

.btn1 .front {
  background: #fed647;
  font-family: Righteous;
}

.btn1 .edge {
  background: #a07304;
}

.btn2 .front {
  background: #41dbc5;
  font-family: Righteous;
  padding: 12px 30px;
}

.btn2 .edge {
  background: #1ea490;
}

.btn2 .small {
  font-size: small;
}

.main {
  width: 75%;
  margin: 0 auto;
  margin-top: 10%;
}

.main-item {
  display: flex;
  flex-direction: row;
  min-height: 350px;
  margin-bottom: 100px;
  align-items: center;
}

.main-img,
.main-info {
  flex: 1;
  width: 100%;
  visibility: hidden;
}

.main-enter .main-img {
  animation: fadeDown2Up 1s ease both;
  visibility: visible;
}

.main-item:nth-child(odd).main-enter .main-info {
  animation: fadeLeft2Right 1s 0.5s ease both;
  visibility: visible;
}

.main-item:nth-child(even).main-enter .main-info {
  animation: fadeRight2Left 1s 0.5s ease both;
  visibility: visible;
}

@keyframes fadeDown2Up {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeRight2Left {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeLeft2Right {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.main-item:nth-child(odd) {
  flex-direction: row-reverse;
  text-align: right;
}

.main-item:nth-child(odd) .main-ct {
  margin-right: 0;
  margin-left: auto;
}

.main-img {
  position: relative;
}

.main-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-title {
  margin-bottom: 24px;
}

.main-title div {
  font-family: Righteous, serif;
  font-size: 30px;
  line-height: 1.3;
  margin: 0;
}

.main-title div:last-child {
  display: block;
}

.main-ct {
  font-family: Lexend;
  font-size: 18px;
  letter-spacing: 0.05em;
}

.main-item:nth-child(even) .main-img {
  padding-right: 10%;
}

.main-item:nth-child(odd) .main-img {
  padding-left: 10%;
}

.main-ct div {
  text-align: justify;
  margin: 8px 0;
  line-height: 1.4;
}

.main-ct div:last-child {
  display: block;
}

.main-info {
  padding: 10px 0;
}

.main-info .orange {
  color: #f6c54c;
}

.main-arm-left,
.main-arm-right {
  position: absolute;
  left: -9%;
}

.main-arm-left {
  animation: UpAndDown 5s infinite;
}

.main-arm-right {
  animation: DownAndUp 5s infinite;
}

@keyframes UpAndDown {
  0% {
    transform: translateY(-7px);
  }

  50% {
    transform: translateY(7px);
  }

  100% {
    transform: translateY(-7px);
  }
}

@keyframes DownAndUp {
  0% {
    transform: translateY(7px);
  }

  50% {
    transform: translateY(-7px);
  }

  100% {
    transform: translateY(7px);
  }
}

.main-cat-left,
.main-cat-right {
  position: absolute;
  left: 9%;
}

.main-round-left,
.main-round-right,
.main-round-center {
  position: absolute;
  z-index: -1;
  left: 9%;
}

.main-round-center {
  animation: DownAndUp 5s infinite;
}

.main-round-right {
  animation: DownAndUp 5s infinite;
}

.main-round-left {
  animation: UpAndDown 5s infinite;
}

.main-cat-left {
  animation: LeftAndRight 5s infinite;
}

.main-cat-right {
  animation: RightAndLeft 5s infinite;
}

.main-round {
  z-index: 100;
}

@keyframes LeftAndRight {
  0% {
    transform: translateX(-7px);
  }

  50% {
    transform: translateX(7px);
  }

  100% {
    transform: translateX(-7px);
  }
}

@keyframes RightAndLeft {
  0% {
    transform: translateX(7px);
  }

  50% {
    transform: translateX(-7px);
  }

  100% {
    transform: translateX(7px);
  }
}
</style>
