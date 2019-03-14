import Fetch from '../library/fetch'

module.exports = {
	addressData: [],
	_dataFilter: function(data){
        data.data.map(function(single){
            single.key = single.contentId
        })
        this.addressData = data.data
    },
    fetchAddress: function(param){
        var options = {
            url: '/address/getAll',
            data: param
        }
        return Fetch.get(options)
                    .then((data)=>{
                        this._dataFilter(data)
                        return this.addressData
                    })
    },
    fetchSingleAddress: function(param){
        var options = {
            url: '/address/get',
            data: param
        }
        return Fetch.get(options)
                    .then((data)=>{
                        return data
                    })
    },
    fetchDefaultAddress: function(param){
        var options = {
            url: '/address/defaultGet',
            data: param
        }
        return Fetch.get(options)
                    .then((data)=>{
                        return data
                    })
    },
    addressAdd: function(param){
        var options = {
            url: '/address/add',
            data: param
        }
        return Fetch.post(options)
    },
    addressMod: function(param){
        var options = {
            url: '/address/mod',
            data: param
        }
        return Fetch.post(options)
    },
    addressDefault: function(param){
        var options = {
            url: '/address/default',
            data: param
        }
        return Fetch.post(options)
    },
    addressDel: function(param){
        var options = {
            url: '/address/del',
            data: param
        }
        return Fetch.post(options)
    }
}