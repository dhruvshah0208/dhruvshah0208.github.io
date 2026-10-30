// Privacy-friendly analytics via GoatCounter (no cookies, no personal data).
// Counts page views, plus one event per link click, named by the link target.
(function () {
    var GOATCOUNTER_CODE = 'dhruvshah';  // dashboard: https://dhruvshah.goatcounter.com

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    document.head.appendChild(s);

    function track(e) {
        var a = e.target.closest('a');
        if (!a || !window.goatcounter || !window.goatcounter.count) return;

        // data-track names links that have no real target (e.g. href="#");
        // other in-page anchors are not counted.
        var href = a.getAttribute('href') || '';
        var name = a.dataset.track || (href.charAt(0) === '#' ? null : a.href);
        if (!name) return;

        var entry = a.closest('.entry');
        var context = entry && entry.querySelector('.entry-title');
        var label = a.textContent.trim();
        if (context && context !== a) label = context.textContent.trim() + ' / ' + label;

        window.goatcounter.count({ path: name, title: label, event: true });
    }

    document.addEventListener('click', track);
    document.addEventListener('auxclick', track);  // middle-click / open in new tab
})();
