import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircleMoreIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050816] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-12">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + text */}
          <div className="space-y-4">
            <img src="/logo.png" alt="SSC Logo" className="h-10 w-auto" />

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
            <h4 className="text-sm font-semibold text-white mb-3">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>+91 70878 15515</li>
              <li>contact@sscglobal.in</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5">
              <p className="text-sm font-semibold text-white mb-3">
                Connect With Us :
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition"
                >
                  <MessageCircleMoreIcon className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/10 pt-4 text-[11px] md:text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>© 2025 Swastik Sales Corporation. All rights reserved.</span>
          <span>Built with precision & reliability.</span>
        </div>
      </div>
    </footer>
  );
}
