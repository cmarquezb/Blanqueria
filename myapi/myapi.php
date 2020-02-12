<?php

include_once 'articulos.php';

class ApiArticulo{


    function getAll(){
        $articulo = new Articulo();
        $articulos = array();
        $articulos["items"] = array();

        $res = $articulo->obtenerArticulos();

        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['idproducto'],
                    "producto" => $row['nom_tipo_prod'],
                    "marca" => $row['nom_marca'],
                    "modelo" => $row['nom_modelo'],
                    "idproducto" => $row['tipo_producto_idtipo_producto'],
                    "idmarca" => $row['marca_has_modelo_marca_idmarca'],
                    "idmodelo" => $row['marca_has_modelo_modelo_idmodelo'],
                    "ancho" => $row['ancho'],
                    "largo" => $row['largo'],
                    "alto" => $row['alto'],
                    "precio" => $row['precio_sugerido'],
                    "garantia" => $row['garantia'],
                    "material" => $row['descrip_material'],
                    "material_inter" => $row['material_interno'],
                    "material_exter" => $row['material_externo'],
                    "material_adic" => $row['descripcion_adicional'],
                    "stock" => $row['stock'],
                    "estilo" => $row['estilo'],
                    //"ruta" => $row['ruta'],
                    //"porcentaje_oferta" => $row['por_oferta'],
                    //"color" => $row['color'],
                    //"oferta_s_n" => $row['oferta'],
                   // "oferta" => $row['imagen'],
                    "fecha_valor" => $row['fecha_valor'],                    
                );
                array_push($articulos["items"], $item);
            }
        
            echo json_encode($articulos);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }
}

?>