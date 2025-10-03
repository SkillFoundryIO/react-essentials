export default function AlertButton({ onClick, className, children }) {
    return (
      <button className={className} onClick={onClick}>{children}</button>
    );
}