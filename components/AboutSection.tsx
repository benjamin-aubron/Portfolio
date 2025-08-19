import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section id="about" title="A propos"> 
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-10">
        <div>
          <div className="leading-8 py-2">
            Développeur front end, je maîtrise le Framework{" "}
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-4 pb-[1px] mr-1"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M23.749 30.005c-.119.063-.109.083.005.025a.3.3 0 0 0 .095-.061c0-.021 0-.021-.1.036m.24-.13c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.047c0-.027-.016-.021-.079.031m.156-.094c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.048c0-.025-.016-.02-.079.032m.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032m.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.8 15.8 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a341 341 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416 416 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.57.57 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.6.6 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.8.8 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a603 603 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.4 16.4 0 0 0 3.285-2.885a15.94 15.94 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333s-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a17 17 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.62.62 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z"
                ></path>
              </svg>{" "}
              Next.JS
            </span>
            . Je cherche à mettre mes compétences techniques et ma créativité au service de projets innovants. De plus, je suis avec attention les changements de paradigmes autour des technologies{" "}
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="web3.png"
                alt="blockchain network"
                className="inline items-center h-5 pb-1 mr-2"
              />
              blockchain et web 3.0
            </span>
            . Je participe également  à des projets open source tels que le projet{" "}
            <a
              href="https://github.com/dataforgoodfr/13_eclaireur_public"
              target="_blank"
              className="hover:underline text-[--secondaryColor] hover:text-[--primaryColor]"
            >
              @éclaireur public
            </a>
            .
          </div>
          <div className="leading-8 py-2">
            Je suis une personne curieuse et désireuse de comprendre la complexité de notre monde. Je m'intéresse à différents domaines tels que la
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="geopolitique.png"
                alt="earth"
                className="inline items-center h-5 pb-1 mr-2"
              />
              géopolitique
            </span>
            ,{" "}
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="economie.png"
                alt="coin"
                className="inline items-center h-5 pb-1 mr-2"
              />
              l'économie et la finance
            </span>{" "}
            ainsi que la.{" "}
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="sociologie.png"
                alt="social network"
                className="inline items-center h-5 pb-1 mr-2"
              />
              sociologie.
            </span>
          </div>
          <div className="leading-8 py-2">
            Sur mon temps libre, j'aime découvrir la 
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="cuisine.png"
                alt="chef hat"
                className="inline items-center h-5 pb-1 mr-2"
              />
              cuisine du monde
            </span>
            , jouer au 
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="badminton.png"
                alt="badminton racket"
                className="inline items-center h-5 pb-0.5 mr-2"
              />
              badminton
            </span>{" "}
            et je suis trésorier dans une association pour la promotion du 
            <span className="py-[3px] px-2 bg-neutral-950 border border-neutral-800 rounded-md whitespace-nowrap">
              <img
                src="donsang.png"
                alt="Blood drop"
                className="inline items-center h-5 pb-1 mr-1"
              />
              Don de Sang
            </span>
            .
          </div>
        </div>
        <img src="photo.png" alt="My photo" className="w-80 rounded-full" />
      </div>
    </Section>
  );
}
