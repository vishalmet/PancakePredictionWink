


const RoundProgress = ({
  lockTimestamp,
  closeTimestamp,
  ...props
}) => {
  const startMs = lockTimestamp * 1000
  const endMs = closeTimestamp * 1000
  const now = Date.now()
  const rawProgress = ((now - startMs) / (endMs - startMs)) * 100
  const progress = rawProgress <= 100 ? rawProgress : 100

  return <div></div>
}

export default RoundProgress
