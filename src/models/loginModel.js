import Fetch from '../library/fetch'

module.exports = {
    fetchLogin: function(param){
        var options = {
            url: '/api/login',
            data: param
        }
        return Fetch.post(options)
        			.then((data)=>{
                        return data
                    })
    }
}