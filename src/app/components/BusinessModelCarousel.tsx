import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import imgOperates from "../../imports/Frame-7/212e354473c0634c74473e6bc6223c285909d8d4.png";
import imgSustained from "../../imports/Frame-8/8463482b1f40c152249cd04e21ecc0bf33031c4d.png";
import imgValue from "../../imports/Frame-9/263eb2855fc3ecbfcdb4a8bb7531a111c471dd85.png";
import imgGrow from "../../imports/Frame-10/6fa1012f640687ecdafec21f1c7775e6a274ae5f.png";

const slides = [
  {
    title: "How Asolate operates",
    img: imgOperates,
    body: (
      <span>
        Asolate operates{" "}
        <strong>as a brand built around curated essentials and strategic partnerships with Latin American makers.</strong>{" "}
        Its model is designed to create value through product curation, retail margins, and a future digital commerce
        ecosystem that will extend the brand experience.{" "}
        <strong>The brand grows by building trust, consistency, and strong product value</strong> before scaling the
        e-commerce layer.
      </span>
    ),
  },
  {
    title: "How the model is sustained?",
    img: imgSustained,
    body: (
      <span>
        The model is sustained through a lean,{" "}
        <strong>digital-first structure</strong> that prioritizes agility, efficiency, and smart curation.{" "}
        <strong>By avoiding the weight of a traditional retail model,</strong> Asolate can focus its resources on
        quality, brand experience, and scalability. This makes the brand flexible, efficient, and easier to grow.
      </span>
    ),
  },
  {
    title: "What gives the product real value?",
    img: imgValue,
    body: (
      <span>
        For Asolate, sustainability is not optional. The value of the product comes from{" "}
        <strong>natural fibers, long-lasting quality,</strong> and a capsule-wardrobe mindset that reduces waste and
        overconsumption. Durable materials and responsible sourcing are part of the brand's core promise and what
        makes each piece feel worth keeping.
      </span>
    ),
  },
  {
    title: "How the brand can grow",
    img: imgGrow,
    body: (
      <span>
        Asolate has strong growth potential because its model can expand through{" "}
        <strong>new product categories, more brand partnerships, and a future e-commerce platform.</strong> As
        awareness grows, the brand can scale while keeping its curated and premium identity intact. The long-term
        opportunity is to build a recognizable and trusted Latin American essentials brand.
      </span>
    ),
  },
];

const TOTAL = slides.length;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 50 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -50 }),
};

const stagger = {
  center: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

const imgAnim = {
  enter: { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function BusinessModelCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((c) => c - 1);
  };

  const next = () => {
    if (current === TOTAL - 1) return;
    setDirection(1);
    setCurrent((c) => c + 1);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  function renderSlide(index: number) {
    const slide = slides[index];
    const isReversed = index % 2 === 1; // Z-pattern: even=image left, odd=image right

    const textBlock = (
      <motion.div
        className="lg:w-5/12 shrink-0 flex flex-col justify-center gap-6 py-8 lg:py-0"
        variants={stagger}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <motion.h2
          variants={item}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-1.4px",
            color: "#0f3063",
          }}
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={item}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          {slide.body}
        </motion.p>
      </motion.div>
    );

    const imageBlock = (
      <motion.div
        className="lg:flex-1 h-full flex items-center justify-center overflow-hidden"
        variants={imgAnim}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <img
          src={slide.img}
          alt={slide.title}
          className="max-h-full max-w-full object-contain"
        />
      </motion.div>
    );

    return (
      <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col lg:flex-row lg:items-center gap-12 py-12">
        {isReversed ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
      </div>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="overflow-hidden relative" style={{ height: "620px" }}>
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

      {/* Bottom navigation */}
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
          {Array.from({ length: TOTAL }).map((_, i) => (
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
          disabled={current === TOTAL - 1}
          className="flex items-center justify-center w-7 h-7 text-[#0f3063] disabled:opacity-25 hover:opacity-60 transition-opacity"
          aria-label="Slide siguiente"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
