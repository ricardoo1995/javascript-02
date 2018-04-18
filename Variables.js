console.log('Hola mundo');
var mutar;
var nombre = 'Ricardo';
mutar=nombre;
var edad = peso = 80.5;
var edad = 22;
mutar = edad;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;
// o false 1 true -1 true
// cmd + a = seleccionara
// cmd + alt + l = indentar
if (noExisto) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}

//Json
//Objectos
var usuario = {
    "nombre":
"Ricardo",
    apellido
:
"Ortiz",
    cedula
:
'1722730650',
    edad
:
23,
        imprimir : function () {
            console.log(this.nombre + ' ' + this.apellido + ' '+ this.edad);
        }
}
;
usuario.imprimir();
console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento= new Date ();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = "Ricardo";
console.log(usuario);
var potenciaDeDosDeUnNumero = function noEsnecesarioPonerElNombre(numero){
    return numero*numero;
};
var potenciaDeDosDeUnNumeroDos = function (numero){
    return numero*numero
};
console.log(potenciaDeDosDeUnNumero(3,23,3,4,5,2));
console.log(potenciaDeDosDeUnNumeroDos(2));

