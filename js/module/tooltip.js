export default function initTooltip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");
    tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver());
    });
}