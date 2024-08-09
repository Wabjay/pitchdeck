import React, { ReactNode } from "react"
import Head from "react-helmet"
// or import Head from next/head for Next.js

const DOMAIN = "https://pitchdeck.design"
const MAIN_KEYWORDS = "pitch deck design, create pitch deck, design, content"

const DEFAULT_IMAGE_CARD = "https://pitchdeck.design/card.jpg"
const DEFAULT_TITLE = "Pitch deck - Pitch deck examples | Pitch deck template | Pitch deck designers for hire"
const DEFAULT_DESCRIPTION = "Browse a list of free pitch deck examples from founders, Purchase a Pitch deck template for your next raise, and Hire a pitch deck designer to make a deck for you. Close funding deals with Angel investors, Filter pitch deck by industry, Raise Amount and Stage"

const FAVICON_SOURCE = "https://pitchdeck.design/favicon.ico"

const POSTFIX_TITLE = " - PitchDeck Design"

type PropTypes = {
  title?: string
  description?: string
  link: string
  keywords?: string
  imageCard?: string
  largeTwitterCard?: boolean
  addPostfixTitle?: boolean
  noIndex?: boolean
  children?: ReactNode
}

function Helmet({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  link,
  keywords = "",
  imageCard = DEFAULT_IMAGE_CARD,
  largeTwitterCard = false,
  addPostfixTitle = false,
  noIndex = false,
  children = null,
}: PropTypes) {
  let metaTitle: string

  if (addPostfixTitle) { 
    metaTitle = title + POSTFIX_TITLE
  } else {
    metaTitle = title
  }

  const metaDesc = description ?? DEFAULT_DESCRIPTION
  const metaLink = DOMAIN + link

  const metaKeywords = keywords.length
    ? MAIN_KEYWORDS + ", " + keywords
    : MAIN_KEYWORDS

  let metaImageCard: string

  if (imageCard) {
    if (imageCard.startsWith("https")) {
      metaImageCard = imageCard
    } else {
      metaImageCard = DOMAIN + imageCard
    }
  } else {
    metaImageCard = DEFAULT_IMAGE_CARD
  }

  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"

  const twitterCardType = largeTwitterCard ? "summary_large_image" : "summary"

  return (
    <Head defer={true}>
      <html lang="en" />
      <meta name="title" content={metaTitle} />

      <meta name="description" content="Pitchdeck Design supports your business to design beautiful powerpoint slides for your next presentation to get the numbers" />
      <link rel="canonical" href={metaLink} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="icon" href={FAVICON_SOURCE} />

      {/* OG Tags */}
      {/* https://ogp.me/ */}
      <meta property="og:url" content={metaLink} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="..." />
      <meta property="og:image" content={metaImageCard} />
      <meta property="og:site_name" content={metaLink} />

      {/* Twitter tags */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started */}
      <meta name="twitter:site" content="pixelgum studio" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:image" content={metaImageCard} />
      <meta name="twitter:url" content={metaLink} />
      {/* https://moz.com/blog/meta-referrer-tag */}
      <title>Pitchdeck design | Create Pitchdeck, Find Pitchdeck from top companies</title>
      <meta name="referrer" content="origin-when-crossorigin" />
      
      {children}
    </Head>
  )
}

export default Helmet


// Twitter Title tag not found
// Twitter Description tag not found
// Twitter Card tag not found
