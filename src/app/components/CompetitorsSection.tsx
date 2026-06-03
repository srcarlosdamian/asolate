import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import imgPangaia from "../../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.35.04_p.m..png";
import imgArket from "../../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.35.22_p.m..png";
import imgEscvdo from "../../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.35.39_p.m..png";
import imgFOG from "../../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.35.58_p.m..png";
import imgPatagonia from "../../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.36.19_p.m..png";

function SingleImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />;
}

function PanagiaImages() { return <SingleImage src={imgPangaia} alt="Pangaia" />; }
function ArketImages() { return <SingleImage src={imgArket} alt="Arket" />; }
function EscvdoImages() { return <SingleImage src={imgEscvdo} alt="Escvdo" />; }
function FOGImages() { return <SingleImage src={imgFOG} alt="Fear of God" />; }
function PatagoniaImages() { return <SingleImage src={imgPatagonia} alt="Patagonia" />; }

type BrandSlide = {
  num: string;
  name: string;
  ImageGrid: () => JSX.Element;
  link: string;
  description: JSX.Element;
  isReference?: boolean;
};

const brandSlides: BrandSlide[] = [
  {
    num: "01",
    name: "Pangaia",
    ImageGrid: PanagiaImages,
    link: "https://pangaia.com",
    description: (
      <span>
        Pangaia is a materials science-driven fashion brand focused on creating{" "}
        <strong>sustainable essentials</strong> through{" "}
        <strong>innovation, research, and responsible production.</strong> The brand combines{" "}
        <strong>minimal aesthetics</strong> with advanced natural and recycled materials,
        positioning itself as a{" "}
        <strong>global reference for conscious and purpose-driven fashion.</strong>
      </span>
    ),
  },
  {
    num: "02",
    name: "Arket",
    ImageGrid: ArketImages,
    link: "https://www.arket.com/en-ww/women/",
    description: (
      <span>
        Arket is a Nordic lifestyle brand that offers{" "}
        <strong>minimal, functional, and timeless essentials</strong> inspired by Scandinavian
        design. The brand focuses on{" "}
        <strong>quality, durability, and responsible production</strong>, combining modern
        aesthetics with a more conscious approach to everyday fashion and living.
      </span>
    ),
  },
  {
    num: "03",
    name: "Escvdo",
    ImageGrid: EscvdoImages,
    link: "https://www.escvdo.com",
    description: (
      <span>
        Escvdo is a Peruvian fashion brand that blends{" "}
        <strong>Latin American craftsmanship, artisanal techniques,</strong> and{" "}
        <strong>contemporary design</strong> to create timeless pieces with strong cultural
        identity. The brand focuses on <strong>ethical production</strong>, handmade processes,
        and elevated essentials, while also operating in international markets such as Scandinavia.
      </span>
    ),
  },
  {
    num: "04",
    name: "Fear of God Essentials",
    ImageGrid: FOGImages,
    link: "https://fearofgod.com",
    description: (
      <span>
        Is a contemporary fashion line focused on <strong>premium everyday basics</strong> with a
        minimalist and oversized aesthetic. The brand combines{" "}
        <strong>elevated simplicity</strong>, <strong>comfort-driven design</strong>, and strong
        cultural influence, positioning essentials as timeless wardrobe staples. Through its
        global retail presence, the brand also{" "}
        <strong>reaches consumers in Scandinavian markets</strong>, where minimalism and
        high-quality essentials are strongly valued.
      </span>
    ),
  },
  {
    num: "05",
    name: "Patagonia",
    ImageGrid: PatagoniaImages,
    isReference: true,
    link: "https://www.patagonia.com/home/",
    description: (
      <span>
        Patagonia is an outdoor apparel brand recognized globally for its commitment to{" "}
        <strong>environmental responsibility</strong>, <strong>durable products</strong>, and{" "}
        <strong>ethical production practices</strong>. The brand combines functional design with a
        strong sustainability mission, becoming a reference for consumers who value quality,
        longevity, and conscious consumption, including in Scandinavian markets where sustainable
        lifestyles are highly prioritized.
      </span>
    ),
  },
];

const TOTAL_SLIDES = 2 + brandSlides.length;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 50 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -50 }),
};

