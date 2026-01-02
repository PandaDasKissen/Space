const injectors = [
      {
        selector: "#navbar",
        load: () => {
            return fetch("../nav.html")
                .then(r => r.text())
                .then(async html => document.createRange().createContextualFragment(html));
        },
      },
]

function initInjectors() {
      injectors.forEach(({ selector, load }) => {
        const el = document.querySelector(selector);
        if (!el) return;
        load().then(child => el.append(child));
      });
}

window.addEventListener("DOMContentLoaded", initInjectors);