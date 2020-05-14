import React, { useState } from "react"

const options = ["dj", "jt"]

export function App() {
  const [id, setId] = useState(options[0])

  return (
    <div>
      <div>
        <select value={id} onChange={(e) => setId(e.target.value)}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <video
        src={`${process.env.PUBLIC_URL}/video/${id}.mp4`}
        width={500}
        autoPlay={true}
      />
    </div>
  )
}
