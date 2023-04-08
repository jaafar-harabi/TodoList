const express = require('express')
const router = express.Router()


const {post,getall,getbyid,del,update} = require('../controllers/todo')



router.post('/post',post)

router.get('/getall',getall)

router.get('/getbyid/:id',getbyid)

router.delete('/delete/:id',del)

router.put('/update/:id',update)




module.exports = router