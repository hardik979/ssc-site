// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-[#050816] text-slate-300 ">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + text */}
          <div className="space-y-3">
            {/* 👇 Replace /logo.png with your logo path */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="IndusTech logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
              Leading the future of manufacturing with innovative solutions and
              precision engineering.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Rubber Molding</li>
              <li>Plastic Injection</li>
              <li>Automation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>+91 70878 15515</li>
              <li>contact@sscglobal.in</li>
              <li className="flex gap-3 text-lg">
                {/* Social icons placeholders */}
                <span>in</span>
                <span>●</span>
                <span>▶</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-4 text-[11px] md:text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© 2025 Swastik Sales Corporation. All rights reserved.</span>
          <span>Built with precision & reliability.</span>
        </div>
      </div>
    </footer>
  );
}
