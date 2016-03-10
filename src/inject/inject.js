function inject(link) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = link;
	(document.head || document.body || document.documentElement).appendChild(script);
}

var SCRIPTS = [
	{url: /hive\.co/, scripts: [chrome.extension.getURL('src/inject/hive.js')]},
	{url: /theartistunion\.com\/tracks\/[a-zA-Z0-9]+/, scripts: [chrome.extension.getURL('src/inject/theartistunion.js')]}
];

SCRIPTS.forEach(function(def) {
	var match = false;
	if (typeof def.url !== 'undefined' && !match) match = !!location.href.match(def.url);

	if (match) {
		if (typeof def.scripts !== 'undefined') {
			def.scripts.forEach(function(script) {
				inject(script);
			});
		}
	}
}, this);
