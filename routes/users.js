const express = require("express");
const router = express.Router();
const userdata = require("../model/userdata");

router.get("/", async (req, res) => {
    try {
        const users = await userdata.find();
        res.json(users);
    
    } catch (error) {
        res.send({ message: error });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const singleuser = await userdata.findById(req.params.id);
        res.json(singleuser);
    
    } catch (error) {
        res.send({ message: error });
    }
})
router.post("/", async (req, res) => {
       const createUser = new userdata({
            name:req.body.name,
            technology: req.body.technology,
            enrolled:req.body.enrolled
        })
    try {
        const a1 = await createUser.save()
        res.json(a1);
     
    } catch (error) {
        res.send({ message: error });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const singleuser = await userdata.findById(req.params.id);
        singleuser.name = req.body.name,
        singleuser.technology = req.body.technology,
            singleuser.enrolled = req.body.enrolled
        
        const a1= await singleuser.save()
        res.json(a1);
    
    } catch (error) {
        res.send({ message: error });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const singleuser = await userdata.findById(req.params.id);
    
        const a1= await singleuser.remove()
        res.json(a1);
    
    } catch (error) {
        res.send({ message: error });
    }
})
module.exports = router;