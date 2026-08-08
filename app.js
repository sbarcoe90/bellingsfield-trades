
const directory = document.getElementById("directory");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const clearBtn = document.getElementById("clearBtn");

const categories = [...new Set(CONTACTS.map(c => c.category))].sort((a,b) => a.localeCompare(b));
categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
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

  directory.innerHTML = Object.keys(grouped).sort((a,b)=>a.localeCompare(b)).map(categoryName => {
    const cards = grouped[categoryName].map(c => `
      <article class="card">
        <div>
          <div class="name">${escapeHtml(c.name)}</div>
          <div class="phone">${escapeHtml(c.phone)}</div>
        </div>
        <div class="actions">
          <a class="btn" href="tel:+${c.intl}" aria-label="Call ${escapeHtml(c.name)}">Call</a>
          <a class="btn wa" href="https://wa.me/${c.intl}" target="_blank" rel="noopener" aria-label="WhatsApp ${escapeHtml(c.name)}">WhatsApp</a>
        </div>
      </article>
    `).join("");

    return `
      <section class="group">
        <h2>${escapeHtml(categoryName)} <span class="group-count">${grouped[categoryName].length}</span></h2>
        <div class="cards">${cards}</div>
      </section>
    `;
  }).join("");
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
