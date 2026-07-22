import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ borderTop: "3px solid var(--color-ink)", padding: "26px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <span className="mono" style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>
          © 2026 Michel César — Ghost with Precision.
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          <a className="icon-btn" style={{ width: 40, height: 40 }} href="https://github.com/devmichel15" target="_blank" rel="noopener" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a className="icon-btn" style={{ width: 40, height: 40 }} href="https://www.instagram.com/michel.cesar1" target="_blank" rel="noopener" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
