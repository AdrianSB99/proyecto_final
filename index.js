const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'adrian2',
    password: '123',
    database: 'anuario'
});

//INICIO DE SESIÓN
router.get('/Asesion', function(req, res, next) {
  conexion.query('SELECT * FROM tblalumnos', function (error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('Asesion', { rows: null });
    } else {
      res.render('Asesion', { rows: rows });
    }
  });
  conexion.query('SELECT * FROM tblprofesores', function (error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('Asesion', { rows: null });
    } else {
      res.render('Asesion', { rows: rows });
    }
  });
  });

//REGISTRO
router.get('/Aregistro', function(req, res, next) {
    conexion.query('SELECT * FROM tblalumnos', function (error, rows, fields) {
        if (error) {
          console.log(error);
          res.render('Aregistro', { rows: null });
        } else {
          res.render('Aregistro', { rows: rows });
        }
      });
  });

//PÁGINA PRINCIPAL ALUMNOS
router.get('/BinicioAlu', function(req, res, next) {
    res.render('BinicioAlu');
  });

//SECCION PROYECTOS
//alumnos
router.get('/CproyectosAlu', function(req, res, next) {
  conexion.query('SELECT * FROM tblproyectos', function (error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('CproyectosAlu', { rows: null });
    } else {
      res.render('CproyectosAlu', { rows: rows });
    }
  });
  });
  //profes
  router.get('/CproyectosPro', function(req, res, next) {
    conexion.query('SELECT * FROM tblproyectos', function (error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('CproyectosPro', { rows: null });
    } else {
      res.render('CproyectosPro', { rows: rows });
    }
  });
  });

//REGISTRAR PROYECTO
router.get('/Eagregarproyecto', function(req, res, next) {
  conexion.query('SELECT * FROM tblproyectos', function (error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('Eagregarproyecto', { rows: null });
    } else {
      res.render('Eagregarproyecto', { rows: rows });
    }
  });
});

//BÚSQUEDA
router.post('/buscaralumnos', function(req, res, next) {
  const nombre = req.body.nombre;

  const query = `SELECT * FROM tblalumnos WHERE nombre LIKE '%${nombre}%'`;
  conexion.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('error', { message: 'Error al buscar alumnos', error: error });
    } else {
      res.render('CresultadosAlu', { rows: rows });
    }
  });
})
router.post('/buscaralumnosp', function(req, res, next) {
  const nombre = req.body.nombre;

  const query = `SELECT * FROM tblalumnos WHERE nombre LIKE '%${nombre}%'`;
  conexion.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('error', { message: 'Error al buscar alumnos', error: error });
    } else {
      res.render('CresultadosPro', { rows: rows });
    }
  });
})
router.post('/buscarproyecto', function(req, res, next) {
  const textoBusqueda = req.body.textoBusqueda;
  const query = `SELECT * FROM tblproyectos WHERE nombre LIKE '%${textoBusqueda}%' OR propietario LIKE '%${textoBusqueda}%'`;
  conexion.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('error', { message: 'Error al buscar proyectos', error: error });
    } else {
      res.render('CproyectosAlu', { rows: rows });
    }
  });
});
router.post('/buscarproyectop', function(req, res, next) {
  const textoBusqueda = req.body.textoBusqueda;
  const query = `SELECT * FROM tblproyectos WHERE nombre LIKE '%${textoBusqueda}%' OR propietario LIKE '%${textoBusqueda}%'`;
  conexion.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
      res.render('error', { message: 'Error al buscar proyectos', error: error });
    } else {
      res.render('CproyectosPro', { rows: rows });
    }
  });
});

//alumnos
router.get('/CresultadosAlu', function(req, res, next) {
    res.render('CresultadosAlu');
  });
  //profes
router.get('/CresultadosPro', function(req, res, next) {
  res.render('CresultadosPro');
});
  

//PÁGINA PRINCIPAL PROFESORES
router.get('/BinicioPro', function(req, res, next) {
    res.render('BinicioPro');
  });

//ADMINISTRACIÓN DE ALUMNOS
router.get('/Dusuarios', function(req, res, next) {
  conexion.query('SELECT * FROM tblalumnos', function (error, rows, fields) {
      if (error) {
        console.log(error);
        res.render('Dusuarios', { rows: null });
      } else {
        res.render('Dusuarios', { rows: rows });
      }
    });
});

  module.exports = router;