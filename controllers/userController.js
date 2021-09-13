const user=require('../Models/user');

class userController{
constructor(){};

  async login(req,res){
  var userName= req.params.userName ;
  var password= req.params.password ;
  let userG= await user.find({userName: userName,password:password})
  res.send(userG);
 
}
  async post(req,res){
  let userP= new user(req.body)
  console.log(userP);
   let data=await userP.save()
    res.send(data);
    
  }
  async update(req,res){
    var id= req.params.id;
    let userU= await user.find({id:id})
    let userI= new user(req.body)
    let updateUser = await user.findOneAndUpdate(userU,userI)
    // let data= updateUser.save()
     res.send(updateUser);
  }
  async  delete(req,res){
    var id= req.params.id ;
     await user.deleteOne(id);
    res.send("user deleted");
}
}
module.exports =new userController();