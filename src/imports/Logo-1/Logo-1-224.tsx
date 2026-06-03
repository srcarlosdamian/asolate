import svgPaths from './svg-e194jneapq';

export default function Logo1({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 33 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgPaths.map((pathData, index) => (
          <path
            key={index}
            d={pathData.path}
            fill={pathData.fill}
            stroke={pathData.stroke}
            strokeWidth={pathData.strokeWidth}
          />
        ))}
      </svg>
      <span className="font-display font-bold tracking-wider text-[#0A1D37] text-xl">
        ASOLATE
      </span>
    </div>
  );
}
