const express=require('express')
const userController=require('./../controllers/userController')

// const getAllUsers=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const getUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const createUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const updateUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const deleteUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }

const router=express.Router();  //userRouter
router    //userRouter
// .route('/') //.route('/api/v1/users')
// .get(getAllUsers)
// .post(createUser)

// router //userRouter
// .route('/:id')  //.route('/api/v1/users/:id')
// .get(getUser)
// .patch(updateUser)
// .delete(deleteUser)
.route('/') //.route('/api/v1/users')
.get(userController.getAllUsers)
.post(userController.createUser)

router //userRouter
.route('/:id')  //.route('/api/v1/users/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)

module.exports=router;