
const fixtures = require('./assistant.fixtures');
const assistModel = require('./assistant.model');
const ticketsModel = require('../ticket/ticket.model');

describe('assistant', function () {
    before(function () {
        return Promise.all(
            [ticketsModel.deleteAll(),
            assistModel.deleteAll()]
        )

    });
    after(function () {
        return Promise.all(
            [ticketsModel.deleteAll(),
            assistModel.deleteAll()]
        )
    })

    describe('[POST] /assistant', function () {
        it('Should create a new assistant', function (done) {
            chai.request(app).post('/assistant')
                .send(fixtures.post.assistant)
                .end(function (err, res) {
                    should.not.exist(err);
                    done();
                })
        });
        it('Should create another assistant', function (done) {
            chai.request(app).post('/assistant')
                .send(fixtures.post.assistant2)
                .end(function (err, res) {
                    should.not.exist(err);
                    done();
                })
        });
        it('Shouldnt create a new assistant with duplicated CID', function (done) {
            chai.request(app).post('/assistant')
                .send(fixtures.post.assistantWrong)
                .end(function (err, res) {
                    should.exist(err);                    
                    expect(res).to.have.status(422)
                    done();
                })
        });
        it('Shouldnt create a new assistant without required fields', function (done) {
            chai.request(app).post('/assistant')
                .send(fixtures.post.assistantNoRequired)
                .end(function (err, res) {
                    should.exist(err);
                    expect(res).to.have.status(422)
                    done();
                })
        });
        it('Shouldnt create a new assistant with wrong format fields', function (done) {
            chai.request(app).post('/assistant')
                .send(fixtures.post.assistantFailsJoi)
                .end(function (err, res) {
                    should.exist(err);
                    expect(res).to.have.status(422);
                    done();
                })
        });
    });
    describe('[GET] /assistant', function () {
        it('Should get assistants filtering for a query', function (done) {
            chai.request(app).get('/assistant?request=ian')
                .end(function (err, res) {
                    should.not.exist(err);
                    res.body.should.to.be.an('array');
                    done();
                });
        })
    });
    describe('[PUT] /assistant/:id', function(){
        it('Should update an assistant correctly', function(done){
            chai.request(app).put('/assistant/2')
            .send(fixtures.put.assistant)
            .end(function(err, res){
                should.not.exist(err);
                done();
            });
        });
        it('Shouldn\'t update an assistant with duplicated CID', function(done){
            chai.request(app).put('/assistant/1')
            .send(fixtures.put.assistantDuplicatedId)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            });
        });
        it('Shouldn\'t update an assistant with wrong format', function(done){
            chai.request(app).put('/assistant/1')
            .send(fixtures.put.assistantWrong)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            });
        });
    })
});
