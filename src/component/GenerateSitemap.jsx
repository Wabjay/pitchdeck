import React, { useEffect, useMemo, useState } from "react";
import { store } from "../store";
import { createSlug } from "./slug";

export default function GenerateSitemap({ templates, pitches, blogs }) {
  const [seoData, setSeoData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [pitchData, setPitchData] = useState([]);

  useMemo(() => {
    // console.log(pitches, blogs, templates)
    const pitchData = pitches?.map((seo, i) => (
      <url key={i}>
        <loc>https://pitchdeck.design/pitch/{createSlug(seo.title)}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>{" "}
      </url>
    ));
    setPitchData(pitchData);
    // eslint-disable-next-line array-callback-return
    const templateData = templates?.map((seo, i) => {
      <url key={i}>
        <loc>https://pitchdeck.design/template/{createSlug(seo.name)}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>{" "}
      </url>
    });
    setTemplateData(templateData);

    // eslint-disable-next-line array-callback-return
    const blogData = blogs?.map((seo, i) => {
      <url key={i}>
        <loc>https://pitchdeck.design/template/{createSlug(seo.title)}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>;
    });
    setBlogData(blogData);

    // const combinedData = pitchData.concat(templateData, blogData)
    // setSeoData([...seoData, ...combinedData])
  }, [blogs, pitches, templates]);

  return (
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://pitchdeck.design/</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>

        <url>
          <loc>https://pitchdeck.design/template</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>

        <url>
          <loc>https://pitchdeck.design/make-deck</loc>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
        <url>
          <loc>https://pitchdeck.design/blog</loc>
          <changefreq>weekly</changefreq>
          <priority>0.5</priority>
        </url>
        <url>
          <loc>https://pitchdeck.design/aboutus</loc>
          <changefreq>monthly</changefreq>
          <priority>0.4</priority>
        </url>

        {pitchData}
        {templateData}
        {blogData}
{/* {console.log(blogs)}     */}
{console.log(pitchData)}    
{console.log(templates)}    
  </urlset>
  );
}
