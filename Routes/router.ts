import {Router,Request,Response} from 'express'



 const router = Router();

router.get('/mensajes',(req:Request,res:Response)=>{

    res.json({
        ok:"true",
        mensaje:'Todo esta Funcionando'
    })

}
)

router.post('/mensajes',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de; 



    res.json({
        ok:"true",
        mensaje:'Post-Listo',
        cuerpo,
        de,
    })

}
)
router.post('/mensajes/:id',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de; 
    const id = req.body.id; 




    res.json({
        ok:"true",
        mensaje:'Post-Listo',
        cuerpo,
        de,
        id

    })

}
)


export default router