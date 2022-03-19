import User from "../models/UserModel";

(async() => {
    await User.sync({
        force:true,
        // alter:true,
    });
})()