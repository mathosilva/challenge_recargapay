

const api = require('../../helpers/api')
const url = require('../../mock/endpoints.json')
const assert = require('assert')
var expectBody
var result
const statusCode = 200
const statusText = 'OK'

describe('GET API "POSTS"', ()=>{
    
    it('Realizar busca geral', async ()=>{
        result = await api.get(url.base, url.posts)
        expectBody = result.data.length
        assert.deepEqual(expectBody, 100)
        assert.deepEqual(statusCode, result.status)
        assert.deepEqual(statusText, result.statusText)
    })
    it('Validar busca de item especifico', async ()=>{
        expectBody = [
            {
                userId: 10,
                id: 100,
                title: 'at nam consequatur ea labore ea harum',
                body: 'cupiditate quo est a modi nesciunt soluta\n' +
                  'ipsa voluptas error itaque dicta in\n' +
                  'autem qui minus magnam et distinctio eum\n' +
                  'accusamus ratione error aut'
              }
        ]
        result = await api.get(url.base, url.posts, {
            id: 100
        })
        assert.deepEqual(expectBody,result.data)
        assert.deepEqual(statusCode, result.status)
        assert.deepEqual(statusText, result.statusText)
    })
    it('Validar busca por item inválido', async ()=>{
        expectBody = []
        result = await api.get(url.base, url.posts, {
            id: 101
        })
        assert.deepEqual(expectBody,result.data)
        assert.deepEqual(statusCode, result.status)
        assert.deepEqual(statusText, result.statusText)
    })
    
})
