class UserControllrer{
    index(req,res){
        console.log(req.body)
    }
    show(req,res){
        var users = ["José","Roberto","Gabriel"]
        return res.status(200).json({
            error:false,
            users
        })

    }
}
module.exports = new UserControllrer()