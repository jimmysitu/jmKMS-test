document$.subscribe(() => {
  document.querySelectorAll('.arithmatex').forEach(el => {
    let texText = el.textContent || el.innerText;
    let isDisplay = false;
    if (texText.startsWith('\\(') && texText.endsWith('\\)')) {
      texText = texText.slice(2, -2);
    } else if (texText.startsWith('\\[') && texText.endsWith('\\]')) {
      texText = texText.slice(2, -2);
      isDisplay = true;
    } else if (el.classList.contains('display')) {
      isDisplay = true;
    }
    
    katex.render(texText, el, {
      displayMode: isDisplay,
      throwOnError: false,
      macros: {
        "\\llbracket": "\\mathopen{[\\![}",
        "\\rrbracket": "\\mathclose{]\\!]}"
      }
    });
  });
});
