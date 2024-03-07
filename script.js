async function pushNotification() {
    const reqUrl = "https://blr1.blynk.cloud/external/api/get?token=CGCkx8lRfAb50kVnsxPEx1TuXb9HGxks&v4";
    const res = await fetch(reqUrl);
    const distance = await res.json();
    const statusUrl = "https://blr1.blynk.cloud/external/api/isHardwareConnected?token=CGCkx8lRfAb50kVnsxPEx1TuXb9HGxks";
    const statusRes = await fetch(statusUrl);
    const isConnected = await statusRes.json();
    console.log(isConnected, typeof (isConnected))
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            if (distance < 20 && isConnected) {
                new Notification("Example notification", {
                    body: 'this is an example notification'
                });
            }
        }
    })
}

document.getElementById('btn').addEventListener("click", pushNotification);
