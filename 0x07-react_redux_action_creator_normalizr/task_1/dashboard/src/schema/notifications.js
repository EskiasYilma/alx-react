import { normalize, schema } from 'normalizr';
import notificationsJson from '../../../../notifications.json';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationSchema = new schema.Entity('notification', {
  author: userSchema,
  context: messageSchema,
});

const normalizeNotifications = normalize(notificationsJson, [notificationSchema]);

export default function getAllNotificationsByUser(userId) {
  return notificationsJson
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}

export { normalizeNotifications }
