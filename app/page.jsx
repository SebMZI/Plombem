"use client";
import Advise from "./components/Advise";
import heroPic from "./assets/heroPic.svg";
import nousPic from "./assets/image-pnc.jpg";
import services1Pic from "./assets/plomb3.svg";
import services2Pic from "./assets/plomb2.svg";
import services3Pic from "./assets/plomb4.svg";
import Image from "next/image";
import Buttons from "./components/Buttons";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="phone:flex-col-reverse phone:py-14 py-24 w-full flex laptop:flex-row items-center justify-between px-5">
        <div className="uppercase">
          <h1 className="phone:text-3xl phone:mb-4 text-primary font-bold laptop:text-5xl laptop:mb-6 ">
            Votre Solution Plomberie de Qualité
          </h1>
          <h2 className="phone:text-lg phone:mb-10 laptop:text-2xl laptop:mb-14">
            Des Experts en Plomberie Prêts à Vous Servir
          </h2>
          <Buttons linkTo={"/#urgence"} name={"depannage express"} />
          <p className="lowercase mt-6 text-sm">
            + de 1000 clients accompagnés
          </p>
        </div>
        <Image
          width={500}
          src={heroPic}
          alt="réparation d'un évier qui fuit"
          className="phone:w-96 laptop:w-[500]"
        />
      </section>
      <section
        id="#nous-choisir"
        className="phone:flex-col-reverse phone:py-14 phone:gap-10 laptop:gap-0 py-24 flex laptop:flex-row  justify-around items-center w-full px-5
      "
      >
        <div className="pr-6">
          <h2 className="uppercase text-primary font-bold laptop:first-line:text-2xl mb-8 phone:text-xl">
            Pourquoi nous choisir ?
          </h2>
          <ul className="list-disc pl-6 mb-14 laptop:text-base flex flex-col gap-2 phone:text-sm ">
            <li className="text-justify">
              <span className="font-bold">Experts Confirmés</span> : Plus de 10
              ans d&apos;expérience en plomberie
            </li>
            <li className="text-justify">
              <span className="font-bold">Intervention Rapide</span> :
              Disponibles 24/7 pour les urgences
            </li>
            <li className="text-justify">
              <span className="font-bold">Service Personnalisé</span> : Adapté à
              vos besoins spécifiques.
            </li>
            <li className="text-justify">
              <span className="font-bold">Transparence Totale</span> : Tarifs
              clairs, conseils honnêtes.
            </li>
            <li className="text-justify">
              <span className="font-bold">Satisfaction Garantie</span>: Notre
              réputation parle d&apos;elle-même.
            </li>
            <li className="text-justify">
              <span className="font-bold">Qualité Inégalée</span>: Matériaux de
              haut niveau, résultats durables.
            </li>
          </ul>
          <Buttons linkTo={"/#contact"} name={"Demander un devis"} />
        </div>
        <Image
          className="rounded-lg"
          width={400}
          src={nousPic}
          alt="notre équipe de plombier"
        />
      </section>
      <section
        id="advise"
        className="bg-[#F2F4F8] w-full  laptop:px-10 py-20 phone:px-5"
      >
        <div className="uppercase text-center mb-11">
          <h2 className="text-primary font-bold laptop:text-2xl mb-2 phone:text-xl">
            Ce que pensent nos clients
          </h2>
          <p className=" max-w-2xl m-auto phone:text-sm">
            ils nous font confiance
          </p>
        </div>
        <div className="phone:grid phone:grid-cols-3 phone:gap-80 laptop:gap-12 laptop:overflow-hidden phone:overflow-scroll w-full laptop:flex laptop:flex-row laptop:justify-around">
          <Advise
            value={4}
            name={"Sophie B."}
            advise={
              "J'ai fait appel à Plombem pour une fuite d'eau dans ma cuisine, et je suis extrêmement satisfaite de leur service. Ils sont venus rapidement, ont résolu le problème de manière professionnelle, et leurs tarifs étaient très raisonnables. Je les recommande vivement à tous ceux qui ont besoin d'un plombier fiable et compétent. "
            }
          />
          <Advise
            value={5}
            name={"Thomas C."}
            advise={
              "J'ai fait appel à Plombem pour une fuite d'eau dans ma cuisine, et je suis extrêmement satisfaite de leur service. Ils sont venus rapidement, ont résolu le problème de manière professionnelle, et leurs tarifs étaient très raisonnables. Je les recommande vivement à tous ceux qui ont besoin d'un plombier fiable et compétent. "
            }
          />
          <Advise
            value={4}
            name={"Laura M."}
            advise={
              "J'ai fait installer une nouvelle salle de bains par Plombem, et je suis impressionné par leur expertise en matière de plomberie. Le résultat final est superbe, et ils ont terminé le projet dans les délais. Je suis très reconnaissant pour leur excellent travail."
            }
          />
        </div>
      </section>
      <section id="services" className=" w-full py-24 px-5 ">
        <div className="uppercase text-center mb-11">
          <h2 className="text-primary font-bold laptop:text-2xl mb-2 phone:text-xl">
            Découvrez Nos Solutions Plomberie
          </h2>
          <p className="phone:text-sm">
            Réparations, Installations et Entretien - Nous Couvrons Tout
          </p>
        </div>
        <div className="grid laptop:grid-cols-3 phone:grid-cols-1 phone:gap-10">
          <Services
            image={services1Pic}
            name={"fuites"}
            desc={"Experts en Détection et Réparation de Fuites"}
          />
          <Services
            image={services2Pic}
            name={"installation"}
            desc={"Mise en place pour Votre Confort et Sécurité"}
          />
          <Services
            image={services3Pic}
            name={"débouchage"}
            desc={"Votre Solution pour un Écoulement sans Problèmes"}
          />
        </div>
      </section>
      <section
        id="urgence"
        className="phone:px-5 uppercase w-full bg-primary text-[#FFFFFF] px-32 py-24"
      >
        <h2 className="laptop:text-4xl font-bold phone:text-2xl">
          Une Urgence ?
        </h2>
        <p className="mb-5 text-third laptop:text-2xl phone:text-xl">
          Appelez-nous dès maintenant!
        </p>
        <Buttons linkTo={"tel:0788963541"} name={"07 88 96 35 41"} />
      </section>

      <section id="contact" className="w-full py-24 phone:px-5">
        <div className="uppercase text-center mb-11">
          <h2 className="text-primary font-bold laptop:text-2xl mb-2 phone:text-xl">
            Nous Sommes à Votre Écoute
          </h2>
          <p className=" max-w-2xl m-auto phone:text-sm">
            Contactez-nous dès maintenant pour des solutions plomberie rapides
            et efficaces.
          </p>
        </div>
        <form className="flex flex-col max-w-screen-sm m-auto gap-3 ">
          <div className="phone:flex-col flex laptop:flex-row justify-between gap-6">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="lastname"
                className="text-secondary font-semibold"
              >
                Nom
              </label>
              <input
                type="text"
                id="lastname"
                className="bg-[#F2F4F8] h-10 outline-none pl-2"
              />
            </div>
            <div className=" flex flex-col w-full gap-1">
              <label htmlFor="name" className="text-secondary font-semibold">
                Prénom
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#F2F4F8] h-10 outline-none pl-2"
              />
            </div>
          </div>
          <div className="phone:flex-col flex laptop:flex-row justify-between gap-6 ">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="email" className="text-secondary font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#F2F4F8] h-10 outline-none pl-2"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="phone" className="text-secondary font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-[#F2F4F8] h-10 outline-none pl-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-secondary font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="bg-[#F2F4F8] outline-none p-2 mb-6"
            ></textarea>
          </div>
          <div className="text-center">
            <Buttons linkTo={"#"} name={"demander de l'aide"} />
          </div>
        </form>
      </section>
    </main>
  );
}
