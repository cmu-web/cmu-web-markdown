/* Carnegie Mellon Web Markdown: turn what Markdown writes into the Carnegie Mellon Web Kit's
   components. Runs after the template's scripts and the kit's cmu-app.js. */
(function () {
  "use strict";
  var content = document.querySelector("#content .content");
  if (!content) return;

  // Code blocks: a kit code block with a copy icon in its corner
  content.querySelectorAll("pre").forEach(function (pre, i) {
    var code = pre.querySelector("code") || pre;
    var box = document.createElement("div");
    box.className = "cmu-copyable";
    var block = box.appendChild(document.createElement("pre"));
    block.className = "cmu-snippet";
    block.id = "cmu-code-" + (i + 1);
    block.appendChild(document.createElement("code")).textContent = code.textContent.replace(/\n$/, "");
    var copy = box.appendChild(document.createElement("button"));
    copy.className = "cmu-copy";
    copy.type = "button";
    copy.setAttribute("data-cmu-copy", "#" + block.id);
    copy.setAttribute("aria-label", "Copy Code");
    copy.title = "Copy Code";
    // Markdown wraps highlighted code in two divs; replace the outermost
    (pre.closest(".highlighter-rouge") || pre).replaceWith(box);
  });

  // GitHub's callouts (> [!NOTE] and the like) become kit callouts with
  // their label; any other block quote becomes a kit note
  var LABELS = { NOTE: "Note", TIP: "Tip", IMPORTANT: "Important", WARNING: "Warning", CAUTION: "Caution" };
  // The kit's callout colors; Important stays the plain gray callout
  var COLORS = { NOTE: "blue", TIP: "green", WARNING: "gold", CAUTION: "red" };
  content.querySelectorAll("blockquote").forEach(function (quote) {
    var first = quote.querySelector("p");
    var match = first && first.firstChild && first.firstChild.nodeType === 3 && first.firstChild.nodeValue.match(/^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i);
    var box = document.createElement("div");
    if (match) {
      first.firstChild.nodeValue = first.firstChild.nodeValue.slice(match[0].length);
      if (!first.textContent.trim()) first.remove();
      var kind = match[1].toUpperCase();
      box.className = "cmu-callout" + (COLORS[kind] ? " cmu-callout--" + COLORS[kind] : "");
      var label = document.createElement("p");
      label.className = "cmu-label";
      label.textContent = LABELS[kind];
      box.appendChild(label);
    } else {
      box.className = "cmu-note";
    }
    while (quote.firstChild) box.appendChild(quote.firstChild);
    quote.replaceWith(box);
  });
})();
