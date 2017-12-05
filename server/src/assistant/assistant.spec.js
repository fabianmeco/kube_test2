

const fixtures = require('./assistant.fixtures');
const assistModel = require('./assistant.model');

describe('assistant', function(){
    before(function(){
        assistModel.deleteAll().then()
    });
    /* after(function(){
        assistModel.deleteAll().then() 
    }) */

    describe('[POST] /assistant', function(){
        it('Should create a new assistant', function(done){
            chai.request(app).post('/assistant')
            .send(fixtures.post.assistant)
            .end(function(err, res){
                should.not.exist(err);
                done();                
            })
        });
        it('Should create another assistant', function(done){
            chai.request(app).post('/assistant')
            .send(fixtures.post.assistant2)
            .end(function(err, res){
                should.not.exist(err);
                done();                
            })
        });
        it('Shouldnt create a new assistant with duplicated CID', function(done){
            chai.request(app).post('/assistant')
            .send(fixtures.post.assistantWrong)
            .end(function(err, res){
                should.exist(err);
                res.body.name.should.be.equal('cid');
                expect(res).to.have.status(422)
                done();                
            })
        });
        it('Shouldnt create a new assistant without required fields', function(done){
            chai.request(app).post('/assistant')
            .send(fixtures.post.assistantNoRequired)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(500)
                done();                
            })
        });
    });
    describe('[GET] /assistant', function(){
        it('Should get assistants filtering for a query', function(done){
            chai.request(app).get('/assistant?request=ian')
            .end(function(err, res){
                should.not.exist(err);
                res.body.should.to.be.an('array');
                done();
            });
        })
    })
});
