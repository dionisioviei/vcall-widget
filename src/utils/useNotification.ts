import { ref, onUnmounted, type Ref, watch, onMounted } from 'vue'

type SendNotificationProps = {
  title: string
  options?: NotificationOptions
}

const useNotification = (
  expireTime?: number
): [
  Ref<NotificationPermission>,
  ({ title, options }: SendNotificationProps) => {
    sended: boolean
    message: string
    expireTime: number | undefined
  }
] => {
  const isGranted = ref(Notification.permission)
  const timeoutId = ref<null | number>(null)

  onMounted(() => {
    watch(
      isGranted,
      () => {
        if (isGranted.value !== 'granted') {
          Notification.requestPermission().then((permission) => {
            isGranted.value = permission
          })
        }
      },
      { immediate: true }
    )
  })

  const sendNotification = ({ title, options }: SendNotificationProps) => {
    if (isGranted.value === 'denied') {
      return { sended: false, message: 'PERMISSION_DENIED', expireTime }
    }
    const notification = new Notification(title, options)
    if (expireTime) {
      timeoutId.value = setTimeout(() => {
        notification.close()
      }, expireTime)
    }
    return { sended: true, message: 'PERMISSION_GRANTED', expireTime }
  }

  onUnmounted(() => {
    timeoutId.value && clearTimeout(timeoutId.value)
  })

  return [isGranted, sendNotification]
}

export { useNotification }
