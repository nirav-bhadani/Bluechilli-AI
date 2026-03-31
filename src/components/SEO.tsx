import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
}

const SEO = ({ title, description, canonical, ogType = "website" }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Canonical
    const canonicalUrl = canonical || (window.location.origin + window.location.pathname);
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // Update OpenGraph tags
    const updateMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.startsWith("og:") ? "property" : "name", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    updateMeta('meta[property="og:title"]', "og:title", title);
    updateMeta('meta[property="og:description"]', "og:description", description);
    updateMeta('meta[property="og:url"]', "og:url", canonicalUrl);
    updateMeta('meta[property="og:type"]', "og:type", ogType);
    updateMeta('meta[property="og:locale"]', "og:locale", "en_GB");
    updateMeta('meta[property="og:site_name"]', "og:site_name", "Bluechilli AI");
    updateMeta('meta[name="twitter:title"]', "twitter:title", title);
    updateMeta('meta[name="twitter:description"]', "twitter:description", description);
    updateMeta('meta[name="twitter:site"]', "twitter:site", "@wearebluechilli");
    updateMeta('meta[name="twitter:creator"]', "twitter:creator", "@wearebluechilli");
    updateMeta('meta[name="author"]', "author", "Bluechilli AI Ltd.");
  }, [title, description, canonical, ogType]);

  return null;
};

export default SEO;
