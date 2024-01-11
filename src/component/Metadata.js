import React from 'react';
import { Helmet } from 'react-helmet';

const MetadataComponent = ({ title, description, page, image, tags }) => {
  return (
    <div className=''>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name='keywords' content={`pitchdeck, powerpoint design, ${tags}`} />
        <meta name='url' content={`http://pitchdeck.design/${page ? page : ''}`} />
        <meta name='og:url' content={`http://pitchdeck.design/${page ? page : ''}`} />
        <meta name='og:image' content={`${image ? image : "/src/assets/Logo.svg"}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={`http://pitchdeck.design/${page ? page : ''}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`http://pitchdeck.design/${page ? page : ''}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${image ? image : "/src/assets/Logo.svg"}`} />
      </Helmet>
    </div>
  );
};

export default MetadataComponent;