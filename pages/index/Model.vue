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
        <h1 class="title">Model</h1>

        <h3>
          <a id="Biological-Models" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Biological Models
        </h3>
        <div class="text">
          <div class="texttitle">Cell-PLoc 2.0<sup>[1]</sup></div>
          There is a flowchart to show the prediction process of the predictors
          in Cell-PLoc 2.0, where ensemble classifier 1 is for processing the GO
          descriptor samples, while ensemble classifier 2 is for the FunD
          (functional domain) and PseEvo (pseudo sequential evolution)
          descriptor samples.
        </div>
        <img src="~static/img/T--USTC-Software--m1.png" />
        <div class="text">
          <div class="texttitle">Jpred4<sup>[2]</sup></div>
          Both secondary structure and affinity are predicted by the JNet neural
          network, and the neural network used in Jpred4 is a retrained version,
          JNet 2.3.1. The JNet 2.0 neural network-based predictor has been
          retrained to make JNet 2.3.1 by 7-fold cross-validation using one
          representative for each of the 1358 SCOPe/ASTRAL v.2.04 superfamily
          domain sequences. Multiple alignments for each sequence were built by
          PSI-BLAST through searching UniRef90 v.2014_07. In addition to
          retraining, the HMM building step in JNet was updated to HMMer 3 and
          some improvements were made to the code to simplify management and
          future algorithmic developments. The initial JNet model<sup>[3]</sup>
          is shown below.
        </div>
        <img style="width: 30%" src="~static/img/T--USTC-Software--m2.png" />
        <div class="text">
          <div class="texttitle">
            Isoelectric Point Calculator 2.0<sup>[4]</sup>
          </div>
          Overview of the IPC 2.0 architecture. The input (amino acid sequence
          in the plain format or multiple sequences in the FASTA format) is
          processed by individual machine learning models. Separate models
          depending the prediction task are used. Isoelectric point prediction
          for peptides is based on separable convolution model.
        </div>
        <img style="width: 30%" src="~static/img/T--USTC-Software--m3.png" />
        <div class="text">
          <div class="texttitle">DeepTMHMM<sup>[5]</sup></div>
          Protein structure prediction using deep learning methods have seen
          several advancements within the last years. In this project, we
          investigate deep learning for prediction of the membrane topology of
          transmembrane proteins. Transmembrane proteins are relevant for drug
          development since they make up more than 50% of all human drug targets
          . We present TMHMM3, a deep learning model based on Long Short-Term
          Memory (LSTM) units and Conditional Random Fields (CRF). We explore
          several variations of this model such as using CRFs based on different
          state machines, using Marginal Probabilities for type prediction and
          using Connectionist Temporal Classification (CTC) as an alternative to
          CRFs. Finally, we compare the performance of these models with
          existing tools for transmembrane topology prediction. We show that
          TMHMM3 performs better than many of the most popular tools (such as
          Phobius and TMHMM2) and achieves similar performance to the current
          state-of-the-art (TOPCONS2). Because TMHMM3 do not rely on protein
          profiles it is significantly faster at making predictions than models
          that do use profiles, such as TOPCONS2.
        </div>
        <img src="" />
        <img src="" />

        <h3>
          <a id="Computer-Models" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          Computer Models
        </h3>

        <div class="text">
          <div class="texttitle">Service Structure</div>
          1. Nginx<sup>[6]</sup> proxy and load balance
        </div>
        <div class="text">
          To build up a web application of protein prediction service, we choose
          the structure of backend as below: the Nginx servers receive messages
          from multiple clients, and filter the URL according to configured
          rules: if URL start with '/api/, Http packages are redirected to
          Gunicorn<sup>[7]</sup> process through the prepared Unix socket; if
          not, Nginx will answer the request according to file hierarchy.
          Gunicorn serve as a manager of threads of WSGI server –
          Flask<sup>[8]</sup>, distribute requests to balance the load. When
          client post a request of specific protein for specific calculation,
          one of the idle Flask server comes to handle.
        </div>
        <img src="~static/img/T--USTC-Software--m4.png" />
        <div class="text">2. Protein digest and task submission</div>
        <div class="text">
          A post request is required for task submission, and when sequence
          received, we validate it and calculate it’s md5 digest to identify the
          protein. Then we push the digest-sequence pair to our Redis database
          and return the digest immediately to client. To avoid the server
          thread stuck at specific calculation process, we adopt
          celery<sup>[9]</sup>, the task queue manager. With celery, Flask
          thread can be devoted only to web service, and deliver the prediction
          part to celery workers. Each prediction tasks are running in separate
          threads, and push the digest – result key into Redis<sup>[10]</sup>
          database.
        </div>
        <img src="~static/img/T--USTC-Software--m5.png" />
        <img src="~static/img/T--USTC-Software--m6.png" />
        <div class="text">3. Result distribution</div>
        <div class="text">
          Each task will be allocated a specific database. During the submit of
          prediction task, a "{status: running}" will be set with digest as key
          in result database, when task was finished, the digest key’s value is
          automatically set to JSON output by celery workers. And if task raise
          exception, it can also put related information in the result JSON. In
          this way, we detach the responsibility of status and error detection
          from Flask thread (Flask just check if given hash is present in the
          database and then return the value if yes), and make it flexible for
          new components to add in.
        </div>
        <div class="text">
          Clients will request their results from “/api/<hash
            >/<model
              >” with GET method. For the sake of Redis cache, it would be
              possible for clients to get results immediately if the result of
              specific protein and specific module has been calculated. But it’s
              so lucky for most cases, so if the first request get a status of
              running, client will silent for a fixed length of time, and repeat
              the request for several times. And if finally the status remains
              running, let user decide if sending request again.
            </model></hash
          >
        </div>
        <img src="~static/img/T--USTC-Software--m7.png" />

        <div class="text">
          <div class="texttitle">Hot-plug Extensible Module</div>
          The professional version of CAT aims to provide a platform for
          different deep-learning modules. So we design a hot-plug extensible
          structure for more modules to be directly inserted into our service.
          Our background structure was born with hot-plug features. To be
          specific, each of scripts from contributors are packed into different
          python modules. And each module should export a class with the same
          name of module, which includes the method called get_result_json that
          takes in required keyword arguments and returns JSON serialized
          results. Model contributors may also export a dict of error messages
          corresponding to their Exceptions.
        </div>
        <div class="text">
          In our service part, we aggregate modules into one folder, and import
          them according to a python config file. Different Redis databases will
          be distributed among those models, and will be paired with the name of
          module in dict for quick access. Then we need to asynchronize the task
          with only one celery “template”. It takes model function as first
          argument to call and preserve arguments behind to feed the model
          function. Firstly, function called with try catch, and then if no
          error, result will be dumped into Redis. But if some exception raised,
          the exception will be matched against the exception – message dict,
          and dump corresponding message to Redis.
        </div>
        <div class="text">
          In ideal cases, our platform will work as following: When receiving
          the POST request from /api/<model
            >, we match the model segment in URL and after verifying the
            existence of model, directly call the corresponding celery async
            function with posted JSON as keyword arguments. Then it’s
            responsible for celery worker to validate the posted information.
            Because validation always occur at very beginning, the worker may go
            through a fast-fail process and insert error message to Redis before
            the query GET arrived, so clients may not suffer a long-time wait
            before their frustrating error arrives.
          </model>
        </div>
        <div class="text">
          To cooperate with our backend, the professional version of C.A.T.
          frontend may contain list of foldable cards. Those cards representing
          different modules will submit their own requests to backend and
          represent the result in place. What’s more, according to the argument
          list provided by contributors of models, we can automatically organize
          the needed widget in the card, like input box, Boolean switch,
          drop-down selector. In this way, we realize the suppose of hot-plug
          use of our C.A.T. professional platform.
        </div>

        <h3>
          <a id="References" class="anchor"></a>
          <img src="~static/img/T--USTC-Software--circle.png" />
          References
        </h3>
        <div class="text">
          [1]"Cell-PLoc 2.0: an improved package of web-servers for predicting
          subcellular localization of proteins in various organisms" written by
          Kuo-Chen Chou, Hong-Bin Shen,published by Natural Science, Vol.2
          No.10, 2010
        </div>
        <div class="text">
          [2]Alexey Drozdetskiy, Christian Cole, James Procter, Geoffrey J.
          Barton, JPred4: a protein secondary structure prediction server,
          Nucleic Acids Research, Volume 43, Issue W1, 1 July 2015, Pages
          W389–W394,
          <a target="_blank" href="https://doi.org/10.1093/nar/gkv332"
            >https://doi.org/10.1093/nar/gkv332</a
          >
        </div>
        <div class="text">
          [3]Application of multiple sequence alignment profiles to improve
          protein secondary structure prediction James A. Cuff,Geoffrey J.
          Barton,First published: 14 June 2000
          <a
            target="_blank"
            href="https://doi.org/10.1002/1097-0134(20000815)40:3<502::AID-PROT170>3.0.CO;2-Q"
            >https://doi.org/10.1002/1097-0134(20000815)40:3&lt;502::AID-PROT170&gt;3.0.CO;2-Q</a
          >
        </div>
        <div class="text">
          [4]Lukasz Pawel Kozlowski, IPC 2.0: prediction of isoelectric point
          and pKa dissociation constants, Nucleic Acids Research, Volume 49,
          Issue W1, 2 July 2021, Pages W285–W292,
          <a target="_blank" href="https://doi.org/10.1093/nar/gkab295"
            >https://doi.org/10.1093/nar/gkab295</a
          >
        </div>
        <div class="text">
          [5]Jeppe Hallgren, Konstantinos D. Tsirigos, José Juan Almagro
          Armenteros, Paolo Marcatili, Henrik Nielsen, Anders Krogh and Ole
          Winther (2020). TMHMM3.
          <a target="_blank" href="https://biolib.com/jeppe/DeepTMHMM-mn92"
            >https://biolib.com/jeppe/DeepTMHMM-mn92</a
          >
        </div>
        <div class="text">
          [6]<a target="_blank" href="https://www.nginx.com"
            >https://www.nginx.com</a
          >
        </div>
        <div class="text">
          [7]<a target="_blank" href="https://gunicorn.org"
            >https://gunicorn.org</a
          >
        </div>
        <div class="text">
          [8]<a
            target="_blank"
            href="https://flask.palletsprojects.com/en/2.0.x/"
            >https://flask.palletsprojects.com/en/2.0.x/</a
          >
        </div>
        <div class="text">
          [9]<a target="_blank" href="https://docs.celeryproject.org/en/stable/"
            >https://docs.celeryproject.org/en/stable/</a
          >
        </div>
        <div class="text">
          [10]<a target="_blank" href="https://redis.io">https://redis.io</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: "/Model",
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
.texttitle {
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 20px;
  letter-spacing: 0.05em;
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