const staggerChildren = {
  center: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariant = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

const imgVariant = {
  enter: { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function CompetitorsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((c) => c - 1);
  };

  const next = () => {
    if (current === TOTAL_SLIDES - 1) return;
    setDirection(1);
    setCurrent((c) => c + 1);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  function renderSlide(index: number) {
    // Intro slides
    if (index === 0 || index === 1) {
      const isIndirect = index === 0;
      return (
        <motion.div
          className="max-w-[1300px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-16 py-16"
          variants={staggerChildren}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div className="lg:w-5/12 shrink-0" variants={itemVariant}>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-2px",
                color: "#0f3063",
              }}
            >
              {isIndirect ? "Indirect competition" : "Direct competition"}
            </h2>
          </motion.div>
          <motion.div className="lg:w-7/12" variants={itemVariant}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", lineHeight: "1.7", color: "rgba(0,0,0,0.7)" }}>
              {isIndirect ? (
                <>
                  Asolate competes indirectly{" "}
                  <strong>with fast fashion and mass-market basics brands such as Calzedonia, H&M, and Uniqlo.</strong>{" "}
                  These brands dominate through accessibility, scale, and price, but they often rely on high product
                  turnover and do not offer the same level of curation, cultural identity, or intentional brand
                  storytelling that Asolate aims to build.{" "}
                  <strong>
                    Asolate stands apart by offering a more thoughtful and emotionally resonant proposition, focused
                    on quality, sustainability, and Latin American identity.
                  </strong>
                </>
              ) : (
                <>
                  Asolate's direct competitors are brands such as{" "}
                  <strong>Pangaia, Arket, Escvdo, Fear of God</strong>, which share a similar purpose of offering
                  elevated essentials, conscious design, and strong brand values. These are brands that also operate
                  in the Scandinavian region and appeal to consumers looking for minimalism, quality, and a more
                  intentional way of buying.{" "}
                  <strong>
                    Asolate competes with them by bringing a culturally distinctive Latin American perspective,
                    combining accessibility, consistency, and thoughtful design within the essentials category.
                  </strong>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      );
    }

    // Brand slides
    const brand = brandSlides[index - 2];
    const { ImageGrid } = brand;
    const isReversed = (index - 2) % 2 === 1;

    const textBlock = (
      <motion.div
        className="lg:w-5/12 shrink-0 flex flex-col justify-center gap-5 py-8 lg:py-0"
        variants={staggerChildren}
        initial="enter"
        animate="center"
        exit="exit"
      >
        {brand.isReference && (
          <motion.p
            variants={itemVariant}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: 1.5,
              letterSpacing: "-0.7px",
              color: "#0f3063",
            }}
          >
            Reference
          </motion.p>
        )}
        <motion.div variants={itemVariant}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "52px", lineHeight: 1, letterSpacing: "-1.3px", color: "#0f3063" }}>
            {brand.num}.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "40px", lineHeight: 1.1, letterSpacing: "-1px", color: "#0f3063", marginTop: "6px" }}>
            {brand.name}
          </p>
        </motion.div>
        <motion.p variants={itemVariant} style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7", color: "rgba(0,0,0,0.7)" }}>
          {brand.description}
        </motion.p>
        <motion.a
          variants={itemVariant}
          href={brand.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(0,0,0,0.5)", textDecoration: "underline", wordBreak: "break-all" }}
        >
          {brand.link}
        </motion.a>
      </motion.div>
    );

    const imageBlock = (
      <motion.div
        className="lg:flex-1 h-full flex items-center justify-center overflow-hidden"
        variants={imgVariant}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <ImageGrid />
      </motion.div>
    );

    return (
      <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col lg:flex-row lg:items-center gap-10 py-10">
        {isReversed ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
      </div>
    );
  }

  return (
    <section className="w-full bg-white">
      {/* Slide content */}
      <div className="overflow-hidden relative" style={{ height: '620px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="h-full"
          >
            {renderSlide(current)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation: arrows + dots */}
      <div className="flex items-center justify-center gap-3 py-7">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center justify-center w-7 h-7 text-[#0f3063] disabled:opacity-25 hover:opacity-60 transition-opacity"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-1.5 bg-[#0f3063]" : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === TOTAL_SLIDES - 1}
          className="flex items-center justify-center w-7 h-7 text-[#0f3063] disabled:opacity-25 hover:opacity-60 transition-opacity"
          aria-label="Slide siguiente"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
