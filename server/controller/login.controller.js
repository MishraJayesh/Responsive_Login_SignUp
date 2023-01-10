const LoginModel = require('../model/login.model');

async function loginPost(request, response) {
    let NewLogin = new LoginModel(request.body);
    try {
        await NewLogin.save();
        response.send({
            message: "Login Details Are Saved Successfully",
            login_description: NewLogin
        })
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function loginGet(request, response) {
    const collectionOfLogin = await LoginModel.find({});
    try {
        response.send(collectionOfLogin);
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function loginPut(request, response) {
    try {
        await LoginModel.findByIdAndUpdate(request.params.id, request.body);
        response.send("Data Updated Successfully->>>>");
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function loginDelete(request, response) {
    try {
        await LoginModel.findByIdAndDelete(request.params.id);
        response.send("Data Deleted Successfully->>>>");
    } catch (error) {
        response.send({ message: error.message });
    }
}


module.exports = { loginGet, loginPost, loginPut, loginDelete };