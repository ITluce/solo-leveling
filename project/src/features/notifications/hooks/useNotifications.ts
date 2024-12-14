import { useEffect } from 'react';
import { scheduleWorkoutReminder } from '../utils/notifications';

export function useNotifications() {
  useEffect(() => {
    scheduleWorkoutReminder().catch(console.error);
  }, []);
}