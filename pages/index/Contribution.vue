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
    </div>
    <div class="all">
      <div class="board">
        <h1 class="title">Contribution</h1>
        <h3>
          <a id="Overview" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Overview
        </h3>
        <img id="firstpng" src="~static/img/T--USTC-Software--Contri.jpg" />
        <div class="text">
          At the very beginning of our project, we went to meet our school’s wet
          team - USTC, to learn something about synthetic biology. During our
          visit, we found that traditional biological experiments are very time
          consuming, especially when the experiment requires some new properties
          of protein that is unfamiliar to the researchers. Being familiar with
          information technology, we are curious about the possibility of
          collaboration between computer science and biology, which means
          applying machine learning to predict protein properties. We asked our
          wet team about the convenience of accessory to machine learning models
          and if there was any integrated platform specialized for those models,
          their answer is no. So we thought we should do some contributions in
          this area. With this belief, we design the software CAT to serve as
          the sharing platform of machine learning. Here are several of our
          contributions.
        </div>
        <h3>
          <a id="Models" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Integration of Models
        </h3>
        <div class="text">
          Due to the reasons just mentioned above, we want to provide a tool for
          researchers to use machine learning to predict protein properties. In
          order to meet the needs of researchers in different directions, we
          decided to design a platform that integrates various property
          prediction models. For researchers, they only need to input the
          protein sequence and then they can get the predicted results about the
          properties of proteins such as subcellular localization, transmembrane
          topology, secondary structure and isoelectric point, the four
          important protein features we provide.
        </div>
        <img id="simg1" src="~static/img/T--USTC-Software--integrate.png" />
        <div class="text">
          <div class="texttitle"># Subcellular localization</div>
          Protein function, metabolism and interactions are closely related to
          the subcellular localization of proteins, and mature proteins must be
          located in specific subcellular structures to perform their correct
          biological functions. Therefore, subcellular localization is of great
          importance for protein synthesis and functional studies.
        </div>
        <div class="text">
          <div class="texttitle"># Transmembrane localization</div>
          Membrane proteins play a crucial part in life activities by binding to
          ligand molecules and stimulating a series of reactions to transmit
          information between cells. The study of membrane proteins plays a
          vital role in the field of intercellular communication.
        </div>
        <div class="text">
          <div class="texttitle"># Secondary structure</div>
          The secondary structure, basically alpha spiral and beta fold,
          provides key information to the conformation of proteins and help
          bioinformaticians to deduce the spatial structure.
        </div>
        <div class="text">
          <div class="texttitle"># Isoelectric point</div>
          The solubility of amino acids is minimal at the isoelectric point, so
          the isoelectric point of proteins is essential for purification of
          amino acids and precipitation of proteins.
        </div>
        <h3>
          <a id="Disseminate-Knowledge" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Disseminate Knowledge
        </h3>
        <img id="simg2" src="~static/img/T--USTC-Software--education.png" />
        <div class="text">
          For the learners who are interested in biology but have not studied
          it, some dissemination of traditional biology knowledge give them a
          deeper understanding of the field they love and a solid foundation for
          future study and research. For some researchers in certain fields, the
          ability of the models we offer is limited, so we think it’s necessary
          to disseminate knowledge of biology and machine learning. We believe
          this can help them understand what kind of machine learning models are
          useful for themselves and to what extent. That's why we build the
          education section on CAT.
          <br />
          <br />
          The part of traditional biology shares some traditional assays, such
          as subcellular localization of proteins using fluorescent protein
          assays. We believe that for students it can have a brief of
          traditional biology, and develop their interest in synthetic biology
          through our educational version.
          <br />
          <br />
          The machine learning part has the advantage of being easy to
          understand. It uses the simplest examples to explain the principles of
          machine learning so that users are not confused. We believe that
          practice is necessary when learning knowledge. So we provide a small
          test for users. Besides, we found that knowledge in graphical form is
          easier to be accepted than one in textual form, so we set up
          interactive animations to help learners master the basic principles of
          machine learning quickly and firmly.
          <br />
          <br />
          We believe that only an educational version is not enough to
          popularize the knowledge about synthetic biology and machine learning,
          so we designed a brochure. It has slightly the same content as the
          education section, but we believe that by doing so, we can contribute
          to the popularization of science.
        </div>
        <h3>
          <a id="Human-Practice" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Human Practice
        </h3>
        <img id="simg3" src="~static/img/T--USTC-Software--Junior10.png" />
        <div class="text">
          We held a meeting at the beginning of the project to educate each
          regular and reserve team member about synthetic biology and computer
          science, and to plan and organize the project.<br /><br />
          After the initial research, we had a meeting with Prof. Haiyan Liu
          from the School of Life Sciences, University of Science and Technology
          of China, and communicated about the development and possible problems
          in protein prediction, which was very helpful to us.<br /><br />
          From August 27th to 29th, 2021, we participated in CCiC, the
          Conference of China iGEMer Community. we had an in-depth and friendly
          interaction with other teams and were able to learn and understand
          synthetic biology in more depth. After the conference we had further
          communication with SJTU-Software team from Shanghai Jiao Tong
          University and then started a collaboration between the two teams.<br /><br />
          As we’ve mentioned above, we created a brochure. By hanging out the
          brochures in science and technology museums, high schools, and
          university campuses, we promoted our project and taught the basics of
          synthetic biology and machine learning to students and community
          members at all levels, and received a lot of positive feedback.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Contribution",
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
#firstpng {
  min-height: 100px;
}
#simg1 {
  width: 40%;
}
#simg2 {
  width: 30%;
}
#simg3 {
  width: 40%;
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