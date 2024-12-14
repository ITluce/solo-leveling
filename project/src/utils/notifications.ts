import { LocalNotifications } from '@capacitor/local-notifications';

export async function scheduleWorkoutReminder() {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: "⚔️ Daily Quest Available!",
        body: "Your daily training awaits, Hunter. Arise!",
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 60 * 60), repeats: true }, // Every hour
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
      }
    ]
  });
}