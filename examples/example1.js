function* gena(val){
    console.log('step 1',val)
    const res = yield 'ping'
    console.log('step 3˜', res)
}
const g = gena('yo'); console.log('create generator')
const res1 = g.next(); console.log('step 2',res1)
const res2 = g.next('pong'); console.log('step 4',res2)
