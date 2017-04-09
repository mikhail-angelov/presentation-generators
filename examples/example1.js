function* gena(){
    console.log('start generator')
    yield 'hi'
    console.log('next step')
}
const g = gena(); console.log('create generator')
var a = g.next(); console.log(a)
a = g.next(); console.log(a)

