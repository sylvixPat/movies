import React from 'react'

export default function VideoIcon({ videoURL }) {
    return (
        <a href={videoURL} target='_blank' rel='noopener noreferrer'>
            🎥
        </a>
    )
}