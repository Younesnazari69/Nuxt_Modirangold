<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";
import { onBeforeMount, ref, onServerPrefetch } from "vue";

const store = useDataStore();
const Pages = ref<any>({ List: null });


useHead({
    title: 'Deutsch',
    meta: [
      { name: 'description', content: 'Willkommen bei Darbastan! Für Informationen über unsere Gerüstdienstleistungen, Preise und Kontaktmöglichkeiten in deutscher Sprache besuchen Sie unsere Seite auf Deutsch. Holen Sie sich kostenlos eine Beratung für Gerüste und schnelle Angebotsanfragen.' },
      { name: 'keywords', content: 'Gerüste, Darbastan, scaffolding, Gerüstdienstleistungen, kostenlose Beratung, Darbastan auf Deutsch' },
      { property: 'og:title', content: 'Deutsch' },
      { property: 'og:description', content: 'Willkommen bei Darbastan! Für Informationen über unsere Gerüstdienstleistungen, Preise und Kontaktmöglichkeiten in deutscher Sprache besuchen Sie unsere Seite auf Deutsch. Holen Sie sich kostenlos eine Beratung für Gerüste und schnelle Angebotsanfragen.' },
      { property: 'og:url', content: 'https://darbastan.com/deutsch' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/deutsch' },
    ]
})
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'Gerüstbauer Darbastan.com'">
    <div class="service">
      <div class="container">
        <div class="row">
          <p class="lead">
            Ein Gerüst ist eine vorübergehende, im Allgemeinen wieder
            verwendbare Hilfskonstruktion aus meist standardisierten
            Gerüstbauteilen aus Holz und/oder Metall – Stahl oder Aluminium, die
            als Arbeitsplattform, zur Befestigung der Schalung oder als
            Schutzeinrichtung verwendet wird. Sie suchen einen Gerüstbauer in
            Ihrer Nähe? Darbastan.com ist das Fachportal für Gerüstbau und
            Gerüstbauer. Hier finden Sie unverbindlich, kostenlos und ohne
            Risiko einen Gerüstbauspezialisten! Mit 1000 registrierten
            Fachbetrieben und über 1M jährlichen Besuchern ist Darbastan.com
            seit 2016 Iranweit eine der umfangreichsten Anfragen- und
            Informationsplattformen rund um das Thema Gerüstbau. Unser Ziel:
            Endkunden und Betriebe schnell und unkompliziert zusammenbringen!
            GERÜST MIETEN AUF DARBASTAN.COM Passendes Gerüst für jede
            Arbeitshöhe finden – unverbindlich und kostenlos: Rollgerüste,
            Fassadengerüste, Baugerüste, Arbeitsbühnen oder Spezialgerüste für
            den Selbstaufbau, die Vermietung oder den professionellen Gerüstbau:
            In 2 Minuten das eigene Projekt unverbindlich beschreiben und
            kostenlos Angebote von mehreren Betrieben vergleichen.
          </p>
          <p class="lead">
            <router-link class="btn btn-lg btn-primary"
                    @click="() => store.FetchSearch('Stellenausschreibung')"
                    :to="{
                      name: 'tag',query: {
                        tag: 'Stellenausschreibung',
                          },
                    }"
                    >Stellenausschreibung</router-link
                  >
            <a href="/ModularScaffolding" class="btn btn-lg btn-secondary"
              >Modulares Gerüst</a
            >
            <router-link
              class="btn btn-lg btn-primary"
              :to="{
                name: 'articles',
                params: {
                  pageId: 3166,
                  name: 'Gerüstrohre-und-schläuche',
                },
              }"
              >Gerüstrohre und -schläuche</router-link
            >
            <a
              href="https://wa.me/message/USQNHQLQNKGMA1"
              class="btn btn-lg btn-success"
              >WhatsApp-Kontakt</a
            >
         
          </p>
          <router-link class="btn btn-lg btn-info" :to="{ name: 'RegistrationDE' }">Antragsformular zur Vermittlung von Gerüstbauern an Unternehmen</router-link>

             <!-- FAQs Start -->
             <div class="faqs">
            <div class="container">
              <div class="section-header">
                <h3>Antworten auf Ihre Fragen Für Gerüste</h3>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div id="accordion-1">
                    <div class="card wow fadeInLeft" data-wow-delay="0.1s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseOne"
                        >
                        Wir werden eingestellt, indem wir eine Anfrage nach persönlichen und beruflichen Informationen registrieren?
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          Nein, darbastan.com gibt keine Garantien bezüglich Ihrer Anstellung
                           aber je nach Wunsch von Auftragnehmern oder Unternehmen Lebenslauf
                          werde sie Ihnen vorstellen
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.2s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                        >
                        Ist es wichtig, die Informationen korrekt einzugeben?
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          Ja, Priorität haben immer diejenigen, die genauere Informationen haben
                          gefüllt haben
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.3s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                        >
                        Wie lade ich Dokumente hoch?
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          Ihre Dokumente müssen im PDF-Format vorliegen
                          Es gibt eine Datei mit Personalfoto, persönlichen Informationen und Aufzeichnungen
                          Arbeiten und das Bild der Gerüstbauzertifikate
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.4s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                        >
                          Ist darbastan.com für Werbung auf der Website oder in den Netzwerken haftbar?
                          Sind Sie für die Veröffentlichung in sozialen Medien verantwortlich?
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          Nein, lieber Arbeiter oder Lehrer, wenn Sie den Hinweis sehen
                         Rekrutierung über die Website von Darbostan oder soziale Netzwerke
                         Vor jedem Vertrag kann die Gültigkeit des Unternehmens bestehen
                         Möchten Sie dort beschäftigt werden? Informieren Sie sich über das Krankenhaus
                         übernimmt diesbezüglich keine Verantwortung
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.5s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseFive"
                        >
                          Gerüstbauer oder Unternehmen verlangt als Gegenleistung Gewalt
                          Was ist die Aufgabe der eingeführten Kraft?
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          Respektierter Auftragnehmer, bevor Sie sich mit dem Meister oder Lehrling einigen
                          Überprüfen Sie den beruflichen Werdegang und das Fachwissen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div id="accordion-2">
                    <div class="card wow fadeInRight" data-wow-delay="0.1s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseSix"
                        >
                        Was muss ich tun, um in Unternehmen eingestellt zu werden?
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          Sie müssen uns zunächst Ihre persönlichen und beruflichen Daten mitteilen
                          Senden Sie es dann nach Genehmigung, wenn dies von Auftragnehmern verlangt wird oder
                          Ihnen werden Unternehmen zur Verfügung gestellt
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInRight" data-wow-delay="0.2s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseSeven"
                        >
                        Sind meine Informationen öffentlich zugänglich?
                        </a>
                      </div>
                      <div
                        id="collapseSeven"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          Nach der Registrierung Ihrer Daten akzeptieren Sie lediglich, dass Ihre Daten gespeichert werden
                          für Auftragnehmer oder Unternehmen verfügbar sein.
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInRight" data-wow-delay="0.3s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseEight"
                        >
                        Erfassen Sie persönliche und berufliche Informationen für Branchenexperten
                        Ist der Gerüstbau kostenlos?
                        </a>
                      </div>
                      <div
                        id="collapseEight"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          Ja, die Registrierung ist für Fachleute aus der Gerüstbaubranche kostenlos
                          Sei 
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- FAQs End -->

        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.lead{
    text-align: justify;
    text-align-last: left;
    direction: ltr;
}
.container
{
  text-align: left;
}
.faqs{
  float: left;
}
.faqs .card-header [data-toggle="collapse"]:after {
  float: right;
}
.faqs .card-header a {
  direction: ltr;
}
.service .section-header {
  direction: ltr;
}
</style>
