<?php

include_once 'db.php';

class Articulo extends DB{
    
    function obtenerArticulos(){
        $query = $this->connect()->query('SELECT P.*, TP.*, MA.*, MO.*, MT.*  FROM producto P, marca_has_modelo MM, material MT, tipo_producto TP, marca MA, modelo MO WHERE 
        P.marca_has_modelo_marca_idmarca = MM.marca_idmarca AND P.marca_has_modelo_modelo_idmodelo = MM.modelo_idmodelo
        AND P.tipo_producto_idtipo_producto = TP.idtipo_producto  AND P.material_idmaterial = MT.idmaterial
        AND MM.marca_idmarca = MA.idmarca AND MM.modelo_idmodelo = MO.idmodelo');
        return $query;
    }

}

?>