import Fetch from '../library/fetch'

module.exports = {
	openid: '',
    wxAppData: {},
    fetchWxLogin: function(param){
        var options = {
            url: '/wxpay/wxLogin',
            data: param
        }
        console.log(param)
        return Fetch.post(options)
                    .then((data)=>{
                        this.openid = data.openid
                        return this.openid
                    })
    },
    /* fetchWxPay: function(param){
        var options = {
            url: '/wxpay/pay',
            data: param
        }
        return Fetch.post(options)
                    .then((data)=>{
                        this.wxAppData = data
                        return this.wxAppData
                    })
    } */
}