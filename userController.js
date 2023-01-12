const userSchema = require('./userSchema')
const bcrypt = require('bcrypt')


exports.SignUp = ((request,response)=>{

    let password=bcrypt.hashSync(request.body.password, 10);

    userSchema.create({FirstName:request.body.FirstName,LastName:request.body.LastName,email:request.body.email,password:password},(error,data)=>{

        if(error){
            return response.status(500).json({
                message:"Error while creating user",
            })
        }else{
            return response.status(200).json({
                message:"User created successfully",
                data:data,
            })
        }
    })
})
exports.Login = ((request,response)=>{

    userSchema.findOne({email:request.body.email},(error,data)=>{
        if(error){
            return response.status(500).json({
                message:"Error while finding user",
            })
        }
        if(data){
            if(bcrypt.compareSync(request.body.password, data.password)){
                return response.status(200).json({
                    message:"User logged in successfully",
                    data:data,
                })
            }else{
                return response.status(400).json({
                    message:"Invalid email or password",
                })
            }
        }else{
            return response.status(400).json({
                message:"Invalid email or password",
            })
        }
    })

})