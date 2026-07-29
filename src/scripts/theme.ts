import "./polyfills";

export function setTheme(theme: string) {
    const oldTheme = getTheme();
    localStorage.setItem("theme", theme);

    // temporarily disable transitions to avoid color transitions
    document.body.classList.add("disable-transitions");

    document.body.classList.add(theme);
    document.body.classList.remove(oldTheme);

    setImmediate(() => document.body.classList.remove("disable-transitions"));

    document.dispatchEvent(new Event("themechange"));

    console.log("Switched theme to", theme);
    return theme;
}

export function getTheme() {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    }

    return currentTheme;
}

export function isDarkTheme() {
    return ["dark", "mocha"].includes(getTheme());
}
