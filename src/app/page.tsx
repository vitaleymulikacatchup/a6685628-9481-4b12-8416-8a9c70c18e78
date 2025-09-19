use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="Astra Logo"
          logoWidth={200}
          logoHeight={50}
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "FAQ", id: "faq" }, { name: "Footer", id: "footer" }]}
          buttonText="Start Free Trial"
          onButtonClick={() => {/* Handle action */}}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Astra"
          subtitle="Your trusted partner for seamless SaaS solutions."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="Astra offers advanced solutions catered to your needs, pulling from the best practices in software development. Our team is dedicated to creating efficient systems that help your business thrive."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding the economics behind Astra tokens."
          tokenData={[
            { value: 'Ticker: AST', description: 'The symbol for Astra.' },
            { value: 'Supply: 1M', description: 'Total supply of Astra tokens.' },
            { value: 'Liquidity: 75%', description: 'Percentage allocated to liquidity.' },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <CentralFAQ
          items={[
            { title: "What is Astra?", content: "Astra is a SaaS platform that offers comprehensive tools for businesses." },
            { title: "How can I start?", content: "Simply click on the 'Get Started' button to begin your journey with Astra!" },
          ]}  
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "About", items: [{ label: "Company", onClick: () => {} }, { label: "Careers", onClick: () => {} }] },
            { title: "Services", items: [{ label: "Consulting", onClick: () => {} }, { label: "Support", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Astra. All Rights Reserved."
          onPrivacyClick={() => {} }
        />
      </div>
    </SiteThemeProvider>
  );
}
