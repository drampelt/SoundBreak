var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		if (location.pathname.match('popup')) {
			location.href = window.NEXT_URL;
		} else {
			var download = document.getElementById('launchDownload');
			var clone = download.cloneNode(true);
			download.parentElement.replaceChild(clone, download);
			clone.innerHTML = 'Download with SoundBreak';
			clone.onclick = function() {
				var frame = document.createElement('iframe');
				frame.style.display = 'none';
				frame.src = window.IFRAME_URL;
				document.body.appendChild(frame);
			};
		}
	}
}, 10);