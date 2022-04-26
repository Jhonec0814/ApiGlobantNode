export class ControladorReserva{


    constructor(){}

    insertar(request,response){

        //Recibir los datos de pa peticion

        let datosReserva=request.body//Recibo datos

        //Conectar base datos

        //Ejecutar la consulta(decirle que metodo debe utilizar)

        //Envio la respuesta
        response.status(200).json({
            mensaje:"Exito en el ingreso de la reserva",
            datosIngresados:datosReserva,
            estado:true
        })
    }

    buscarPorId(request,response){
        let id=request.params.id//Id que llega por la URL

        response.status(200).json({
            mensaje:"Exito buscando reserva por ID ",
            datos:"Datos reserva por id: "+id,
            estado:true
        })
    }

    editar(request,response){
        let id=request.params.id //id que llega por la URL
        let datosReserva=request.body //RECIBE DEL BODY

        response.status(200).json({
            mensaje:"Exito editando la reserva por ID ",
            datos:"Datos del id: "+id,
            estado:true
        })
    
    }

    eliminar(request,response){
        let id=request.params.id //id que llega por la URL
        
        response.status(200).json({
            mensaje:"Exito eliminando la reserva por ID ",
            datos:"Datos del id: "+id,
            estado:true
        })
    }



}