function extraerDatos() {
  let imc =
    document.getElementById("peso").value /
    (document.getElementById("altura").value *
      document.getElementById("altura").value);

  Swal.fire("tu indice de masa corporal es de:" + imc);
}
