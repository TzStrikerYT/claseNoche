class Usuario {
  constructor(username, pass, email, nombres, apellidos, ciudad, numContacto) {
    this.username = username;
    this.pass = pass;
    this.email = email;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.ciudad = ciudad;
    this.numContacto = numContacto;
  }

  //metodos

  registrar() {
    return `El usuario ${this.username} esta registrado verifique en ${this.email} para validar su cuenta`;
  }

  enviarMensaje(mensaje) {
    if (mensaje && mensaje !== "") {
      return "Mensaje Enviado";
    } else {
      return "No hay mensaje para enviar";
    }
  }

  login() {
    return "Sesion iniciada";
  }

  updPass() {
    return `revise en ${this.email} para cambiar la contraseña`;
  }
}

class Cliente extends Usuario {
  constructor(
    username,
    pass,
    email,
    nombres,
    apellidos,
    ciudad,
    numContacto,
    metodoPago,
    tarCredito,
    direccion
  ) {
    super(username, pass, email, nombres, apellidos, ciudad, numContacto);
    this.metodoPago = metodoPago;
    this.tarCredito = tarCredito;
    this.direccion = direccion;
  }

  //metodos
  crearOrden(productos, direccion, propina, precio) {
    try {
      let pedido = {
        productos: productos,
        direccion: direccion,
        propina: propina,
        precioFinal: precio + propina,
        cliente: `${this.nombres} ${this.apellidos}`,
        pago: `${this.metodoPago}`,
      };

      if (productos && direccion && precio) {
        return `La orden se solicito correctamente ${JSON.stringify(pedido)}`;
      } else {
        throw `por favor diligencia los campos necesarios`;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  cancelarPedido() {
    return `pedido cancelado`;
  }

  calificarServicio(calificacion) {
    if (calificacion) {
      return `Se ha enviado tu calificacion`;
    } else {
      return `se debe enviar una calificacion`;
    }
  }

  codigoDescuento(codigo) {
    try {
      if (codigo === "DaniLo+") {
        return `Descuento especial de Dani aplicado `;
      } else {
        throw `Codigo incorrecto`;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}

let cliente = new Cliente(
  "Lizzy",
  "1234",
  "test@gmail.com",
  "Elizabeth Juanita",
  "Costa Brava Cortes",
  "Bogota D.C.",
  "+573156489789",
  "Credito",
  { num: "134 1235 1236 1356", exp: "12/2025", cvv: "***" },
  "Cll63 #14-17"
);

//console.log(cliente.registrar());
//console.log(cliente.enviarMensaje("Hola me puedes ayudar"))
/*console.log(
  cliente.crearOrden(
    ["Papas", "Hamburguesa", "Gazimba de la casa", { salsas: true }],
    cliente.direccion,
    3000,
    67000
  )
);*/
//console.log(cliente.codigoDescuento("DaniLo+"))
console.log(cliente.cancelarPedido())