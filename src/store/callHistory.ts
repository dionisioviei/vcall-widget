import { encode, decode } from 'js-base64'

function setCallHistory({
  number,
  duration,
  date,
  callDirection
}: {
  number: string
  duration: string
  date: Date
  callDirection: string | null
}) {
  let newCallHistory
  const prevCallHistoryRaw = localStorage.getItem('@vcallwidget:callhistory')

  if (prevCallHistoryRaw) {
    const prevCallHistory = JSON.parse(prevCallHistoryRaw)
    if (Array.isArray(prevCallHistory)) {
      newCallHistory = [
        { number, duration, date, callDirection },
        ...prevCallHistory.filter((call, index) => index <= 2000)
      ]
    } else {
      newCallHistory = [{ number, duration, date, callDirection }]
    }

    localStorage.setItem('@vcallwidget:callhistory', JSON.stringify(newCallHistory))
    return
  } else {
    newCallHistory = [{ number, duration, date, callDirection }]
    localStorage.setItem('@vcallwidget:callhistory', JSON.stringify(newCallHistory))
    return
  }
}

function getCallHistory(
  page: number,
  perPage: number
): {
  history: Array<{
    number: string
    duration: string
    date: string
    callDirection: string | null
  }>
  totalPages: number
} {
  const callHistoryRaw = localStorage.getItem('@vcallwidget:callhistory')
  if (!callHistoryRaw) {
    return { history: [], totalPages: 0 }
  }
  const callHistory = JSON.parse(callHistoryRaw)
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage

  const paginatedHistory = Array.isArray(callHistory) ? callHistory.slice(startIndex, endIndex) : []
  const totalPages = Math.ceil(callHistory.length / perPage)
  return { history: paginatedHistory, totalPages }
}

function setLastCallRecording(blob: Blob) {
  const reader = new FileReader()
  reader.onloadend = () => {
    const dataURL = reader.result
    if (dataURL && typeof dataURL === 'string') {
      localStorage.removeItem('@vcallwidget:lastCallRecorded')
      localStorage.setItem('@vcallwidget:lastCallRecorded', dataURL)
    }
  }
  reader.readAsDataURL(blob)
}

function getLastCallRecording() {
  const dataURL = localStorage.getItem('@vcallwidget:lastCallRecorded')
  if (dataURL) {
    return dataURL
  }
  return null
}

export { setCallHistory, getCallHistory, setLastCallRecording, getLastCallRecording }
