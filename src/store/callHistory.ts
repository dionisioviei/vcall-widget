function setCallHistory({
  number,
  duration,
  date
}: {
  number: string
  duration: string
  date: Date
}) {
  let newCallHistory
  const prevCallHistoryRaw = localStorage.getItem('@vcallwidget:callhistory')

  if (prevCallHistoryRaw) {
    const prevCallHistory = JSON.parse(prevCallHistoryRaw)
    if (Array.isArray(prevCallHistory)) {
      newCallHistory = [
        { number, duration, date },
        ...prevCallHistory.filter((call, index) => index <= 2000)
      ]
    } else {
      newCallHistory = [{ number, duration, date }]
    }

    localStorage.setItem('@vcallwidget:callhistory', JSON.stringify(newCallHistory))
    return
  } else {
    newCallHistory = [{ number, duration, date }]
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

export { setCallHistory, getCallHistory }
