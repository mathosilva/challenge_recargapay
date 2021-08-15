const axios = require('axios')






async function post(url, endPoint, body,){
    var res
    try{
       res = axios({
            method: 'post', 
            url: `${url}/${endPoint}`,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }, 
            requestBody: body
        })
        return res
    }
    catch(error){
        console.error(error)
    }
}

async function get(url, endPoint, parametro){
    var res
    var params;
    if(parametro){
        params = parametro
    }
    try{
       res = axios({
            method: 'get', 
            url: `${url}/${endPoint}`,
            params
        })
        return res
    }
    catch(error){
        console.error(error)
    }
}
module.exports = {
    post,
    get
}