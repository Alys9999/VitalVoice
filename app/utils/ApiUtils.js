// export function signUp(phone_number, firstname, lastname, role, language) {
//   fetch("http://192.168.1.170:5000/signup?phone_number=" + phone_number + "&firstname=" + firstname + "&lastname=" + lastname + "&role=" + role + "&language=" + language)
//     .then(res => res.json())
//     .then(data => {if (data.user_id){
//         sessionStorage.setItem("user_id", data.user_id)
//       }
//       else{
//         throw
//       }
//     })
//     .catch(err => console.log(err))
// }

// export function login(phone_number) {
//   fetch("http://192.168.1.170:5000/login?phone_number=" + phone_number)
//     .then(res => res.json())
//     .then(data => {if (data.user_id){
//         sessionStorage.setItem("user_id", data.user_id)
//       }
//       else{
//         throw
//       }
//     })
//     .catch(err => console.log(err))
// }

// export function dashboard() {
//   const user_id = sessionStorage.getItem("user_id")

//   if (user_id) {
//     fetch("http://192.168.1.170:5000/dashboard?user_id=" + user_id)
//     .then(res => res.json())
//     .then(data => {
//       if (data.chatpage_info){
//         return data.chatpage_info //list
//       }
//       else{
//         throw
//       }
//     })
//     .catch(err => console.log(err))
//   }
// }

// //store doctor id, channel id
// export function chatroom(channel_id) {
//   fetch("http://192.168.1.170:5000/chatroom?channel_id=" + channel_id)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function send(audio_url, channel_id, doctor_id) {
//   const user_id = sessionStorage.getItem("user_id")

//   fetch("http://192.168.1.170:5000/send?channel_id=" + channel_id + "&doctor_id=" + doctor_id + "&sender_id=" + user_id + "&audio_url=" + audio_url)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function receive(translation, message_id) {
//   const user_id = sessionStorage.getItem("user_id")
  
//   fetch("http://192.168.1.170:5000/receive?message_id=" + message_id + "&receiver_id=" + user_id + "&translation=" + translation)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function receiveNorm(translation) {
//   const user_id = sessionStorage.getItem("user_id")
  
//   fetch("http://192.168.1.170:5000/receive/norm?receiver_id=" + user_id + "&translation=" + translation)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function receiveHalf(translation) {
//   const user_id = sessionStorage.getItem("user_id")
  
//   fetch("http://192.168.1.170:5000/receive/half?receiver_id=" + user_id + "&translation=" + translation)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function receiveDouble(translation) {
//   const user_id = sessionStorage.getItem("user_id")
  
//   fetch("http://192.168.1.170:5000/receive/double?receiver_id=" + user_id + "&translation=" + translation)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function close(channel_id) {
//   fetch("http://192.168.1.170:5000/close?channel_id=" + channel_id)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function create(doctor_id, phone_number) {
//   fetch("http://192.168.1.170:5000/create?doctor_id=" + doctor_id + "&phone_number" + phone_number)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }

// export function settings(language) {
//   const user_id = sessionStorage.getItem("user_id")

//   fetch("http://192.168.1.170:5000/settings?user_id=" + user_id + "&language" + language)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }


// export function actionplan() {
//   const user_id = sessionStorage.getItem("user_id")
  
//   fetch("http://192.168.1.170:5000/actionplan?user_id=" + user_id)
//   .then(res => res.json())
//   .then(data => {return data})
//   .catch(err => console.log(err))
// }