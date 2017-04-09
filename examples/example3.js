function yo(generagtor) {
    return new Promise((resolve, reject) => {
        const gen = generagtor()
        next(gen.next())

        function next(response) {
            if (response.done) {
                resolve(response.value)
            } else {
                response.value
                    .then(data => next(gen.next(data)))
                    .catch(err=>reject(err))
            }
        }
    })
}

const delay = text=>new Promise(done=>setTimeout(()=>{console.log(text);done(text)},1))

yo(function*(){
    const one = yield delay('one')
    console.log('resolved', one)

    const two = yield delay('two')
    console.log('resolved', two)
})
.then(()=>{
    console.log('completed')
})