interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <div
    className={`glass rounded-xl p-6 transition-all duration-300 ${
      hover ? "glass-hover hover:glow-sm" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
