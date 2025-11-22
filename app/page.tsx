"use client";

/* eslint-disable react/no-unescaped-entities */

import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    title: "Initiation",
    phase: "Mutation génétique",
    description:
      "Des altérations de l'ADN surviennent dans des gènes clés (oncogènes, gènes suppresseurs de tumeurs) sous l'effet de facteurs environnementaux, de prédispositions héréditaires ou lors d'erreurs de réplication.",
    highlight:
      "Exposition aux rayons UV, tabac, agents chimiques et virus oncogènes : principaux inducteurs."
  },
  {
    title: "Promotion",
    phase: "Expansion clonale",
    description:
      "La cellule mutée échappe aux contrôles cellulaires. Elle se divise activement en exploitant des voies de signalisation pro-prolifératives et résiste à l'apoptose.",
    highlight:
      "Des signaux inflammatoires chroniques constituent un terrain fertile à cette étape."
  },
  {
    title: "Progression",
    phase: "Instabilité génomique",
    description:
      "L'accumulation de mutations supplémentaires augmente l'agressivité. Le micro-environnement tumoral se remodèle pour nourrir la masse en expansion.",
    highlight:
      "Angiogénèse et métabolisme reprogrammé fournissent oxygène et nutriments à la tumeur."
  },
  {
    title: "Invasion & Métastases",
    phase: "Diffusion systémique",
    description:
      "Les cellules acquièrent la capacité de migrer, de traverser la matrice extracellulaire et d'envahir d'autres tissus via la circulation sanguine ou lymphatique.",
    highlight:
      "99 % des cellules métastatiques meurent en transit : celles qui survivent sont hautement adaptatives."
  }
];

const hallmarks = [
  {
    title: "Prolifération soutenue",
    points: [
      "Activation permanente d'oncogènes (EGFR, RAS, MYC).",
      "Autonomie vis-à-vis des signaux de croissance."
    ]
  },
  {
    title: "Évasion des freins",
    points: [
      "Inactivation de p53, RB ou BRCA.",
      "Dysfonctionnement des points de contrôle du cycle cellulaire."
    ]
  },
  {
    title: "Résistance à la mort programmée",
    points: [
      "Surexpression de protéines anti-apoptotiques (BCL-2).",
      "Adaptations pour survivre au stress oxydatif."
    ]
  },
  {
    title: "Immortalité réplicative",
    points: [
      "Réactivation de la télomérase (TERT).",
      "Stabilité des télomères assurée malgré les divisions."
    ]
  },
  {
    title: "Angiogénèse",
    points: [
      "Sécrétion de VEGF pour stimuler de nouveaux vaisseaux.",
      "Boucle d'hypoxie via HIF-1α."
    ]
  },
  {
    title: "Invasion et métastases",
    points: [
      "Transition épithélio-mésenchymateuse (EMT).",
      "Sécrétion de protéases pour dégrader la matrice."
    ]
  }
];

const preventionPillars = [
  {
    heading: "Réduire l'exposition",
    details:
      "Limiter le tabac, l'alcool, l'exposition solaire sans protection et les agents chimiques professionnels. Vaccination ciblée (HPV, Hépatite B)."
  },
  {
    heading: "Habitudes protectrices",
    details:
      "Alimentation riche en fibres, fruits et légumes variés, activité physique régulière, maintien d'un poids santé."
  },
  {
    heading: "Dépistage & surveillance",
    details:
      "Participation aux programmes nationaux (sein, colo-rectal, col de l'utérus). Consulter dès les premiers symptômes atypiques."
  }
];

const treatments = [
  {
    name: "Chirurgie",
    description:
      "Retirer la tumeur localisée. Souvent première étape curative. Précision augmentée par la robotique et l'imagerie."
  },
  {
    name: "Radiothérapie",
    description:
      "Utilise des rayonnements ionisants ciblés pour détruire l'ADN tumoral. Techniques modernes : modulation d'intensité (IMRT), protonthérapie."
  },
  {
    name: "Chimiothérapie",
    description:
      "Agents cytotoxiques agissant sur les cellules en division rapide. De plus en plus personnalisée selon les signatures moléculaires."
  },
  {
    name: "Thérapies ciblées",
    description:
      "Inhibiteurs spécifiques de voies altérées (tyrosine kinases, PARP). Nécessitent un profilage génomique."
  },
  {
    name: "Immunothérapie",
    description:
      "Stimule le système immunitaire (anticorps anti-PD-1/PD-L1, CAR-T). Réponses durables chez certains patients."
  }
];

