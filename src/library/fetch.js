const HOST = 'http://www.简家之域.com/api/'
const $baseURL = 'http://www.简家之域.com'
// const HOST = 'http://127.0.0.1:3004'
// const $baseURL = 'http://127.0.0.1:8080'
const STORAGE_COOKIE_KEY = 'jianjia_cookie'
var ___tempCookie = undefined
try {
	___tempCookie = wx.getStorageSync(STORAGE_COOKIE_KEY)
} catch (err) {
	console.log(err)
}
import wepy from 'wepy'
module.exports = {
	_fetch(options, callback) {
	    var url
	    if (options.url.substr(0, 4) === 'http') {
	      	url = options.url
	    } else {
		    if (options.url.substr(0, 1) === '/') {
		        url = HOST + options.url
		    } else {
		        url = HOST + '/' + options.url
		    }
	    }
	    return new Promise(function (resolve, reject) {
		    wepy.request({
		        url: url,
		        data: options.data,
		        method: options.method || 'GET',
		        header: {
		          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		          'cookie': ___tempCookie
		        },
		        complete: function (res) {
			        try {
			            if (res.statusCode !== 200) {
			              	throw new Error(res.errMsg + res.statusCode)
			            }
			            if (res.data && res.data.code !== 0) {
			              	throw new Error(res.data.msg)
			            }
			            resolve(res.data.data)
			            callback && callback(res.data.data, null, res)
			        } catch (error) {
			            reject(error)
			            callback && callback(null, error)
			        }
		        }
		    })
	    })
	},
	get(options, callback) {
	    var data = this._fetch(options, callback)
	    return data
	},
	post(options, callback) {
	    options.method = 'POST'
	    var data = this._fetch(options, callback)
	    return data
	},
	setCookie(cookie) {
	    ___tempCookie = cookie
	    wx.setStorage({
	      key: STORAGE_COOKIE_KEY,
	      data: ___tempCookie,
	    })
	},
	getCookie() {
		return ___tempCookie
	},
	$baseURL: $baseURL
}