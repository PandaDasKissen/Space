const injectors = [
  {
    selector: "#navbar",
    load: () => {
      return fetch("/freya/nav.html")
        .then(r => r.text())
        .then(async html => document.createRange().createContextualFragment(html));
    },
  },
]

const link = document.createElement("link");
	link.rel="icon";
	link.type="image/png";
	link.href="/images/icon.png";
document.head.append(link);

function initInjectors() {
	injectors.forEach(({ selector, load }) => {
		const el = document.querySelector(selector);
		if (!el) return;
		load().then(child => el.append(child));
	});
}

window.addEventListener("DOMContentLoaded", initInjectors);