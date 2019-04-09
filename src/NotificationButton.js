import React from 'react';
import { askForPermissionToReceiveNotifications } from './push-notification';

const NotificationButton = () => (
    <button onClick={askForPermissionToReceiveNotifications}>Click aquí para recibir notificaciones</button>
);

export default NotificationButton;