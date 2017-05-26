

const delay = text => new Promise(done => setTimeout(() => { console.log(text); done(text) }, 1))

async function run() {
    const one = await delay('one')
    console.log('resolved', one)

    const two = await delay('two')
    console.log('resolved', two)
}



run().then(() => {
    console.log('completed')
})
