# Santa Ana Comercial — Landing Page Inmobiliaria

Landing page comercial moderna y responsive para el proyecto en construcción en **Santa Ana 3845, Barrio La Madrid, Córdoba, Argentina**.

Diseñada específicamente para convertir visitas escaneadas desde códigos QR en el cartel de obra en consultas calificadas por WhatsApp.

---

## 1. Cómo reemplazar imágenes

Las imágenes del proyecto se encuentran en la carpeta `public/images/` (y una copia en `public/`):

- **`frete2.png`**: Render principal de fachada usado en el HERO y la galería.
- **`fteloc.png`**: Perspectiva lateral de los locales y estacionamiento frontal.
- **`salonedi2.png`**: Interior del salón comercial.
- **`editadaref.png`**: Interior de la nave de depósito / galpón.

Para reemplazarlas por nuevos renders o fotos de avance de obra:
1. Copiá tus archivos con los mismos nombres en `public/images/frete2.png`, `public/images/fteloc.png`, `public/images/salonedi2.png` y `public/images/editadaref.png`.
2. O bien, editá las rutas en el archivo de configuración `src/config/projectConfig.ts` en la sección `images`.

---

## 2. Cómo cambiar WhatsApp, email y enlaces

Toda la información de contacto, textos y condiciones comerciales está centralizada en un único archivo:

📁 **`src/config/projectConfig.ts`**

Podés editar:
- **`contact.whatsappNumber`**: Número de teléfono sin signos ni espacios para la API de WhatsApp (ejemplo: `"5493510000000"`).
- **`contact.whatsappDisplay`**: Formato visual para mostrar en la web (ejemplo: `"+54 9 351 123-4567"`).
- **`contact.email`**: Correo electrónico de contacto.
- **`contact.instagram`** e **`instagramUrl`**: Usuario y enlace a redes sociales.
- **`contact.googleMapsUrl`**: Enlace a la ubicación exacta en Google Maps.
- **`commercial.price`** y **`commercial.conditions`**: Precio y condiciones de venta/alquiler.
- **`messages`**: Los mensajes automáticos precargados para WhatsApp (general y específico para visitantes del cartel de obra con `?origen=cartel`).

---

## 3. Cómo desplegar el proyecto en Vercel

El proyecto está 100% optimizado y listo para Vercel:

1. Subí o sincronizá este repositorio en **GitHub**, **GitLab** o **Bitbucket**.
2. Ingresá a [vercel.com](https://vercel.com) e iniciá sesión.
3. Hacé clic en **"Add New..."** > **"Project"** e importá este repositorio.
4. Vercel detectará la configuración automáticamente (`framework: Vite`, `output: dist`).
5. Hacé clic en **"Deploy"**. En menos de 60 segundos la landing page estará online con certificado SSL gratuito.

### Medición de visitas desde el cartel de obra
Para el cartel de obra físico, generá un código QR que apunte a tu dominio con el parámetro:
```text
https://tu-dominio.com/?origen=cartel
```
La web detectará silenciosamente este origen, limpiará la barra del navegador para una navegación pulcra y adaptará el mensaje inicial de WhatsApp para que sepas de inmediato que la consulta proviene del cartel físico en obra.
