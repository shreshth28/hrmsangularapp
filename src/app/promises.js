let fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error) {
                resolve({ 'name': 'Sonu' });
            }
            else {
                reject({ 'name': 'Not a name' });
            }
        }, 2000);
    });
}
// fun().then().then().catch(); 

fun().then(response => {
    console.log(response.name);
}).catch((err) => {
    console.log(err.name);
});
