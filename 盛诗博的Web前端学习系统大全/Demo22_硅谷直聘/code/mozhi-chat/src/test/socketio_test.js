import io from 'socket.io-client'

// 连接服务器，得到与服务器的连接对象
const socket = io('ws://localhost:4000')
// 绑定监听，接收服务器发送的消息
socket.on('receiveMsg', function (data) {
  console.log('消息从服务器上回来啦', data)
})

// 发送消息
socket.emit('sendMsg', {name: 'abc'})
console.log('客户端向服务器发送消息为', {name: 'abc'})
