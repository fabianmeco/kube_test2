
const fixtures = require('./event.fixtures');

describe('event', function(){
    describe('[POST] /event', function(){
        it('Should create a new event', function(done){
            chai.request(app).post('/event')
            .send(fixtures.post.event)
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        });
        it('Should create another event', function(done){
            chai.request(app).post('/event')
            .send(fixtures.post.event1)
            .end(function(err, res){
                should.not.exist(err);
                done();
            })
        });
        it('Shouldn\'t create an event with wrong date', function(done){
            chai.request(app).post('/event')
            .send(fixtures.post.event2)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            })
        })
    });
    describe('[GET] /event', function () {
        it('Should get event filtering for a query', function (done) {
            chai.request(app).get('/assistant?request=maiden')
                .end(function (err, res) {
                    should.not.exist(err);
                    res.body.should.to.be.an('array');
                    done();
                });
        })
    });
    describe('[DELETE] /event', function () {
        it('Should delete an event', function (done) {
            chai.request(app).delete('/event/15')
                .end(function (err, res) {
                    should.not.exist(err);
                    done();
                });
        })
    });
    describe('[PUT] /event/:id', function(){
        it('Should update an event correctly', function(done){
            chai.request(app).put('/event/8')
            .send(fixtures.put.event1)
            .end(function(err, res){
                should.not.exist(err);
                done();
            });
        });
        it('Shouldn\'t update an assistant with wrong date', function(done){
            chai.request(app).put('/event/3')
            .send(fixtures.put.event2)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            });
        });
        it('Shouldn\'t update an assistant with wrong id', function(done){
            chai.request(app).put('/event/666')
            .send(fixtures.put.event2)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(404);
                done();
            });
        });
    })
});