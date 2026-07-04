export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-[70px] pb-8">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="font-display font-semibold text-lg flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-white inline-block" />
              Forgemedia
            </a>
            <p className="text-muted text-sm mt-4 max-w-[280px] leading-relaxed">
              Premium content and social media management for brands that want to lead their industry, not just show
              up in it.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-wider uppercase text-muted-dim mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#process" className="text-muted text-sm hover:text-white transition-colors">Process</a></li>
              <li><a href="#services" className="text-muted text-sm hover:text-white transition-colors">Services</a></li>
              <li><a href="#niches" className="text-muted text-sm hover:text-white transition-colors">Niches</a></li>
              <li><a href="#faq" className="text-muted text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-wider uppercase text-muted-dim mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted text-sm hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="text-muted text-sm hover:text-white transition-colors">Video Editing</a></li>
              <li><a href="#services" className="text-muted text-sm hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#services" className="text-muted text-sm hover:text-white transition-colors">Personal Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-wider uppercase text-muted-dim mb-4">Get in touch</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@forgemedia.com" className="text-muted text-sm hover:text-white transition-colors">hello@forgemedia.com</a></li>
              <li><a href="https://calendly.com/forgemediabusiness/30min" target="_blank" rel="noopener" className="text-muted text-sm hover:text-white transition-colors">Book a strategy call</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 mt-14 pt-6 border-t border-glass-border text-sm text-muted-dim">
          <span>© 2026 Forgemedia. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
