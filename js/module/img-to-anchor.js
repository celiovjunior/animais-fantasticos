export function initImgToAnchor() {
    function makeImageLink(imgId, url) {
        var img = document.getElementById(imgId);
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            window.open(url, '_blank');
        })
    }

    makeImageLink('project00', 'https://fintech-beta-seven.vercel.app/')
    makeImageLink('project01', 'https://notes-app-ts.vercel.app/')
    makeImageLink('project02', 'https://react-timer-silk.vercel.app/')
    makeImageLink('project03', 'https://celiovjunior.github.io/devfinance/')
}