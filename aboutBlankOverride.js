// aboutBlankOverride.js
document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.endsWith('.html')) {
    link.addEventListener('click', e => {
      e.preventDefault(); // stop normal navigation
      const newTab = window.open('about:blank', '_blank');
      fetch(href)
        .then(res => res.text())
        .then(html => {
          newTab.document.open();
          newTab.document.write(html);
          newTab.document.close();
        })
        .catch(err => console.error('Failed to load game:', err));
    });
  }
});
