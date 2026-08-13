const SUGGEST_CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScP2vZWnmdTD6ocCSF7EA71XTcLWrFeD3uRRZ3mfyUvPg8mvQ/viewform?usp=publish-editor";

const directory = document.getElementById("directory");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const clearBtn = document.getElementById("clearBtn");
const suggestContactBtn = document.getElementById("suggestContactBtn");

if (suggestContactBtn) {
  suggestContactBtn.addEventListener("click", (event) => {
    if (!SUGGEST_CONTACT_FORM_URL || SUGGEST_CONTACT_FORM_URL === "YOUR_GOOGLE_FORM_URL") {
      event.preventDefault();
      alert("Suggestion form is being set up. Please check back soon.");
      return;
    }
    suggestContactBtn.href = SUGGEST_CONTACT_FORM_URL;
  });

  if (SUGGEST_CONTACT_FORM_URL && SUGGEST_CONTACT_FORM_URL !== "YOUR_GOOGLE_FORM_URL") {
    suggestContactBtn.href = SUGGEST_CONTACT_FORM_URL;
  }
}

const categories = [...new Set(CONTACTS.map(c => c.category))]
  .sort((a, b) => a.localeCompare(b));

categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRecentlyShared(contact) {
  if (contact.category !== "Cleaning" || !contact.lastShared) {
    return false;
  }

  const sharedDate = new Date(contact.lastShared + "T00:00:00");
  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);

  return sharedDate >= twelveMonthsAgo;
}

function formatSharedDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-IE", {
    month: "short",
    year: "numeric"
  });
}

function render() {
  const q = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = CONTACTS.filter(c => {
    const matchesCategory = !category || c.category === category;
    const haystack = `${c.category} ${c.name} ${c.phone}`.toLowerCase();
    return matchesCategory && (!q || haystack.includes(q));
  });

  resultCount.textContent = `${filtered.length} contact${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    directory.innerHTML = `<div class="empty">No matching contacts found.</div>`;
    return;
  }

  const grouped = {};
  filtered.forEach(c => (grouped[c.category] ||= []).push(c));

  Object.keys(grouped).forEach(categoryName => {
    if (categoryName === "Cleaning") {
      grouped[categoryName].sort((a, b) => {
        const aRecent = isRecentlyShared(a);
        const bRecent = isRecentlyShared(b);

        if (aRecent && !bRecent) return -1;
        if (!aRecent && bRecent) return 1;

        if (aRecent && bRecent) {
          return new Date(b.lastShared) - new Date(a.lastShared);
        }

        return a.name.localeCompare(b.name);
      });
    }
  });

  directory.innerHTML = Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .map(categoryName => {
      const cards = grouped[categoryName].map(c => {
        const recent = isRecentlyShared(c);

        const badge = recent
          ? `<span class="recent-badge">Recently shared · ${formatSharedDate(c.lastShared)}</span>`
          : "";

        return `
          <article class="card ${recent ? "recent-card" : ""}">
            <div>
              <div class="name-row">
                <div class="name">${escapeHtml(c.name)}</div>
                ${badge}
              </div>
              <div class="phone">${escapeHtml(c.phone)}</div>
            </div>

            <div class="actions">
              <a class="btn"
                 href="tel:+${c.intl}"
                 aria-label="Call ${escapeHtml(c.name)}">
                Call
              </a>

              <a class="btn wa"
                 href="https://wa.me/${c.intl}"
                 target="_blank"
                 rel="noopener"
                 aria-label="WhatsApp ${escapeHtml(c.name)}">
                WhatsApp
              </a>
            </div>
          </article>
        `;
      }).join("");

      const recentLegend = categoryName === "Cleaning"
        ? `<p class="group-note"><span class="recent-dot"></span>Recently shared = mentioned in the Bellingsfield groups within the past 12 months.</p>`
        : "";

      return `
        <section class="group">
          <h2>${escapeHtml(categoryName)} <span class="group-count">${grouped[categoryName].length}</span></h2>
          ${recentLegend}
          <div class="cards">${cards}</div>
        </section>
      `;
    })
    .join("");
}

searchInput.addEventListener("input", render);
categoryFilter.addEventListener("change", render);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "";
  render();
  searchInput.focus();
});

render();
