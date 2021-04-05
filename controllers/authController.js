const User = require('./../models/userModels');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');


const catchAsync = require('../utlis/catchAsync');
const AppError = require('./../utlis/appError');


const signToken = id =>{
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};
 const createSendToken = (user, statusCode, res) =>{
    const token = signToken(user._id);
    console.log(user._id);
    console.log(user.birim);
    // console.log(birim);

    const cookieOptions = {
        expires: new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    
    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);
    user.password = undefined;
    res.status(statusCode).json({
        status: 'success',
        token,
        data:{
            user
        }
    });
 }

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);
    createSendToken(newUser, 202, res);

});
exports.login =catchAsync( async(req, res, next) =>{
    const { birim, password} = req.body;
    // 1) check if email and pasword exist
    if(!birim || !password){
        return next(new AppError('biriminizi ve sifrenizi giriniz',400));
    }
    
    // 2) check if user and pass is correct
    const user = await User.findOne({birim}).select('+password');
    if(!user || !(await user.correctPassword(password,user.password))){
        return next(new AppError('birim veya sifre hatali',401));
    }

    // 3) if everythis is okay send the token
    createSendToken(user, 200, res);
});

exports.protect = catchAsync(async(req, res, next) => {
    // 1 check the token
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    
    if(!token){
        return next(new AppError('giris yapmadiniz',401));
    }
    // 2 validate token
    const decode =  await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3 check if user still exists

    const freshUser = await User.findById(decode.id);
    if(!freshUser){
        return next(new AppError('Kullanici bulunmamaktadir',401));
    }
    // 4 check if user changed password after the token was issued
    if(freshUser.changePasswordAfter(decode.iat)){
        return next(new AppError('sifrenizde degisiklik yapmissiniz lutfen yeni sifre ile giris yapiniz'));
    }
    // check the authority

    if(freshUser.birim !== req.params.birim && freshUser.role !== 'admin'){
        next(new AppError('Yetkiniz yoktur',403));
    }


    
    req.user = freshUser;
    next();
});
exports.restrictTo = (...roles) =>{
    return (req, res, next) =>{
        // const user = req.user;
        if(!roles.includes(req.user.role)  ){
            // console.log(req.params.birim);
            // console.log(req.user);
            return next(new AppError('bu islem yapma yetkiniz yoktur ',403));
        }
        next();
    }
}
exports.updatePassword =catchAsync( async(req, res, next)=> {
    //get user from the collection
    const user = await User.findById(req.user.id).select('+password');
    // check if the current password is correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('HATALI SIFRE', 401));
      }
    // if so update the password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    // log the user in , send JWT
    createSendToken(user, 200, res);
});

// exports.restrictPostTo = catchAsync( async(req, res, next) => {
//      const user = await User.findOne(req.user.birim);
//      console.log(user);
//      if(user.birim !== req.params.birim){
//          next(new AppError('yetkiniz yok',403));
//      }
//      next();
// });

// exports.restrictPostTo = (req,res,next) =>{
   
// }




