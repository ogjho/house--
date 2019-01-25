import Fetch from '../library/fetch'

module.exports = {
	orderData: [],
	_dataFilter: function(data){
        data.data.map(function(single){
            single.key = single.contentId
            single.link = 'item?contentId=' + single.orderContentId
            single.orderCoverImage = Fetch.$baseURL + single.orderCoverImage.substring(1)
        })
        this.orderData = data
    },
    fetchOrder: function(param){
        var options = {
            url: '/order/get',
            data: param
        }
        return Fetch.get(options)
                    .then((data)=>{
                        this._dataFilter(data)
                        return this.orderData
                    })
    },
    orderFinish: function(param){
        var options = {
            url: '/order/finish',
            data: param
        }
        return Fetch.post(options)
    },
    orderClose: function(param){
        var options = {
            url: '/order/close',
            data: param
        }
        return Fetch.post(options)
    },
    orderAdd: function(param){
        var options = {
            url: '/order/add',
            data: param
        }
        return Fetch.post(options)
                    .then((data)=>{
                        return data
                    })
    },
    orderDel: function(param){
        var options = {
            url: '/order/del',
            data: param
        }
        return Fetch.post(options)
    }
}