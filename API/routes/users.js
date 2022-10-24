const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//UPDATE

router.put("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {
        if (req.params.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("Puedes actualizar solo tu usuario")
    }
});

//DELETE

router.delete("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {

        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Ususario eliminado...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("Puedes eliminar solo tu usuario")
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
