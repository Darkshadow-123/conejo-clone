export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-site px-6 md:px-[67px] ${className}`}>
      {children}
    </div>
  );
}
