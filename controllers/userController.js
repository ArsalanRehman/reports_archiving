const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./../models/userModels');

  exports.getUsers = async(req, res) => {
 
    try{
      const newUser = await userModel.User.find();

res.status(201).json({
  status: 'success',
  data:{
    User: newUser
  }
});
} catch(err){
  console.log(err);
}
  
  };
   exports.postUsers = async(req, res) => {
    // res.send('post Users  here');

    try{
      const newUser = await userModel.User.create(req.body);
res.status(201).json({
  status: 'success',
  data:{
    User: newUser
  }
});
} 
catch(err){
  console.log(err);
}
  
  };
  
  //////////////////////////



  
  
  exports.getUser = async(req, res) => {
 
    try{
      const newUser = await userModel.User.findById(req.params.id);
res.status(201).json({
  status: 'success',
  data:{
    User: newUser
  }
});
} catch(err){
  console.log(err);
}
  
  };


   exports.postUser = (req, res) => {
    res.send('post user here');
  };
  exports.updateUser = async(req, res) => {
 
    try{
      const newUser = await userModel.User.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
      });
res.status(201).json({
  status: 'success',
  data:{
    User: newUser
  }
});
} catch(err){
  console.log(err);
}
  
  };
  exports.deleteUser = (req, res) => {
    res.send('delete users  here');
  };