// ==UserScript==
// @name         upanhfree
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tampermonkey Script: Upload ảnh nhanh chỉ với Copy & Paste
// @author       ReeganExE (Ninh Pham)
// @match        https://upanhfree.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.removeEventListener('paste', CHV.fn.uploader.pasteImageHandler);
    const org = CHV.fn.uploader.pasteImageHandler;

    // Trigger upload after Paste
    CHV.fn.uploader.pasteImageHandler = function() {
        org.apply(this, arguments);
        setTimeout(() => $('[data-action=upload]').click(), 1500);
    };

    // Display Direct links
    const displayResults = CHV.fn.uploader.displayResults;
    CHV.fn.uploader.displayResults = function() {
        displayResults.apply(this, arguments);
        $('#uploaded-embed-toggle').val("direct-links").change();
    };
    window.addEventListener('paste', CHV.fn.uploader.pasteImageHandler);
})();
