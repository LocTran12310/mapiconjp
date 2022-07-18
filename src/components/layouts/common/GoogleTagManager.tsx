import Script from "next/script";
import React, { useEffect, useState } from "react";
import { BASE_CONSTANTS, DEV_ENV } from "../../../constants/base.constants";

const GoogleTagManager = () => {
  const [isDevEnvironment, setDevEnvironment] = useState(true)
  useEffect(() => {
    const host = window.location.host;
    const isDevEnv = DEV_ENV.some(e => host.includes(e))
    setDevEnvironment(isDevEnv);
  }, [])
  
  return (
    isDevEnvironment
    ? <React.Fragment></React.Fragment>
    : <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${BASE_CONSTANTS.GTM_ID}');
      `}
    </Script>
  );
};

export default GoogleTagManager;