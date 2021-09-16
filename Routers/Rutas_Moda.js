const express = require('express');
const router = express.Router();

const controlador = require('../controllers/Controladores');

const router = express.Router();

router.get('/', controlador.home);

router.get('/modahombre/', controlador.modaHombre);

router.get('/modamujer/', controlador.modaMujer);

router.post('/alta',
  [
    check('nombre').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({
      min: 6
    })
  ],
  controlador.altaUsuario);

router.post('/login', controlador.loginUsuario);

router.use(checkAuth);

router.post(
  '/pedido',
  [
    // check('nombre').not().isEmpty(),
    // check('descripcion').isLength({      //pendiente determinar formulario pedido
    //   min: 5
    // }),
    // check('direccion').not().isEmpty()
  ],
  controlador.crearPedido);

router.patch('/pedido/:did', controlador.modificarPedido);

router.delete('/pedido/:did', controlador.eliminarPedido);

//////Rutas de control de acceso//////



module.exports = router;
















