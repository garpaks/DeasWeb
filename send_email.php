<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $empresa = htmlspecialchars($_POST['empresa']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

  
    $to = "contacto@deas.mx, ventasdeas.mx@gmail.com";  
    $subject = "Nuevo mensaje de DeasWebsite";


    $body = "Nombre: $nombre\n";
    $body .= "E-mail: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Empresa: $empresa\n";
    $body .= "Mensaje: $mensaje\n";

   
    $headers = "From: contacto@deas.mx\r\n"; 


    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                alert('¡Enviado exitosamente! En breve nos comunicaremos contigo.');
                window.location.href = 'index.html'; 
              </script>";
    } else {
        echo "<script>
                alert('Hubo un error al enviar el formulario, intenta de nuevo.');
                window.location.href = 'index.html'; 
              </script>";
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método de solicitud no válido. Intenta de nuevo."]);
}
?>