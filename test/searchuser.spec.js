import got from 'got'
import { expect } from 'chai'
import { GET } from '../enums-constants/http-methods.js'
const env = await import(`../environment/${process.env.ENVIRONMENT}.config.js`)

const userId = 2
const userIdInvalid = 100

describe('Search user', async () => {
    it('Search a specific user, @searchuser', async() => {
        let response = await got(`users/${userId}`,{
            prefixUrl: 'https://reqres.in/api',
            method: GET,
            headers: {
                accept: 'application/json'
            }
        })
        const bd = JSON.parse(response.body)
        const data = bd.data
        expect(response.statusCode).to.equal(200)
        expect(data.id).to.equal(2)
        expect(data.first_name).to.equal('Janet')
        expect(data.last_name).to.equal('Weaver')
        expect(data.email).to.equal('janet.weaver@reqres.in')
    })

    it('Search a specific user who does not exist, @searchuser', async() => {
        try {
            let response = await got(`users/${userIdInvalid}`,{
                prefixUrl: 'https://reqres.in/api',
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            })
            expect(response.statusCode).to.equal(200)
        } catch(error) {
            expect(error.response.statusCode).to.equal(404)
        }
    })
})
