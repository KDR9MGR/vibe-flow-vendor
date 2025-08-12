export function setPageSEO({
  title,
  description,
  canonical,
}: {
  title: string;
  description?: string;
  canonical?: string;
}) {
  if (title) document.title = title;

  if (description) {
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
}
