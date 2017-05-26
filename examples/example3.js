function yo(generagtor) {
    return new Promise((resolve, reject) => {
        const gen = generagtor()
        next(gen.next())
        function next(response) {
            if (response.done) {
                resolve(response.value)
            } else {
                response.value
                    .then(data => {
                        return next(gen.next(data))
                    })
                    .catch(err => {
                        try {
                            next(gen.throw(err))
                        } catch (e) {
                            reject(e)
                        }
                    })
            }
        }
    })
}

const delay = text => new Promise(done => setTimeout(() => { console.log(text); done(text) }, 1))

// yo(function* () {
//     const one = yield delay('one')
//     console.log('resolved', one)

//     const two = yield delay('two')
//     console.log('resolved', two)
// })
//     .then(() => {
//         console.log('completed')
//     })

yo(function* () {
    try {
        yield Promise.reject('err')
    } catch (yo) {
        console.log('catched', yo)
        return 'ok'
    }
})
    .then((res) => {
        console.log('completed', res)
    })
    .catch((err) => {
        console.log('expected error', err)
    })