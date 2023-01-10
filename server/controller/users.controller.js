const UsersModel = require('../model/users.model');

async function usersPost(request, response) {
    let NewUsers = new UsersModel(request.body);
    try {
        await NewUsers.save();
        response.send({
            message: "Users Details Are Saved Successfully",
            users_description: NewUsers
        })
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function usersGet(request, response) {
    const collectionOfUsers = await UsersModel.find({});
    try {
        response.send(collectionOfUsers);
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function usersPut(request, response) {
    try {
        await UsersModel.findByIdAndUpdate(request.params.id, request.body);
        response.send("Data Updated Successfully->>>>");
    } catch (error) {
        response.send({ message: error.message });
    }
}

async function usersDelete(request, response) {
    try {
        await UsersModel.findByIdAndDelete(request.params.id);
        response.send("Data Deleted Successfully->>>>");
    } catch (error) {
        response.send({ message: error.message });
    }
}


module.exports = { usersGet, usersPost, usersPut, usersDelete };