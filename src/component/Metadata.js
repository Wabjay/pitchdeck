import React from 'react';
import { Helmet } from 'react-helmet';

const MetadataComponent = ({ title, description, page, image,tags }) => {
  return (
    <div className=''>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name='keywords' content={`pptdesigner, powerpoint design, ${tags}`} />
        <meta name='url' content={`http://pptdesigner.co/${page ? page : ''}`} />
        <meta name='og:url' content={`http://pptdesigner.co/${page ? page : ''}`} />
        <meta name='og:image' content={`${image ? image : "../assets/Logo.svg"}`} />
        {/* <link rel="" */}
        {/* Add more dynamic metadata as needed */}

        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
 
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>
    </div>
  );
};

export default MetadataComponent;