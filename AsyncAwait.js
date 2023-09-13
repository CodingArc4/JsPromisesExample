function promiseTimeOut(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function simulateLongOperation(){
    await promiseTimeOut(1000);
    return 42;
}   

async function run(){
    const answer = await simulateLongOperation();
    console.log("the answer is ", answer);
}

run();