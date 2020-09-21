/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import React, {useRef, useState} from 'react'
import {useEffect} from 'react'
import {v4} from 'uuid'
import {useRouter} from 'next/router'
import Nav from '../../src/components/shared/Nav'
import Channels from '../../src/components/user/dashboard/sidebar/Controls'
import Controls from '../../src/components/user/dashboard/sidebar/Controls'

let Room
export default Room = ({query: {roomId}}) => {
  const localRef = useRef(null)
  const remoteRef = useRef(null)
  const router = useRouter()
  const [myPeer, setMyPeer] = useState()
  const [peers, setPeers] = useState({})
  const [stream, setStream] = useState()
  // const [socket, setSocket] = useState()

  // Helper functions
  const addVideoStream = (video, stream) => {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => video.play())
  }

  // Set myPeer server on page load
  useEffect(() => {
    const newPeer = async () => {
      // Install PeerJS
      const Peer = (await import('peerjs')).default
      setMyPeer(new Peer(v4()))
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      setStream(mediaStream)
      addVideoStream(localRef.current, mediaStream)
    }
    newPeer()
  }, [router])

  // set client-side socket.io
  useEffect(() => {
    if (myPeer && stream) {
      const startSocket = async () => {
        // install Socket.io
        const socket = (await import('socket.io-client')).default(
            'http://localhost:5000/',
        )

        const connectToUser = (userId, stream) => {
          const call = myPeer.call(userId, stream)
          console.log('connecting!')
          call.on('stream', () => addVideoStream(remoteRef.current, stream))
          call.on('close', () => remoteRef.current.removeAttribute('src'))
          setPeers((v) => (v[userId] = call))
        }

        socket.on('user-connected', (userId) => {
          console.log('connected!!')
          connectToUser(userId, stream)
        })
        socket.on('user-disconnected', (userId) => {
          console.log('disconnected!')
          if (peers[userId]) peers[userId].close()
          remoteRef.current.removeAttribute('src')
        })

        myPeer.on('call', (call) => {
          call.answer(stream)
          call.on('stream', (userVideoStream) => {
            addVideoStream(remoteRef.current, userVideoStream)
          })
        })

        myPeer.on('open', (id) => {
          console.log('RoomId', roomId)
          socket.emit('join-room', roomId, id)
        })
      }
      startSocket()
    }
  }, [myPeer, stream])

  return (
      <>
        <Grid
          gap={0}
          columns={['3fr 1fr']}
          sx={{
            border: '.1rem solid black',
          }}
      >
        <main sx={{ variant: 'components.main.video' }}>
          <video
              ref={remoteRef}
              muted
              style={{
                background: 'brown',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
          />
        </main>
        <video
            muted
            ref={localRef}
            style={{
              marginTop: '10px',
              background: 'brown',
              width: '95%',
              marginLeft: '8px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
        />
        </Grid>
      </>
  )
}

Room.getInitialProps = ({query}) => {
  return {query}
}
