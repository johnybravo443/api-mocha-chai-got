import got from 'got'
import { expect } from 'chai'

describe('Create a user', async() => {
    it('Create a single user, @createuser', async() => {
        let response = await got(`users`, {
            prefixUrl: 'https://reqres.in/api',
            method: 'POST',
            headers: {
                accept: 'application/json',
                "contentType": "application/json"
            },
            json: {
                "name": "morpheus",
                "job": "leader"
            }
        })
        let bd = JSON.parse(response.body)
        expect(response.statusCode).to.equal(201)
        expect(bd.createdAt).is.not.null
        expect(bd.id).is.not.null
    })
})
