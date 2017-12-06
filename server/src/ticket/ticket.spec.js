const fixtures = require('./ticket.fixtures');
const assistModel = require('../assistant/assistant.model');
const ticketModel = require('./ticket.model');

describe('ticket', function () {
    before(function () {
        return Promise.all(
            [ticketModel.deleteAll(),
            assistModel.deleteAll()
            ]
        ).then(()=>Promise.all(fixtures.assistants.map((assistant)=>assistModel.create(assistant)))
        )

    });
    after(function () {
        /* return Promise.all(
            [ticketModel.deleteAll(),
            assistModel.deleteAll()]
        ) */
    })
    describe('[POST] /event/:id/assistant', function(){
        it('Should create a new ticket', function(done){
            chai.request(app).post('/event/2/assistant')
            .send(fixtures.post.ticket1)
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        });
        it('Should create another ticket', function(done){
            chai.request(app).post('/event/24/assistant')
            .send(fixtures.post.ticket2)
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        });
        it('Should\'t create a new ticket with wrong format', function(done){
            chai.request(app).post('/event/2/assistant')
            .send(fixtures.post.ticketWrongSeatFormat)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            })
        })
        it('should\'t create a ticket with same time and same assistant', function(done){
            chai.request(app).post('/event/23/assistant')
            .send(fixtures.post.ticket2)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            })
        })
    });
    describe('[GET] /event/:id/ticket/:ticketId', function(){
        it('should update a ticket ', function(done){
            chai.request(app).get('/event/2/ticket/1')
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        })
    })

    describe('[PUT] /event/:id/assistant/:ticketId', function(){
        it('should update a ticket ', function(done){
            chai.request(app).put('/event/2/ticket/1')
            .send(fixtures.put.ticket1)
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        })
    })
});