import React from 'react';
import { Helmet } from 'react-helmet';

const DOMAIN = "https://pitchdeck.design"
const MAIN_KEYWORDS = "pitch deck design, create pitch deck, design, content"

const DEFAULT_IMAGE_CARD = "https://pitchdeck.design/card.jpg"
const DEFAULT_TITLE = "Pitchdeck design | Create Pitchdeck, Find Pitchdeck from top companies"
const DEFAULT_DESCRIPTION = "Browse a list of winning pitch deck examples from founders that have closed rounds of investments from angel investors"

const FAVICON_SOURCE = "https://pitchdeck.design/favicon.ico"

const POSTFIX_TITLE = " - PitchDeck Design"

const Schema = ({ name, description,url, imageUrl }) => {
  const metaLink = DOMAIN + url
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: name ? name : DEFAULT_TITLE,
    description: description ? description : DEFAULT_DESCRIPTION,
      url: metaLink,
    image: imageUrl ? [imageUrl] : DEFAULT_IMAGE_CARD,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default Schema;

