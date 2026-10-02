

const myPromises = new Promise ( (resolve, reject) => {

    setTimeout(() => {
         reject('Mi amigo se perdio')

        resolve(100);
        
    },2000)
    
} )


myPromises
.then( (MyMoney) => {
        console.log(`Tengo mi dinero ${ MyMoney }`)
}).catch( reason => {
     console.warn(reason)
}).finally( () => {
     console.log('Pues a seguir con mi vida')
})
