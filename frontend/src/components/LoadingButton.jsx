import React from 'react'

const LoadingButton = ({loading, text }) => {
  return (
    <div>
       <button
        disabled={loading}
        style={{
            width: "100%",
            padding: "12px",
            background: "#3D2BFF  ",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
        }}
    >
      {loading ? "Please wait..." : text}
    </button>
    </div>
  )
}

export default LoadingButton
