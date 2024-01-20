import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetadataComponent = ({ title, description, page, image }) => {
  return (
    <HelmetProvider>
    <div className=''>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name='url' content={`https://pitchdeck.design/${page !== undefined ? page : ''}`} />
        <meta name='og:url' content={`https://pitchdeck.design/${page !== undefined ? page : ''}`} />
        <meta name='og:image' content={`${image !== undefined ? image : "/src/assets/Logo.svg"}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={`https://pitchdeck.design/${page !== undefined ? page : ''}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`https://pitchdeck.design/${page !== undefined ? page : ''}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${image !== undefined ? image : "/src/assets/Logo.svg"}`} />
        <link rel='canonical' href={`https://pitchdeck.design/${page !== undefined ? page : ''}`} />

      </Helmet>
    </div>
    </HelmetProvider>
  );
};

export default MetadataComponent;