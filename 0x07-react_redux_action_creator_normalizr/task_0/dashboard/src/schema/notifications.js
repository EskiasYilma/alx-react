import notificationsJson from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    return notificationsJson
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}
