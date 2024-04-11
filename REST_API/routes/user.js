const express = require('express');
const router = express.Router();
const {HandleGetAllUser,
    HandleGetUserbyId,
    HandleUpdateUserbyId,
    HandleDeleteUserbyId,
    HandleCreateUser
} = require("../controllers/user");

router.get("/",HandleGetAllUser);
router
.route("/:id")
.get(HandleGetUserbyId)
.patch(HandleUpdateUserbyId)
.delete(HandleDeleteUserbyId)

router.post("/",HandleCreateUser);

module.exports = router;