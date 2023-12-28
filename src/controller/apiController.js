// import loginRegisterService from '../service/loginRegisterService';

// const testApi = (req, res) => {
//     return res.status(200).json({
//         message: 'Ok',
//         data: 'test api'
//     })
// }

// const handleRegister = async (req, res) => {
//     try {
//         if (!req.body.email || !req.body.phone || !req.body.password) {
//             return res.status(200).json({
//                 EM: 'Missing required parameters', //Error message
//                 EC: '1', //Error code
//                 DT: '' //Date
//             })
//         }

//         if (!req.body.password && req.body.password.length < 4) {
//             return res.status(200).json({
//                 EM: 'Password must have more than 3 characters', //Error message
//                 EC: '1', //Error code
//                 DT: '' //Date
//             })
//         }

//         //Service: Create user
//         let data = await loginRegisterService.registerNewUser(req.body)
//         return res.status(200).json({
//             EM: data.EM, //Error message
//             EC: data.EC, //Error code
//             DT: '' //Date
//         })


//     } catch (e) {
//         return res.status(500).json({
//             EM: 'Server Error', //Error message
//             EC: '-1', //Error code
//             DT: '' //Date
//         })
//     }
// }



// module.exports = {
//     testApi, handleRegister
// }