import { useEffect, useState } from 'react'
import './App.css'

const sections = [
  { id: 'overview', label: 'Documentation', icon: '◫' },
  { id: 'privacy', label: 'Privacy policy', icon: '◈' },
  { id: 'support', label: 'Support', icon: '↗' },
]

function App() {
  const [active, setActive] = useState(() => window.location.hash.slice(1) || 'overview')
  useEffect(() => {
    document.body.dataset.page = active
    const syncPage = () => setActive(window.location.hash.slice(1) || 'overview')
    window.addEventListener('popstate', syncPage)
    window.addEventListener('hashchange', syncPage)
    return () => { window.removeEventListener('popstate', syncPage); window.removeEventListener('hashchange', syncPage) }
  }, [active])
  const navigate = (id) => {
    setActive(id)
    document.body.dataset.page = id
    window.history.pushState(null, '', `#${id}`)
  }
  return <div className="site-shell">
    <aside className="sidebar">
      <a className="brand" href="#overview" onClick={() => navigate('overview')} aria-label="Visteon Meetings home"><span>Visteon Meetings</span></a>
      <div className="sidebar-label"></div>
      <nav className="side-nav" aria-label="Main navigation">{sections.map((section) => <button key={section.id} className={`nav-item ${active === section.id ? 'active' : ''}`} onClick={() => navigate(section.id)}><span className="nav-icon">{section.icon}</span><span>{section.label}</span>{active === section.id && <span className="nav-arrow">↗</span>}</button>)}</nav>
      
    </aside>
    <main className="main-content">
      <header className="topbar"><div className="breadcrumb"><span>VISTEON MEETINGS</span><span className="crumb-slash">/</span><span>HELP CENTER</span></div></header>
      <section id="overview" className="hero section-anchor"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />THE VISTEON MEETINGS GUIDE</div><h1>Meet with<br /><span>more presence.</span></h1><p className="hero-description">Everything you need to know about bringing Zoom meetings along for the ride.</p><button className="primary-button" onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}>Explore the guide <span>↓</span></button></div>
        <div className="hero-art" aria-label="Illustration of a person joining a video meeting in a car"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-sun" /><div className="art-window"><div className="window-top"><span /><span /><span /><i>● LIVE</i></div><div className="person"><div className="person-head" /><div className="person-body" /><div className="person-shirt" /></div><div className="window-caption"><span className="caption-dot" /> Connected to your meeting</div></div><div className="art-tag tag-top"><span>✳</span> In the moment</div><div className="art-tag tag-bottom"><span className="signal-icon">⌁</span><span>Clear, focused<br />conversations</span></div><div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✳</div></div><div className="hero-index"></div></section>
      <section className="intro section-anchor" aria-label="About Visteon Meetings"><div className="intro-body"><h2>Meetings that<br />move with you.</h2><div className="intro-copy"><p>Visteon Meetings brings your Zoom meetings to your vehicle screen, so you can stay connected when your day takes you on the road.</p><p>Here you’ll find a simple overview of how the app works, how your information is handled, and where to find help.</p></div></div></section>
      <section id="guide" className="guide-section section-anchor">
        
        <div className="guide-heading"><h2>Using Visteon Meetings<span className="brand-period">.</span></h2></div>
        <article className="guide-overview"><span className="guide-icon">◫</span><div><h3>Overview</h3><p>Visteon Meetings integrates with Zoom and allows users to authenticate using QR code login, connect their Zoom account, and start or join meetings.</p></div></article>
        <div className="guide-grid">
          <article className="guide-card"><div className="guide-card-label"><span>01</span> SETUP</div><h3>Adding the app</h3><h4>Prerequisites</h4><ul className="guide-list"><li>Active Zoom account</li><li>Access to the Visteon Meetings Automotive Android app</li><li>A device capable of scanning QR codes, or any device with a web browser to enter the code manually</li></ul><h4>Steps</h4><ol className="guide-list numbered"><li>Open Visteon Meetings.</li><li>Scan the QR code on the login screen, or open the displayed link in a browser and enter the code. Click <strong>Confirm</strong>.</li><li>Review the requested scopes and permissions, then click <strong>Approve</strong>.</li><li>Return to Visteon Meetings after authorization.</li></ol></article>
          <article className="guide-card"><div className="guide-card-label"><span>02</span> IN A MEETING</div><h3>Start or join a scheduled meeting</h3><ol className="guide-list numbered"><li>Open Visteon Meetings.</li><li>Select the <strong>Home</strong> tab.</li><li>On the scheduled meeting list, select <strong>Start/Join Meeting</strong>.</li></ol><div className="guide-callout"><span>↗</span><p>Your upcoming meetings appear in the scheduled meeting list.</p></div></article>
          <article className="guide-card"><div className="guide-card-label"><span>03</span> DISCONNECT</div><h3>Removing the app</h3><ol className="guide-list numbered"><li>Sign in to Zoom Marketplace.</li><li>Go to <strong>Manage → Added Apps</strong>.</li><li>Select <strong>Visteon Meetings</strong>.</li><li>Click <strong>Remove</strong> and confirm.</li></ol></article>
          <article className="guide-card after-card"><div className="guide-card-label"><span>04</span> AFTER REMOVAL</div><h3>What happens next</h3><ul className="guide-list"><li>Zoom access tokens are revoked.</li><li>Access to the Zoom integration is removed.</li><li>Reauthorization is required to reconnect.</li></ul></article>
        </div>
      </section>      <section id="privacy" className="privacy-section section-anchor"><div className="privacy-heading"><div><h2>Privacy policy<span className="brand-period">.</span></h2></div></div><p className="privacy-lead">Your privacy matters. Here’s a straightforward look at the information used by the Visteon Meetings automotive application.</p><div className="policy-document">
        <div className="policy-block"><div className="policy-card-top"><span>01</span><span className="policy-symbol">↗</span></div><h3>Information we use</h3><p><strong>OAuth access and refresh tokens</strong> authenticate with Zoom APIs. Short-lived tokens are brokered through our AWS Lambda proxy.</p><p><strong>Meeting schedule details</strong> are fetched from Zoom API endpoints at <code>api.Zoom.us/v2</code> and shown on the vehicle screen.</p></div>
        <div className="policy-block"><div className="policy-card-top"><span>02</span><span className="policy-symbol">—</span></div><h3>What we don’t collect</h3><p>The AWS Lambda proxy operates statelessly. We don’t persist data in cloud storage.</p><p>Video, audio, screen sharing, and meeting recordings are processed in real time by the official Zoom Meeting SDK. They are never recorded, stored, or sent to our servers.</p><p>We don’t track, collect, or share personally identifiable information or telemetry.</p></div>
        <div className="policy-block"><div className="policy-card-top"><span>03</span><span className="policy-symbol">⌑</span></div><h3>On-device security</h3><p>OAuth access and refresh tokens stored on Android are encrypted using EncryptedSharedPreferences and the Google Tink library.</p><p>Communications between the app, AWS proxy, and Zoom APIs use HTTPS with TLS 1.2 or TLS 1.3.</p></div>
        <div className="policy-block"><div className="policy-card-top"><span>04</span><span className="policy-symbol">◇</span></div><h3>Third parties</h3><p>We don’t sell, rent, or share user data with third parties. Data interactions take place between your client app, our secure AWS proxy, and the official Zoom API infrastructure.</p></div></div><div className="policy-note"></div></section>
      <section id="support" className="support-section section-anchor"><div className="support-content"><h2>Contact us</h2><div className="support-details"><div className="support-detail"><h3>Get in touch</h3><p>For technical support, account inquiries, or general questions, reach out to our team directly via email.</p><a className="support-email" href="mailto:arun.kumar@visteon.com">arun.kumar@visteon.com <span>↗</span></a><p className="response-time"><strong>Response time</strong> We aim to respond to all inquiries within 24 to 48 business hours.</p></div><div className="support-detail"><h3>How can we help?</h3><p>When emailing us, please include the following details so we can assist you faster:</p><ul><li>Your account name or registered email address</li><li>A brief description of the issue or feature request</li><li>Screenshots or error details, if applicable</li></ul></div></div></div></section><footer className="footer"><a className="footer-brand" href="#overview" onClick={() => navigate('overview')}>Visteon Meetings<span>.</span></a><div><a href="#privacy" onClick={() => navigate('privacy')}>Privacy</a><a href="#support" onClick={() => navigate('support')}>Support</a></div><span className="copyright">© 2026 VISTEON MEETINGS</span></footer>
    </main>
  </div>
}

export default App