const glossary = [
  {
    term: "Oncogène",
    definition:
      "Gène dont l'activation favorise la transformation d'une cellule normale en cellule cancéreuse."
  },
  {
    term: "Gène suppresseur de tumeur",
    definition:
      "Gène chargé de freiner la division cellulaire ou d'induire la mort programmée ; sa perte d'activité contribue au cancer."
  },
  {
    term: "Métastase",
    definition:
      "Implantation d'une cellule cancéreuse dans un organe distant du foyer initial via la circulation."
  },
  {
    term: "Micro-environnement tumoral",
    definition:
      "Ensemble des cellules immunitaires, stromales, vasculaires et des signaux chimiques entourant la tumeur."
  },
  {
    term: "Biomarqueur",
    definition:
      "Molécule mesurable permettant de diagnostiquer, de prédire la réponse thérapeutique ou de surveiller la maladie."
  }
];

const quizQuestions = [
  {
    question:
      "Quel processus permet aux cellules cancéreuses d'obtenir de nouveaux vaisseaux sanguins ?",
    answer: "L'angiogénèse"
  },
  {
    question:
      "Quelle protéine est couramment surnommée le 'gardien du génome' ?",
    answer: "p53"
  },
  {
    question:
      "Quel type de traitement exploite le système immunitaire pour cibler les cellules tumorales ?",
    answer: "L'immunothérapie"
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(91,91,242,0.2),_transparent_45%),_radial-gradient(circle_at_bottom,_rgba(255,111,97,0.15),_transparent_55%)] pb-24 text-slate-100">
      <section className="relative overflow-hidden px-6 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(91,91,242,0.08)_0,_rgba(12,16,27,0)_65%)]" />
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary-200/70">
            Comprendre les cellules cancéreuses
          </p>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-6xl">
            Explorer la biologie du cancer pour mieux prévenir, diagnostiquer et
            traiter
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Cette présentation interactive propose une synthèse claire et
            scientifiquement fondée sur la formation des tumeurs, les signes
            caractéristiques des cellules cancéreuses et les leviers actuels de
            prévention et de prise en charge.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="rounded-full border border-primary-200/40 px-4 py-2">
              Niveau : avancé vulgarisé
            </span>
            <span className="rounded-full border border-primary-200/40 px-4 py-2">
              Durée de lecture : 10 minutes
            </span>
            <span className="rounded-full border border-primary-200/40 px-4 py-2">
              Sources scientifiques internationales
            </span>
          </div>
        </motion.div>
      </section>

      <section className="mt-24 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Repères essentiels"
          title="Pourquoi les cancers émergent-ils ?"
          description="Comprendre les facteurs de risque aide à agir en amont. Trois dimensions se renforcent mutuellement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StatCard
            label="Environnement"
            value="40 %"
            context="Des cancers sont attribuables à des facteurs modifiables : tabac, alcool, UV, polluants."
          />
          <StatCard
            label="Génétique"
            value="5-10 %"
            context="Résultent de mutations héréditaires (ex : BRCA1/2). Suivi génétique et conseil spécialisé recommandés."
          />
          <StatCard
            label="Biologie du vieillissement"
            value="60 ans"
            context="Âge médian au diagnostic : accumulation de dommages ADN et micro-environnement permissif."
          />
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Cycle tumoral"
          title="De la mutation à la métastase"
          description="Chaque étape offre des fenêtres d'intervention : prévention, dépistage, traitement personnalisé."
        />
        <div className="mt-12">
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Hallmarks"
          title="Les caractéristiques fondamentales des cellules cancéreuses"
          description="Ces attributs, décrits par Hanahan & Weinberg, permettent aux cellules tumorales de croître et de se propager."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hallmarks.map((hallmark) => (
            <motion.article
              key={hallmark.title}
              className="rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-lg font-semibold text-primary-100">
                {hallmark.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {hallmark.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Prévention"
          title="Agir sur trois piliers complémentaires"
          description="La prévention repose sur des comportements individuels, des politiques publiques et un accès facilité au dépistage."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {preventionPillars.map((pillar) => (
            <motion.div
              key={pillar.heading}
              className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-primary-900/30 p-6 shadow-lg shadow-black/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-xl font-semibold text-primary-100">
                {pillar.heading}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{pillar.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Parcours patient"
          title="Du diagnostic à la prise en charge personnalisée"
          description="La médecine de précision combine imagerie, biologie moléculaire et concertation pluridisciplinaire."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-2xl border border-white/5 bg-slate-900/70 p-8 shadow-lg shadow-black/30"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary-100">
              Les étapes clés du diagnostic moderne
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-primary-200">
                  Imagerie multimodale :
                </span>{" "}
                IRM, scanner, TEP-Scan pour localiser, évaluer l'étendue et
                préparer un geste chirurgical.
              </li>
              <li>
                <span className="font-semibold text-primary-200">
                  Biopsie guidée :
                </span>{" "}
                prélèvement tissulaire analysé au microscope et via biologie
                moléculaire pour identifier mutations et biomarqueurs.
              </li>
              <li>
                <span className="font-semibold text-primary-200">
                  Classification pronostique :
                </span>{" "}
                grade histologique, stade TNM, signatures génétiques qui orientent
                la stratégie thérapeutique.
              </li>
              <li>
                <span className="font-semibold text-primary-200">
                  Réunion de Concertation Pluridisciplinaire (RCP) :
                </span>{" "}
                oncologues, radiologues, chirurgiens, biologistes définissent un
                plan de traitement personnalisé.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="grid h-max gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            {treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="rounded-2xl border border-primary-400/30 bg-primary-500/10 p-5 text-sm text-primary-50 shadow-lg shadow-primary-900/40"
              >
                <h4 className="text-base font-semibold text-white">
                  {treatment.name}
                </h4>
                <p className="mt-2 text-sm text-primary-100/80">
                  {treatment.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Ressources"
          title="Vers une compréhension active"
          description="Approfondissez vos connaissances et mobilisez vos acquis grâce au glossaire et au quiz éclair."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-2xl border border-white/5 bg-slate-900/70 p-8 shadow-lg shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl font-semibold text-primary-100">
              Glossaire critique
            </h3>
            <dl className="mt-6 space-y-5 text-sm text-slate-200">
              {glossary.map((entry) => (
                <div
                  key={entry.term}
                  className="rounded-xl border border-white/5 bg-slate-950/60 p-4"
                >
                  <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
                    {entry.term}
                  </dt>
                  <dd className="mt-2 text-slate-300">{entry.definition}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between gap-6 rounded-2xl border border-white/5 bg-gradient-to-br from-primary-900/50 via-slate-950/80 to-slate-900/60 p-8 text-sm text-slate-200 shadow-lg shadow-black/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-primary-100">
                Quiz express
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Testez vos connaissances : survolez chaque carte pour révéler la
                réponse.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {quizQuestions.map((item) => (
                <motion.div
                  key={item.question}
                  className="group relative overflow-hidden rounded-xl border border-primary-400/40 bg-slate-950/70 p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <p className="font-medium text-white">{item.question}</p>
                  <p className="mt-3 rounded-lg border border-primary-200/20 bg-primary-500/10 px-3 py-2 text-sm text-primary-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-32 px-6 sm:px-12 lg:px-24">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-sm text-slate-300 shadow-[0_20px_60px_-30px_rgba(91,91,242,0.8)]">
          <h2 className="text-2xl font-semibold text-white">
            Points clés à retenir
          </h2>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li>
              <span className="font-semibold text-primary-200">1.</span> Les
              cancers résultent d'accumulations de mutations génétiques et
              d'altérations du micro-environnement.
            </li>
            <li>
              <span className="font-semibold text-primary-200">2.</span>{" "}
              L'identification des hallmarks éclaire les stratégies de
              prévention, de dépistage et de traitement.
            </li>
            <li>
              <span className="font-semibold text-primary-200">3.</span> La
              personnalisation thérapeutique repose sur un diagnostic précis et
              multidisciplinaire.
            </li>
            <li>
              <span className="font-semibold text-primary-200">4.</span>{" "}
              L'implication des patients, des soignants et des politiques
              publiques est indispensable pour réduire l'impact des cancers.
            </li>
          </ul>
          <p className="mt-6 text-xs text-slate-400">
            Sources : Organisation Mondiale de la Santé, Institut National du
            Cancer (INCa), Nature Reviews Cancer (2023), Lancet Oncology.
          </p>
        </div>
      </section>
    </main>
  );
}
