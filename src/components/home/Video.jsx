import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1759254899~exp=1759258499~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=79d258213821b99f873e0e1e4a4ffa83309178d02d4b1adf876998b6bcdcdf7f&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video