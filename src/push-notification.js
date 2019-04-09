import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "390960341483"
    });
}

navigator.serviceWorker.register('/my-sw.js').then((registration) => {
    firebase.messaging().useServiceWorker(registration);
});

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('Token de usuario: ', token);
        return token;
    } catch (error) {
        console.log(error);
    }
}