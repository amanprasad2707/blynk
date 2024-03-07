async function pushNotification() {
    const reqUrl = "https://blr1.blynk.cloud/external/api/get?token=CGCkx8lRfAb50kVnsxPEx1TuXb9HGxks&v4";
    const res = await fetch(reqUrl);
    const distance = await res.json();
    const statusUrl = "https://blr1.blynk.cloud/external/api/isHardwareConnected?token=CGCkx8lRfAb50kVnsxPEx1TuXb9HGxks";
    const statusRes = await fetch(statusUrl);
    const isConnected = await statusRes.json();
    console.log(isConnected, typeof (isConnected))
    if(isConnected){
        document.querySelector('h1').innerHTML = 'Online'
    }
    else{
        document.querySelector('h1').innerHTML = 'Offline'
    }
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            if (distance < 20 && isConnected) {
                new Notification("Sewage overflow detected", {
                    body: 'Please take immediate action'
                });
            }
        }
    })
}

setInterval(pushNotification, 1000);

// document.getElementById('btn').addEventListener("click", pushNotification);
