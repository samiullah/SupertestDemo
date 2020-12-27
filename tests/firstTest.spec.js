const { response } = require('express');
const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express()

app.get('/first', (err, res)=> {
    res.status(200).json({"ok":"response"});
});

describe('check response code',()=>{

    it('check 200 response of first route', ()=>{

        request(app)
            .get('/first')
            .end((err, res)=> {
                expect(res.statusCode).to.be.equal(200)
            })
    })


    it('mocked tests',(done)=>{

        request('https://run.mocky.io/')
            .get('v3/b3fdbe6a-3bbb-48d0-b827-3178106bbf65')
            .expect(200, done)

          
    })
} )