import imgLogo from "../../imports/centurio-digital-agency-negative_1.png";

const ASTERISK_PATH =
  "M150.542 350V233.649L68.3581 316.031L33.706 281.379L115.571 199.721H0V150.8H116.351L33.9691 68.6211L68.3581 33.706L150.542 116.093V0H199.458V115.571L281.121 33.706L316.031 68.6211L233.649 150.8H350V199.721H234.17L316.031 281.379L281.379 316.031L199.458 233.907V350H150.542Z";

export default function ClosingSection() {
  return (
    <section className="w-full bg-[#0954c4] relative overflow-hidden">
      <style>{`
        @keyframes closing-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .closing-asterisk-path {
          animation: closing-spin 30s linear infinite;
          transform-origin: 175px 175px;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto px-6 flex flex-col min-h-[620px] py-16 gap-10">

        {/* Spinning asterisk */}
        <div className="w-[240px] h-[240px] shrink-0">
          <svg viewBox="0 0 350 350" className="size-full" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="350"
                id="closing-filter"
                width="350"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="2 2" numOctaves="3" result="noise" seed="5242" stitchTiles="stitch" type="fractalNoise" />
                <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                  <feFuncA
                    tableValues="0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                    type="discrete"
                  />
                </feComponentTransfer>
                <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
                <feFlood floodColor="#0268F3" result="color1Flood" />
                <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                <feMerge result="effect1_noise">
                  <feMergeNode in="shape" />
                  <feMergeNode in="color1" />
                </feMerge>
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="closing-grad" x1="34" x2="317" y1="99.5" y2="292.7">
                <stop stopColor="#0268F3" />
                <stop offset="1" stopColor="#209FFF" />
              </linearGradient>
            </defs>
            <g filter="url(#closing-filter)" opacity="0.9">
              <path d={ASTERISK_PATH} fill="#83D8FF" className="closing-asterisk-path" />
              <path d={ASTERISK_PATH} fill="url(#closing-grad)" className="closing-asterisk-path" />
            </g>
          </svg>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 6vw, 88px)",
            lineHeight: 1.05,
            letterSpacing: "-2.1px",
            color: "#83d8ff",
            maxWidth: "820px",
          }}
        >
          Asolate redefines everyday essentials
        </h2>

        {/* Contact info */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#edf9ff",
          }}
        >
          <p>Centurio Digital Agency AB</p>
          <p>centuriodigital.agency · hello@centuriodigital.agency</p>
          <p style={{ fontWeight: 700 }}>Catalinabacken 2, 183 68 TÄBY - SWEDEN</p>
          <p>+46-8-5016 13 00</p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer bar */}
        <div className="border-t border-white/20 pt-5 flex justify-between items-center">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "white",
              lineHeight: "1.4",
            }}
          >
            Copyright © 2026 – Centurio Digital Agency AB – All rights reserved.
          </p>
          <img src={imgLogo} alt="Centurio Digital Agency" style={{ height: "40px", width: "auto" }} />
        </div>
      </div>
    </section>
  );
}
