import got from 'got'
import { expect } from 'chai'

const userId = 2

describe('Update a user via patch', async() => {
    it('update a user using patch, @patchuser', async() => {
        let response = await got(`users/${userId}`, {
            prefixUrl: 'https://reqres.in/api',
            method: 'PATCH',
            headers: {
                accept: 'application/json'
            },
            json: {
                "name": "james bond",
                "job": "agent"
            }
        })

        let bd = JSON.parse(response.body)
        expect(response.statusCode).to.equal(200)
        expect(bd.updatedAt).is.not.null
    })
})
