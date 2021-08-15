const post = require('../../mock/dadosPOST/POST.json')
const api = require('../../helpers/api')
const url = require('../../mock/endpoints.json')
const assert = require('assert')
var result


describe('POST API "POSTS"', ()=>{
    it('Realizar um POST usando a API', async ()=>{
        var expectStatus = 201
        var expectStatusText = 'Created'
        var lastId = await api.get(url.base, url.posts)
        var expectId = lastId.data[lastId.data.length-1]
        expectId = expectId.id + 1
        result = await api.post(url.base, url.posts,  post)
        
        assert.deepEqual(expectStatus,result.status)
        assert.deepEqual(expectStatusText,result.statusText)
        assert.deepEqual(expectId,result.data.id)

    })
})