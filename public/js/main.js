function GIFPlayer(el) {
	this.el = el;
	this.isPlaying = false;

	this.el.addEventListener("click", this._changeVisibleEl.bind(this));
}

GIFPlayer.prototype = {
	_changeVisibleEl: function () {
		var gifEl = this.el.getElementsByClassName("js-gif")[0],
			pauseEl = this.el.getElementsByClassName("js-pause-img")[0],
			showEl = null,
			hideEl = null;
		
		if (!this.isPlaying) {
			showEl = gifEl;
			hideEl = pauseEl;
			this.isPlaying = true;
		} else {
			showEl = pauseEl;
			hideEl = gifEl;
			this.isPlaying = false;
		}

		hideEl.classList.add("hidden");
		showEl.classList.remove("hidden");
	}
}

function makeGIFPlayers() {
	var containerEls = document.getElementsByClassName("gif-container");
	for (var i = 0; i < containerEls.length; i++) {
		var el = containerEls[i];
		return new GIFPlayer(el);
	}
}

makeGIFPlayers();
