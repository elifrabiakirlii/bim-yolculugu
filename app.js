(function () {
  const SITE = window.SITE;
  const THEMES = ["night", "concrete"];
  let lang = localStorage.getItem("bim-lang") || "tr";
  let theme = localStorage.getItem("bim-theme") || "night";
  if (theme === "blueprint") theme = "night";
  if (!THEMES.includes(theme)) theme = "night";

  const weeksEl = document.getElementById("weeks");

  function t(key) {
    return SITE.ui[lang][key] || key;
  }

  function statusLabel(status) {
    const L = SITE.ui[lang].labels;
    if (status === "done") return L.statusDone;
    if (status === "active") return L.statusActive;
    return L.statusTodo;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bim-theme", theme);
    document.querySelectorAll(".theme__btn").forEach((btn) => {
      const id = btn.getAttribute("data-theme-set");
      btn.classList.toggle("is-active", id === theme);
      const label = t("theme." + id);
      if (label) {
        btn.title = label;
        btn.setAttribute("aria-label", label);
      }
    });
    const themeGroup = document.querySelector(".theme");
    if (themeGroup) {
      const groupLabel = t("theme.label");
      if (groupLabel) themeGroup.setAttribute("aria-label", groupLabel);
    }
  }

  function applyUI() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val) el.textContent = val;
    });
    document.querySelectorAll(".lang__btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    applyTheme();
    document.title =
      lang === "tr"
        ? "BIM Yolculuğu — Öğrenme & Portföy"
        : "BIM Journey — Learning & Portfolio";
  }

  function listBlock(title, items) {
    if (!items || !items.length) return "";
    return `
      <div class="block">
        <h4>${title}</h4>
        <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`;
  }

  function linksBlock(title, links) {
    if (!links || !links.length) return "";
    return `
      <div class="block">
        <h4>${title}</h4>
        <ul>
          ${links
            .map(
              (l) =>
                `<li><a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a></li>`
            )
            .join("")}
        </ul>
      </div>`;
  }

  function docsBlock(title, docs) {
    return linksBlock(title, docs);
  }

  function storyBlock(title, paragraphs) {
    if (!paragraphs || !paragraphs.length) return "";
    return `
      <div class="block story">
        <h4>${title}</h4>
        ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
      </div>`;
  }

  function articleBlock(title, article) {
    if (!article) return "";

    function tableHtml(table) {
      if (!table) return "";
      const head = table.headers.map((h) => `<th>${h}</th>`).join("");
      const body = table.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
        .join("");
      return `<table class="article__table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
    }

    function linksHtml(links) {
      if (!links || !links.length) return "";
      return `<ul class="article__links">${links
        .map(
          (l) =>
            `<li><a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a></li>`
        )
        .join("")}</ul>`;
    }

    const sections = (article.sections || [])
      .map((sec) => {
        const paras = (sec.paragraphs || [])
          .map((p) => `<p>${p}</p>`)
          .join("");
        const parasAfter = (sec.paragraphsAfter || [])
          .map((p) => `<p>${p}</p>`)
          .join("");
        const list = sec.list
          ? `<ul>${sec.list.map((i) => `<li>${i}</li>`).join("")}</ul>`
          : "";
        return `
          <section class="article__section">
            <h3>${sec.title}</h3>
            ${paras}
            ${list}
            ${parasAfter}
            ${tableHtml(sec.table)}
            ${linksHtml(sec.links)}
          </section>`;
      })
      .join("");

    return `
      <div class="block article">
        <h4>${title}</h4>
        ${article.intro ? `<p class="article__intro">${article.intro}</p>` : ""}
        ${sections}
      </div>`;
  }

  function getArticle(week) {
    if (week.articleId && window.ARTICLES && window.ARTICLES[week.articleId]) {
      return window.ARTICLES[week.articleId][lang];
    }
    return week[lang].article || null;
  }

  function galleryBlock(title, items, pdf) {
    if ((!items || !items.length) && !pdf) return "";
    const imgs = (items || [])
      .map(
        (g) => `
        <figure class="gallery__item">
          <img src="${g.src}" alt="${g.caption}" loading="lazy" />
          <figcaption>${g.caption}</figcaption>
        </figure>`
      )
      .join("");
    const pdfLink = pdf
      ? `<a class="gallery__pdf" href="${pdf.href}" target="_blank" rel="noopener noreferrer">${pdf.label}</a>`
      : "";
    return `
      <div class="block gallery-wrap">
        <h4>${title}</h4>
        <div class="gallery">${imgs}</div>
        ${pdfLink}
      </div>`;
  }

  function renderWeeks() {
    const L = SITE.ui[lang].labels;
    weeksEl.innerHTML = SITE.weeks
      .map((week) => {
        const c = week[lang];
        const open =
          week.status === "active" ||
          week.id === 1 ||
          week.id === 2 ||
          week.id === 3 ||
          week.id === 4 ||
          week.id === 5
            ? " open"
            : "";
        const statusClass =
          week.status === "done"
            ? "is-done"
            : week.status === "active"
              ? "is-active"
              : "";

        const lab = c.lab
          ? `<div class="lab">
              <h4>${c.lab.title}</h4>
              <ol>${c.lab.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
            </div>`
          : "";

        const article = getArticle(week);
        const mainContent = article
          ? articleBlock(L.content, article)
          : storyBlock(L.story, c.story);

        const weekLinks = c.links && c.links.length ? linksBlock(L.links, c.links) : "";
        const weekDocs = docsBlock(L.docs || "Dokümanlar", c.docs);

        return `
          <details class="week"${open}>
            <summary class="week__summary">
              <span class="week__num">${lang === "tr" ? "Hafta" : "Week"} ${week.id}</span>
              <span class="week__title">${c.title}</span>
              <span class="week__status ${statusClass}">${statusLabel(week.status)}</span>
            </summary>
            <div class="week__body">
              <p class="week__goal"><strong>${L.goal}:</strong> ${c.goal}</p>
              ${mainContent}
              ${article ? "" : listBlock(L.learn, c.learn)}
              ${article ? "" : listBlock(L.practice, c.practice)}
              ${article ? "" : linksBlock(L.links, c.links)}
              ${article && weekLinks ? weekLinks : ""}
              ${article ? "" : lab}
              ${galleryBlock(L.gallery || "Galeri", c.gallery, c.pdf)}
              ${weekDocs}
              ${article ? "" : listBlock(L.notes, c.notes)}
            </div>
          </details>`;
      })
      .join("");
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem("bim-lang", lang);
    applyUI();
    renderWeeks();
  }

  function setTheme(next) {
    if (!THEMES.includes(next)) return;
    theme = next;
    applyTheme();
  }

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  document.querySelectorAll(".theme__btn").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.getAttribute("data-theme-set")));
  });

  applyUI();
  renderWeeks();
})();
