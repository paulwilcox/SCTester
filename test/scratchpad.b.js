function test () {

    let a = [1,2,3,4].map(x => x*x);
    let pass = a[3] == 16;

    console.log({a});

    return pass;

}