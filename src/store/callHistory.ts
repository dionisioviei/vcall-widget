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

function getCallHistory(): Array<{
  number: string
  duration: string
  date: string
}> {
  const callHistoryRaw = localStorage.getItem('@vcallwidget:callhistory')
  if (!callHistoryRaw) {
    return []
  }
  const callHistory = JSON.parse(callHistoryRaw)

  if (Array.isArray(callHistory)) {
    return callHistory
  }

  return []
}

export { setCallHistory, getCallHistory }
