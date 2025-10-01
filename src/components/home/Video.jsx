import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1759306395~exp=1759309995~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=eda4cefef70bcbca51c652d2b967990caa23d3d40d0f3e3a5f18b1e7707600e7&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video