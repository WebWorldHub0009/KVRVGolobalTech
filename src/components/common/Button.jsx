export default function Button({ children, href, type = "primary" }) {
    const base = "px-6 py-3 rounded font-semibold inline-block transition";
    const styles = type === "primary"
        ? "bg-yellow-500 hover:bg-yellow-600 text-black"
        : "bg-gray-900 hover:bg-gray-800 text-white";

    return (
        <a href={href} className={`${base} ${styles}`}>
            {children}
        </a>
    );
}
