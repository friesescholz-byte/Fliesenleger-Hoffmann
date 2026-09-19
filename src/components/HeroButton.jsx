import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroButton({
  children,
  onClick,
  href,
  to,
  variant = 'primary',
  className = '',
  icon: Icon = null,
  type = 'button',
  size = 'md',
  underline = false,
}) {
  const containerRef = useRef(null);

  // Default dimensions based on size for instantaneous flicker-free rendering
  const defaultDims = {
    sm: { w: 180, h: 48 },
    md: { w: 230, h: 56 },
    lg: { w: 260, h: 64 },
  }[size] || { w: 230, h: 56 };

  const [dims, setDims] = useState(defaultDims);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const w = Math.round(rect.width);
        const h = Math.round(rect.height);
        if (w > 0 && h > 0) {
          setDims((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
        }
      }
    };

    measure();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure);
      ro.observe(containerRef.current);
    }

    return () => {
      if (ro) ro.disconnect();
    };
  }, []);

  // SVG background colors per variant
  const variantStyles = {
    primary: {
      fill: 'fill-[#C66030] group-hover:fill-[#E46B2D]',
      stroke: 'stroke-white/85 group-hover:stroke-white',
      glow: 'group-hover:drop-shadow-[0_4px_16px_rgba(228,107,45,0.7)]',
      text: 'text-[#FAF6EC] group-hover:text-white',
    },
    secondary: {
      fill: 'fill-[#A94C20]/95 group-hover:fill-[#C66030]',
      stroke: 'stroke-white/70 group-hover:stroke-white',
      glow: 'group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]',
      text: 'text-[#FAF6EC] group-hover:text-white',
    },
    dark: {
      fill: 'fill-[#09182B] group-hover:fill-[#C66030]',
      stroke: 'stroke-white/80 group-hover:stroke-white',
      glow: 'group-hover:drop-shadow-[0_4px_16px_rgba(228,107,45,0.6)]',
      text: 'text-white group-hover:text-white',
    },
  };

  const v = variantStyles[variant] || variantStyles.primary;

  // Generous horizontal padding so text never crowds against the angled corner chamfers
  const sizeClasses = {
    sm: 'h-11 sm:h-12 px-7 sm:px-8 text-xs',
    md: 'h-13 sm:h-14 px-8 sm:px-9 text-xs sm:text-sm',
    lg: 'h-14 sm:h-16 px-9 sm:px-10 text-sm sm:text-base',
  }[size] || 'h-13 sm:h-14 px-8 sm:px-9 text-xs sm:text-sm';

  const w = dims.w;
  const h = dims.h;

  // Fixed corner chamfers: never distorted/stretched even if the button is 500px wide!
  const cutLeft = Math.min(28, Math.max(16, Math.round(w * 0.13)));
  const cutRightTop = Math.min(26, Math.max(14, Math.round(w * 0.12)));
  const cutRightBottom = Math.min(24, Math.max(12, Math.round(w * 0.11)));
  const tipY = Math.round(h * 0.22);
  const midLeftY = Math.round(h * 0.5);
  const bottomRightY = Math.round(h * 0.95);

  const polygonPath = `M 0,${midLeftY} L ${cutLeft},0 L ${w - cutRightTop},0 L ${w},${tipY} L ${w - cutRightBottom},${bottomRightY} L 0,${h} Z`;

  const clipPathStyle = `polygon(${cutLeft}px 0%, calc(100% - ${cutRightTop}px) 0%, 100% 22%, calc(100% - ${cutRightBottom}px) 95%, 0% 100%, 0% 50%)`;

  const innerContent = (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${sizeClasses} select-none w-full`}
    >
      {/* Dynamic Non-Distorting Angled Polygon Background SVG */}
      <svg
        className={`absolute inset-0 w-full h-full ${v.fill} ${v.stroke} filter drop-shadow-md ${v.glow} transition-all duration-300 pointer-events-none`}
        style={{ overflow: 'visible' }}
      >
        <path
          d={polygonPath}
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Special Sheen: 100% strictly clipped to the dynamic polygon contour */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
        style={{ clipPath: clipPathStyle }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-700 ease-out" />
      </div>

      {/* Button Label & Optional Icon with generous breathing room */}
      <span
        className={`relative z-10 flex items-center justify-center gap-2 font-display font-black uppercase tracking-wider whitespace-nowrap ${v.text} ${
          underline ? 'underline underline-offset-4 decoration-2' : ''
        } transition-colors duration-200 pointer-events-none`}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />}
      </span>
    </div>
  );

  const wrapperClasses = `relative inline-block group cursor-pointer transform hover:-translate-y-1 hover:scale-103 active:scale-97 transition-all duration-300 ${className}`;

  if (to) {
    return (
      <Link to={to} className={wrapperClasses} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={wrapperClasses} onClick={onClick}>
        {innerContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClasses}>
      {innerContent}
    </button>
  );
}
