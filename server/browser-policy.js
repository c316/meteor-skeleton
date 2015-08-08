BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
];

_.each(trusted, function(origin) {
  var dup_origin = origin;
  origin = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
  dup_origin = "http://" + dup_origin;
  BrowserPolicy.content.allowOriginForAll(dup_origin);
});