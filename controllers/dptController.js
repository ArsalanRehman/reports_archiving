const express = require('express');
const mongoose = require('mongoose');
const dptModels = require('./../models/dptModels');
const catchAsync = require('./../utlis/catchAsync');


module.exports.getDpts = catchAsync(async(req, res, next) => {
  
  const birim = req.params.birim;
  console.log(birim);
    dpt = null;
    
      switch(birim){
        case 'AramaKurtarma':
        dpt = await dptModels.RaporAK.find();
        break;
         
        case 'DagitimB':
          dpt = await dptModels.RaporDB.find();
        break;
      
        case 'GencIHH':
        dpt = await dptModels.RaporG.find();
        break; 
      
        case 'IlcelerB':
          dpt = await dptModels.RaporIB.find();
        break;
      
        case 'KadinKollari':
        dpt = await dptModels.RaporKK.find();
        break;
      
        case 'KayirB':
       dpt = await dptModels.RaporKB.find();
       break;
      
       case 'LojistikB':
       dpt = await dptModels.RaporAK.find();
        break;
      
        case 'MeslekiEgitim':
        dpt = await dptModels.RaporME.find();
        break;
      
       case 'MisafirB':
        dpt = await dptModels.RaporMisafirB.find();
        break;
      
        case 'MuhacirB':
        dpt = await dptModels.RaporMuhacirB.find();
        break;
      
        case 'MuhasebeB':
        dpt = await dptModels.RaporMuhasebeB.find();
        break;
      
        case 'TanitimB':
        dpt = await dptModels.RaporTan.find();
        break;
      
        case 'TercumanlikB':
        dpt = await dptModels.RaporTer.find();
        break;
      
        case 'TespitB':
        dpt = await dptModels.RaporTes.find();
        break;
      
        case 'Udef':
        dpt = await dptModels.RaporU.find();
        break;
      
        case 'YetimB':
         dpt = await dptModels.RaporYB.find();
         break;

         default:
          res.status(404).json({
            status: 'Fail',
            message: 'Birim Bulunmamaktadir'
          });
      
      }
      res.status(201).json({
        status: 'success',
        data:{
          Rapor: dpt
        }
        
      });

    
    

  });
            

  


  // const dpt = await dptModels.RaporU.find();
  // res.send(dpt);
    
  
  module.exports.postDpts = catchAsync(async(req, res, next) => {
    const birim = req.params.birim;
    console.log(birim);
      newRapor = null;
    
      switch(birim){
               case 'AramaKurtarma':
               newRapor = await dptModels.RaporAK.create(req.body);
               break;
                
               case 'DagitimB':
                 newRapor = await dptModels.RaporDB.create(req.body);
               break;

               case 'GencIHH':
               newRapor = await dptModels.RaporG.create(req.body);
               break; 

               case 'IlcelerB':
                 newRapor = await dptModels.RaporIB.create(req.body);
               break;

               case 'KadinKollari':
               newRapor = await dptModels.RaporKK.create(req.body);
               break;

               case 'KayirB':
              newRapor = await dptModels.RaporKB.create(req.body);
              break;

              case 'LojistikB':
              newRapor = await dptModels.RaporAK.create(req.body);
               break;

               case 'MeslekiEgitim':
               newRapor = await dptModels.RaporME.create(req.body);
               break;

              case 'MisafirB':
               newRapor = await dptModels.RaporMisafirB.create(req.body);
               break;

               case 'MuhacirB':
               newRapor = await dptModels.RaporMuhacirB.create(req.body);
               break;

               case 'MuhasebeB':
               newRapor = await dptModels.RaporMuhasebeB.create(req.body);
               break;

               case 'TanitimB':
               newRapor = await dptModels.RaporTan.create(req.body);
               break;

               case 'TercumanlikB':
               newRapor = await dptModels.RaporTer.create(req.body);
               break;

               case 'TespitB':
               newRapor = await dptModels.RaporTes.create(req.body);
               break;

               case 'Udef':
               newRapor = await dptModels.RaporU.create(req.body);
               break;

               case 'YetimB':
                newRapor = await dptModels.RaporYB.create(req.body);
                break;

                default:
                  res.status(404).json({
                    status: 'Fail',
                    message: 'Birim Bulunmamaktadir'
                  });                

          }
     
             
    res.status(201).json({
      status: 'success',
      data:{
        Rapor: newRapor
      }
      
    });
    
  
  // res.send('post dpts is here');  
   
  });

  // module.exports.getDpt = async(req, res, next) => {


  // }





  module.exports.postDpt = catchAsync(async(req, res, next) => {
 
    const birim = req.params.birim;
    dpt = null;

    

      switch(birim){
        case 'AramaKurtarma':
        dpt = await dptModels.RaporAK.findById(req.params.id);
        break;
         
        case 'DagitimB':
          dpt = await dptModels.RaporDB.findById(req.params.id);
        break;
      
        case 'GencIHH':
        dpt = await dptModels.RaporG.findById(req.params.id);
        break; 
      
        case 'IlcelerB':
          dpt = await dptModels.RaporIB.findById(req.params.id);
        break;
      
        case 'KadinKollari':
        dpt = await dptModels.RaporKK.findById(req.params.id);
        break;
      
        case 'KayirB':
       dpt = await dptModels.RaporKB.findById(req.params.id);
       break;
      
       case 'LojistikB':
       dpt = await dptModels.RaporAK.findById(req.params.id);
        break;
      
        case 'MeslekiEgitim':
        dpt = await dptModels.RaporME.findById(req.params.id);
        break;
      
       case 'MisafirB':
        dpt = await dptModels.RaporMisafirB.findById(req.params.id);
        break;
      
        case 'MuhacirB':
        dpt = await dptModels.RaporMuhacirB.findById(req.params.id);
        break;
      
        case 'MuhasebeB':
        dpt = await dptModels.RaporMuhasebeB.findById(req.params.id);
        break;
      
        case 'TanitimB':
        dpt = await dptModels.RaporTan.findById(req.params.id);
        break;
      
        case 'TercumanlikB':
        dpt = await dptModels.RaporTer.findById(req.params.id);
        break;
      
        case 'TespitB':
        dpt = await dptModels.RaporTes.findById(req.params.id);
        break;
      
        case 'Udef':
        dpt = await dptModels.RaporU.findById(req.params.id);
        break;
      
        case 'YetimB':
         dpt = await dptModels.RaporYB.findById(req.params.id);
         break;
      
         default:
          res.status(404).json({
            status: 'Fail',
            message: 'Birim Bulunmamaktadir'
          });
    
      }
      res.status(201).json({
        status: 'success',
        data:{
          Rapor: dpt
        }
        
      });


    
    

    // res.send('Get getDpt');
  });
  module.exports.updateDpt = catchAsync(async(req, res, next) => {
    dpt = null;
    const birim = req.params.birim;

      switch(birim){
        case 'AramaKurtarma':
        dpt = await dptModels.RaporAK.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
         
        case 'DagitimB':
          dpt = await dptModels.RaporDB.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
          });
        break;
      
        case 'GencIHH':
        dpt = await dptModels.RaporG.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break; 
      
        case 'IlcelerB':
          dpt = await dptModels.RaporIB.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
          });
        break;
      
        case 'KadinKollari':
        dpt = await dptModels.RaporKK.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'KayirB':
       dpt = await dptModels.RaporKB.findByIdAndUpdate(req.params.id, req.body,{
         new: true,
         runValidators: true
       });
       break;
      
       case 'LojistikB':
       dpt = await dptModels.RaporAK.findByIdAndUpdate(req.params.id, req.body,{
         new: true,
         runValidators: true
       });
        break;
      
        case 'MeslekiEgitim':
        dpt = await dptModels.RaporME.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
       case 'MisafirB':
        dpt = await dptModels.RaporMisafirB.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'MuhacirB':
        dpt = await dptModels.RaporMuhacirB.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'MuhasebeB':
        dpt = await dptModels.RaporMuhasebeB.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'TanitimB':
        dpt = await dptModels.RaporTan.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'TercumanlikB':
        dpt = await dptModels.RaporTer.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'TespitB':
        dpt = await dptModels.RaporTes.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'Udef':
        dpt = await dptModels.RaporU.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true
        });
        break;
      
        case 'YetimB':
         dpt = await dptModels.RaporYB.findByIdAndUpdate(req.params.id, req.body,{
           new: true,
           runValidators: true
         });
         break;
      
         default:
          res.status(404).json({
            status: 'Fail',
            message: 'Birim Bulunmamaktadir'
          });
      
      }
      res.status(201).json({
        status: 'success',
        data:{
          Rapor: dpt
        }
        
      });


    

    // res.send('Update Department here');
  });
  module.exports.deleteDpt = catchAsync(async(req, res, next) => {
    dpt = null;
    const birim = req.params.birim;
    
      switch(birim){
        case 'AramaKurtarma':
        dpt = await dptModels.RaporAK.findByIdAndDelete(req.params.id);
        break;
         
        case 'DagitimB':
          dpt = await dptModels.RaporDB.findByIdAndDelete(req.params.id);
        break;
      
        case 'GencIHH':
        dpt = await dptModels.RaporG.findByIdAndDelete(req.params.id);
        break; 
      
        case 'IlcelerB':
          dpt = await dptModels.RaporIB.findByIdAndDelete(req.params.id);
        break;
      
        case 'KadinKollari':
        dpt = await dptModels.RaporKK.findByIdAndDelete(req.params.id);
        break;
      
        case 'KayirB':
       dpt = await dptModels.RaporKB.findByIdAndDelete(req.params.id);
       break;
      
       case 'LojistikB':
       dpt = await dptModels.RaporAK.findByIdAndDelete(req.params.id);
        break;
      
        case 'MeslekiEgitim':
        dpt = await dptModels.RaporME.findByIdAndDelete(req.params.id);
        break;
      
       case 'MisafirB':
        dpt = await dptModels.RaporMisafirB.findByIdAndDelete(req.params.id);
        break;
      
        case 'MuhacirB':
        dpt = await dptModels.RaporMuhacirB.findByIdAndDelete(req.params.id);
        break;
      
        case 'MuhasebeB':
        dpt = await dptModels.RaporMuhasebeB.findByIdAndDelete(req.params.id);
        break;
      
        case 'TanitimB':
        dpt = await dptModels.RaporTan.findByIdAndDelete(req.params.id);
        break;
      
        case 'TercumanlikB':
        dpt = await dptModels.RaporTer.findByIdAndDelete(req.params.id);
        break;
      
        case 'TespitB':
        dpt = await dptModels.RaporTes.findByIdAndDelete(req.params.id);
        break;
      
        case 'Udef':
        dpt = await dptModels.RaporU.findByIdAndDelete(req.params.id);
        break;
      
        case 'YetimB':
         dpt = await dptModels.RaporYB.findByIdAndDelete(req.params.id);
         break;
      
         default:
          res.status(404).json({
            status: 'Fail',
            message: 'Birim Bulunmamaktadir'
          });
      
      }

   
 
  });
  




    ///////////////////////////////////////////////////////////////
    // const test = new RaporY({
    //   soru1:'wksjfnskdjnfksjdnfskjnf',
    //   soru2:'asdasdwasdw'
    // });
    // test.save().then(doc => {
    //   console.log(doc)
    // }).catch(err => {
    //   console.log(err);
    // });
  
  
  ///////////////