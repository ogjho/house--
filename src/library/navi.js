const HOST = '';
const RouteMapper = {};

module.exports = {
	go(url, options){
		url = this._handleUrl(url, options);
		wx.navigateTo({url:url})
	},
	switchTab(url, options){
		url = this._handleUrl(url, options);
		wx.switchTab({url:url})
	},
	back(n = 1){
		wx.navigateBack({delta:n});
	},
	redirect(url, options){
		url = this._handleUrl(url, options);
		wx.redirectTo({url:url});
	},
	replace(url, options){
		url = this._handleUrl(url, options);
		wx.switchTab({url:url});
	},
	relaunch(url, options){
		url = this._handleUrl(url, options);
		wx.reLaunch({url:url});
	},
	_handleUrl(url, options){

		return url;

		//TODO

		let originUrl = url;
		let optionsStr = '';

		if(options instanceof Object) {
			for(let key in options){
				optionsStr += `&${key}=${encodeURIComponent(options[key])}`;
			}
		}

		if(url.indexOf('://') < 0){
			if(url.substring(0,1) != '/'){
				url = '/' + url;
			}
			url = HOST + url;
		}

		try{
			let urlObject = new URL(url);
			let pathname = urlObject.pathname;
			if(pathname.substr(pathname.length - 1, 1) != '/'){
				pathname += '/';
			}
			let mapPath = this._mapUrl(pathname);

			if( urlObject.search ){
				mapPath += urlObject.search;
				mapPath += optionsStr;
			}else{
				mapPath += '?' + optionsStr;
			}

			return mapPath;
		}catch(err){
			return originUrl;
		}
		
	},
	_mapUrl(url){

		let matchUrlKey = '';
		let matchUrl = '';
		let matchRegexp = null;

		for (let i in RouteMapper) {
            let regeExpString = i;
            regeExpString = regeExpString.replace('(:num)', '[0-9]+');
            regeExpString = regeExpString.replace('(:any)', '[^\/]+');
            regeExpString = '^' + regeExpString + '$';

            let regexp = new RegExp(regeExpString);
            if (regexp.test(url)) {
                matchUrlKey = i;
                matchRegexp = regexp;
                break;
            }
        }

        //TODO

		return matchUrl || url;
	}
}