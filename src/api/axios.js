import axios from 'axios'
// 'https://cors-anywhere.herokuapp.com/apisiakad.hilmimubarok.com'
export default axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
  // baseURL: 'https://1571156cb4fc.ngrok.io'
   // baseURL: 'https://akutansi456.herokuapp.com/api'


})
