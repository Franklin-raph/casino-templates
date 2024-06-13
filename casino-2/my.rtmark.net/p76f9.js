(function () {
	var retargetUrl = window.location.href;
	if (window.parent && window.location !== window.parent.location) {
		retargetUrl = window.parent.document.referrer;
	}
	const ticker = window.setInterval(function() {
		if (!window.document.body) {
			return;
		}
		clearInterval(ticker);

		var pixel = document.createElement('img');
		pixel.setAttribute(
			'style',
			'position: absolute; width: 1px; height: 1px; left: 0px; bottom: 0px; opacity: 0;',
		)
		pixel.src = 'https://my.rtmark.net/img.gif?f=sync&partner=b2865a9439568cf4148ba5758b8fa23add73164fc618130eb93726d21b0f9aff&ttl=&rurl=' + encodeURIComponent(retargetUrl);
		window.document.body.appendChild(pixel);
	}, 500);
})();
