const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    function assertNull(operation, done){
        operation
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    }

    it('model instance remove', (done) =>{
        assertNull(joe.remove(), done);
    });

    it('class method deleteOne', (done) => {
        assertNull(User.deleteOne({ name: 'Joe'}), done);
    });

    it('class method findOneAndDelete', (done) => {
        assertNull(User.findOneAndDelete({ name: 'Joe'}), done);
    });

    it('class method findByIdAndDelete', (done) => {
        assertNull(User.findByIdAndDelete(joe._id), done);
    }) ;
});