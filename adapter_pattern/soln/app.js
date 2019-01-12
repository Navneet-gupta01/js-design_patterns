const localStorage = require('./locaStorage')
console.log('localStorage length: ', localStorage.length)

var uid = localStorage.getItem('user_id')

console.log('user_id: ', uid)

if (!uid) {
  console.log('User Id not found. Setting the user_id and auth_token...')
  localStorage.setItem('auth_token', 'fvfvetb24f4vtbsdSFG#SFV3GRSFDV#$sDV')
  localStorage.setItem('user_id', 'ad_sde_123')
} else {
  console.log('User Id found.', uid)
  console.log('clearning the User ID...')
  localStorage.clear()
}

// Issue as We are trying to use localStorage defined in Client(Browser) of javascript at Server/ Backend side(NodeJS)
