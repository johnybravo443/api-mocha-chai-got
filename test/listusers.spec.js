import got from 'got'
import { expect } from 'chai'

const findUserFirstname = 'Lindsay'
const findUserLastname = 'Ferguson'

describe('List all users',async() => {
    it('list all users with valid response, @listusers', async() => {
        let response = await got('users', {
            prefixUrl: 'https://reqres.in/api',
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
            searchParams: {
                page: 1,
                per_page: 12
            }
        })
        const bdJson = JSON.parse(response.body)
        const data = bdJson.data
        expect(response.statusCode).to.equal(200)
        console.log('all users are:')
        data.forEach(obj => {
            console.log(obj.id + ' ' + obj.first_name + ' ' + obj.last_name)
        })
    })

    it('Verify Lindsay Ferguson exist in the list of users, @listusers', async() => {
        let response = await got('users', {
            prefixUrl: 'https://reqres.in/api',
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
            searchParams: {
                page: 1,
                per_page: 12
            }
        })
        const bdJson = JSON.parse(response.body)
        const data = bdJson.data
        expect(response.statusCode).to.equal(200)
        console.log('all users are:')
        const result = data.find(obj => {
            return obj.first_name === findUserFirstname && obj.last_name === findUserLastname
        })
        expect(result).to.be.not.undefined
    })

    it('list all users with invalid page number,verify no data is returned @listusers', async() => {
        let response = await got('users', {
            prefixUrl: 'https://reqres.in/api',
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
            searchParams: {
                page: 3,
                per_page: 12
            }
        })
        const bdJson = JSON.parse(response.body)
        const data = bdJson.data
        expect(response.statusCode).to.equal(200)
        expect(data.length).to.equal(0)
    })
})
