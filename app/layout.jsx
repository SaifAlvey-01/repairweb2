// "use client";

import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import FixedCallButtons from "../components/buttons/FixedCallButtons";
import { GTM_ID } from "../lib/gtm";
import { Suspense } from "react";
import Script from "next/script";
import { NavigationEvents } from "../components/navigation-events";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "UAE Repair Expert | Home Appliance Repair Service",
  description:
    "UAE Repair Expert is a leading home appliance repair company in Dubai and Abu Dhabi. We offer repair services for Samsung, Bosch, Lg and Siemens appliances.",
  keywords: [
    "Bosch Service Center",
    "Lg Service Center",
    "Samsung Service Center",
    "Siemens Service Center",
    "Bosch Repair Center",
    "Lg Repair Center",
    "Samsung Repair Center",
    "Siemens Repair Center",
  ],
  creator: "cyhammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ClickGuard Tracking */}
      <Script
        defer
        type="application/javascript"
        src="https://tracker.clickguard.com/s/accX2N66iys4d/astOjZQIDYItA"
      />
      {/* <!--  ClickCease.com tracking--> */}
      <Script
        type="text/javascript"
        async
        dangerouslySetInnerHTML={{
          __html: `
          var script = document.createElement('script'); script.async = true;
          script.type = 'text/javascript'; var target =
          'https://www.clickcease.com/monitor/stat.js'; script.src = target;var
          elem = document.head;elem.appendChild(script);
          `,
        }}
      />
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          {/* <!--  ClickCease.com tracking--> */}
          <a href="https://www.clickcease.com" rel="nofollow">
            <img src="https://monitor.clickcease.com" alt="ClickCease" />
          </a>
          {/* <!--  ClickCease.com tracking--> */}
        </noscript>
        <Header />
        {children}
        <FixedCallButtons />
        <Footer />
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
