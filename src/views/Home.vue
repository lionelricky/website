<template>

<diV>
  <v-app light>
    <v-content>
      <!-- TOP -->
      <section id="paral-axe">
       <v-parallax
        dark
        src="http://www.rikmedia.ca/images/BGIMAGE2.jpg"
        >
          <v-layout
          align-center
          column
          justify-center
          v-if="languageMode"
          >
            <h1 class="display-3">PROGRAMMEUR FULL STACK</h1>
            <h3 class="display-2 mb-3">GRAPHISTE UI/UX & MULTIMÉDIA</h3>
            <h4 class="headline">Simplicité, efficacité et clarté </h4>
          </v-layout>

          <v-layout
          align-center
          column
          justify-center
          v-else
          >
            <h1 class="display-3">FULL STACK DEVELOPER</h1>
            <h3 class="display-2 mb-3"> UI/UX & MULTIMEDIA DESIGNER</h3>
            <h4 class="headline">Efficiency, simplicity and clarity </h4>
          </v-layout>
        </v-parallax>

      </section>

      <section id="main">

        <v-layout row wrap class="my-2" align-center>
          <v-flex xs12 class="my-3">
            <div class="text-xs-left">
            <h2 class="display-1">Rick Iraklis Kiriakidis</h2>
            <h2 class="title mb-3" v-if="languageMode">Programmeur full stack. Concepteur UI/UX. Graphiste Imprimé, Web et Multimédia </h2>
            <h2 class="title mb-3" v-else> Full stack developer, UI/UX & multimedia designer </h2>
              <div class="body" v-if="languageMode">
                <p>
                  Programmeur full stack, concepteur UI / UX et graphiste passionné et attentionné avec expertise en: développement front-end et back-end, conception d'interface utilisateur (UI), expérience utilisateur (UX), recherche en éxpérience utilisateur (CRX), développement de systèmes et base de données, interactivité, conception de maquettes, architecture de l'information, analyse de projet, HTML5 / CSS3 / Javascript, identité visuelle, impression et conception Web.
                </p><p>
                Je suis reconnu comme un chef d'équipe et responsable de produit motivé et talentueux, avec prix à l'appui et un ensemble de compétences qui s'étend sur diverses disciplines. J'ai une vaste expérience de conceptions de portails, site web avec commerce électronique et d'applications mobile. Ainsi que plus de vingt ans d'expérience dans le domaine graphique et le développement de marques commerciales sur de multiples plateformes et médias.
                </p>
                <span><a href="mailto:rick.kiriakidis@gmail.com"><v-icon small>email</v-icon> rick.kiriakidis@gmail.com</a> | <a herf="skype+15149412851?call"><v-icon small>phone</v-icon> 514.941.2851</a></span>
              </div>
              <div class="body" v-else>
                <p>
                Highly passionate and successful full stack developer, with expertise in Front-end and Back-end developemnt, UI/UX design, Interaction Design, Problem Solving, Information Architecture, Research & Analytics, Identity Creation, Print and Web design.
                </p><p>
                Recognized as an award winning team leader and product owner as well as a talented problem solver with a unique skill-set that spans various disciplines. Exceptional track record of designing portals and applications with extended life spans and large user base. Over twenty years of experience in understanding and developing leading brands into commercial successes across multiple platforms and media.
                </p>
                <span><a href="mailto:rick.kiriakidis@gmail.com"><v-icon small>email</v-icon> rick.kiriakidis@gmail.com</a> | <a herf="skype+15149412851?call"><v-icon small>phone</v-icon> 514.941.2851</a></span>
              </div>

            </div>
          </v-flex>
        </v-layout>

        <!-- LISTS -->
        <v-layout row wrap class="my-2" align-center>

        <v-flex md4 xs12 align-content-center>
          <div class="bordered">
            <v-flex>
              <v-icon x-large class="bluegrey--text text--lighten-2">code</v-icon>
            </v-flex>
            <v-flex class="my-4">
                <div v-if="languageMode" class="headline text-xs-center">PROGRAMMATION</div>
                <div v-else class="headline text-xs-center">PROGRAMING</div>
            </v-flex>
            <v-flex>
            <ul v-if="languageMode">
                <li> Prog. Front-end<br /><span>(VueJS, ReactJs, JQuery, etc.)</span></li>
                <li> Prog. Back-end<br /><span>(C#,JAVA, PHP, etc.)</span></li>
                <li> Conception Web<br /><span>(HTML, CSS, SASS, etc.)</span></li>
                <li> Développement et analyse de systèmes</li>
                <li> Développement de base de données<br /><span>(SQL, MySQL)</span></li>
              </ul>
              <ul v-else>
                <li> Front-end Dev.<br /><span>(VueJS, ReactJs, JQuery, etc.)</span></li>
                <li> Back-end Dev.<br /><span>(C#,JAVA, PHP, etc.)</span></li>
                <li> Web Design<br /><span>(HTML, CSS, SASS, etc.)</span></li>
                <li> System analysis & design</li>
                <li> Database analysis & design<br /><span>(SQL, MySQL)</span></li>
              </ul>
            </v-flex>
          </div>
        </v-flex>

        <v-flex md4 xs12 align-content-center>
            <div class="bordered">
              <v-flex>
                <v-icon x-large class="bluegrey--text text--lighten-2">touch_app</v-icon>
              </v-flex>
              <v-flex class="my-4">
                <div class="headline text-xs-center">UI/UX</div>
              </v-flex>
              <v-flex>
                  <ul v-if="languageMode">
                  <li> Tests Utilisateurs<br /><span>(Sondages, entrevues, etc.)</span></li>
                  <li> Strategie et planification <br /><span>(Recherche, meilleures pratiques, etc.)</span></li>
                  <li> Conception UX<br /><span>(Prototypes, wireframes, etc.)</span></li>
                  <li> Conception UI<br /><span>(Sketch, XD, InVision, etc.)</span>
                  <li> Recherche et analyse UX/UI</li>
                </ul>
                <ul v-else>
                    <li> Usability Testing <br /><span>(Surveys, Interviews, etc.)</span></li>
                    <li> Strategy & Planning <br /><span>(UX Research, Best practices, etc.)</span></li>
                    <li> UI/UX Design<br /><span>(Prototyping, Wireframes, etc.)</span></li>
                    <li> Visual Design<br /><span>(Sketch, XD, InVision, etc.)</span>
                    <li> UX/UI Research and Analytics</li>
                  </ul>
              </v-flex>
            </div>
          </v-flex>

          <v-flex md4 xs12 align-content-center>
              <div class="bordered">
                <v-flex>
                  <v-icon x-large class="bluegrey--text text--lighten-2">brush</v-icon>
                </v-flex>
                <v-flex class="my-4">
                  <div v-if="languageMode" class="headline text-xs-center">GRAPHISME</div>
                  <div v-else class="headline text-xs-center">DESIGN</div>
                </v-flex>
                <v-flex>
                  <ul v-if="languageMode">
                    <li> Identité <br /><span>(Logo, marque commerciale, etc.)</span></li>
                    <li> Imprimé <br /><span>(Brochrue, affiche, etc.)</span></li>
                    <li> Conception Web <br /><span>(Wireframes, visuel, etc.)</span></li>
                    <li> Conception Mobile/Tablette<br /></li>
                    <li> Animations <br /><span>(Transition CSS, Flash, etc.)</span></li>
                  </ul>
                  <ul v-else>
                    <li> Branding <br /><span>(Logo, Indentity, etc.)</span></li>
                    <li> Print Design <br /><span>(Brochrues, Posters, etc.)</span></li>
                    <li> Web Design <br /><span>(Wireframes, Layouts, etc.)</span></li>
                    <li> Mobile/Tablet Design<br /></li>
                    <li> Animations & Motion Graphics<br /><span>(CSS Transitions, Flash, etc.)</span></li>
                  </ul>
                </v-flex>
              </div>
            </v-flex>

        </v-layout>
      </section>

        <section id="quotes">
            <v-layout wrap>
               <v-flex md6 xs12>
                  <div class="testimonial-quote group">
                    <div class="quote-container">
                      <blockquote>
                          <p v-if="languageMode">Rick a des fortes compétences en programmation front-end et back-end. Il est une personne précieuse pour quelconque entreprise.”</p>
                          <p v-else>Rick is skilled in both front-end and back-end development. He is undoubtedly a great asset for any organization.”</p>
                      </blockquote>
                      <cite v-if="languageMode"><span>Thanh Nguyen</span><br>
                          Directeur de la technologie<br>
                          Applauz, KLF Group
                      </cite>
                      <cite v-else><span>Thanh Nguyen</span><br>
                        Director of technology<br>
                        Applauz, KLF Group
                    </cite>
                    </div>
                  </div>
               </v-flex>
               <v-flex md6 xs12>
                  <div class="testimonial-quote group">
                    <div class="quote-container">
                      <blockquote>
                          <p v-if="languageMode">Rick possède une très grande conscience professionnelle. Il a su mener à bien et à leurs termes les différents projets dont il avait la charge.”</p>
                          <p v-else>Rick is a professional who invariably understands exactly what a project is all about. He consistently produces high quality work in a timely fashion.”</p>
                      </blockquote>
                      <cite v-if="languageMode"><span>Christian Langlois</span><br>
                        Chef de production et réseau<br>
                      Transcontinental

                    </cite>
                    <cite v-else><span>Christian Langlois</span><br>
                      Team lead production and network<br>
                        Transcontinental
                  </cite>
                    </div>
                  </div>
               </v-flex>
            </v-layout>
       </section>

        <footerWeb />

        <br />   <br />
    </v-content>
  </v-app>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import footerWeb from '@/components/footerWeb'
export default {
  name: 'home',
  components: {
    footerWeb
  },
  computed: {
    ...mapGetters(['languageMode'])
  }
}
</script>
