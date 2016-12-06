function PlayGif() {
	this.containerEls = document.getElementsByClassName("gif-container");
	this.isPlaying = false;

	// add event listener to all gif conatiners
	this._addEventListener(this.containerEls, this._changeVisibleEl);
}

PlayGif.prototype = {
	_addEventListener: function (els, fn) {
		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			el.addEventListener("click", function (e) {
				fn(e, el);
			}.bind(el));
		};
	},
	_changeVisibleEl: function (e, activeContainer) {
		var gifEl = activeContainer.getElementsByClassName("gif")[0];
		var pauseEl = activeContainer.getElementsByClassName("pause-img")[0];
		if (!this.isPlaying) {
			var showEl = gifEl;
			var hideEl = pauseEl;
			this.isPlaying = true;
		} else {
			var showEl = pauseEl;
			var hideEl = gifEl;
			this.isPlaying = false;
		}

		hideEl.style.display = "none";
		showEl.style.display = "block";	
	}
}

var playGif = new PlayGif();