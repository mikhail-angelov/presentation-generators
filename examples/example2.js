function* logger() {
    while (true) {
        const msg = yield
        console.log('-', msg)
    }
}
const g = logger(); console.log('create generator')
g.next(); //start
g.next('log 1');
g.next('log 2');
g.next('log 3');
g.next('log 4');

