import FooterConsult from './FooterConsult'
import FooterContact from './FooterContact'
import Copyright from './Copyright'

export default function Footer() {
    return (
      <footer className="bg-yellow-600">
        {/* Love to hear from you */}
        <FooterConsult />

        {/* Address */}
        {/* Phone */}
        {/* Tour Button */}
        <FooterContact />

        {/* Copyright */}
        <Copyright />
      </footer>
    )
  }