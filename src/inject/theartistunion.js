var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var modal = $('#facebook-like-modal:visible');
    if (modal.length > 0) {
      modal.find('[data-dismiss]').click();
    }

    var download = $('#download-button,.uppercase.glow')[0];
    var clone = download.cloneNode(true);
    download.parentElement.replaceChild(clone, download);
    clone.innerHTML = 'Download with SoundBreak';
    clone.href = '#';
    $(clone).click(function(e) {
      e.preventDefault();
      var data = JSON.parse($('[data-react-class="Track"]').attr('data-react-props'));
      window.location = data.tracks[0].original_file_url;
    });
	}
}, 10);
