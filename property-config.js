const propertyConfig = {
  // 1. SEO Mágico: Algoritmos de Búsqueda y Redes (Alto CTR)
  seo: {
    title: "Venta Apartamento Nuevo con Terraza Privada | Cedritos, Bogotá D.C.",
    description: "¡Oportunidad única! Apartamento para estrenar de 151.70 m² en Cedritos. 3 habitaciones con baño privado, espectacular terraza privada de 84 m² y amenidades tipo club.",
    keywords: "apartamento cedritos, terraza privada, venta apartamento bogotá, apartamento para estrenar, vecy bienes raices",
    ogUrl: "https://ap-nuevo-cedritos-bog.netlify.app/",
    propertyId: "UBIK-CEDRITOS",
    ogImage: "assets/portada_video_fotos_redes_enlaces.png",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "💥 ¡OFERTAZO! 💖",
    tituloHtml: "Apartamento Nuevo con Terraza | Cedritos - Bogotá",
    precioVenta: "$1.300.000.000",
    valorAdmin: "$1.060.000",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Const.", value: "151.70 m²", icon: "📐" },
    { label: "Terraza Privada", value: "84 m²", icon: "🌿" },
    { label: "Habitaciones", value: "3 (c/u baño)", icon: "🛏️" },
    { label: "Baños", value: "4", icon: "🚿" },
    { label: "Parqueadero", value: "2", icon: "🚗" },
    { label: "Antigüedad", value: "Para Estrenar", icon: "🏗️" },
    { label: "Estrato", value: "5", icon: "✨" },
    { label: "Piso", value: "5", icon: "🏢" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "3 Hab. con baño privado", emoji: "😍" },
    { name: "2 Hab. con Walk-in closets", emoji: "👗" },
    { name: "Cocina abierta americana", emoji: "🍳" },
    { name: "Zona social amplia", emoji: "🛋️" },
    { name: "Lavandería independiente", emoji: "🧺" },
    { name: "Depósito privado", emoji: "📦" },
    { name: "Hermosa vista al occidente de Bogotá", emoji: "🌆" }
  ],
  destacadoInterno: "Disfruta de un oasis urbano con una terraza de 84 m² de uso exclusivo. Ideal para tus reuniones, zona de BBQ o simplemente para relajarte al aire libre con seguridad y tranquilidad.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Terraza social con BBQ", emoji: "🍖" },
    { name: "Gimnasio dotado", emoji: "🏋️" },
    { name: "Sauna", emoji: "🧖" },
    { name: "Salón social", emoji: "🎉" },
    { name: "Vigilancia 24/7", emoji: "👮" },
    { name: "2 Ascensores modernos", emoji: "🛗" }
  ],
  destacadoUbicacion: "✨ Este apartamento es el lienzo perfecto para diseñar el hogar de tus sueños. En el corazón de Cedritos, combina espacio, exclusividad y ubicación inmejorable.",

  // 6. Mapa
  mapa: {
    urlEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904.708170258751!2d-74.03816670846665!3d4.7335930062402245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8580b06ababb%3A0xc39243aa6aed7ed!2sCedritos%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1711762123456!5m2!1ses!2sco",
    titulo: "Ubicación en Cedritos"
  },

  // 7. Descripción Final y Análisis
  descripcionFinal: {
    titulo: "¿Listo para estrenar tu hogar?",
    texto: `
    <div class="roi-item">
      <p>Ubicado estratégicamente en una de las zonas más residenciales y valorizadas de Bogotá, este magnífico apartamento te ofrece confort absoluto. Destaca por su inmensa y exclusiva Terraza Privada de 84 m².</p>
      <ul class="roi-list">
        <li>💰 <strong>Precio:</strong> $1.300 Millones (Negociables).</li>
        <li>📝 <strong>Estado Jurídico:</strong> Crédito hipotecario vigente.</li>
        <li>🔑 <strong>Estado:</strong> Para Estrenar.</li>
      </ul>
      <p>Una excelente opción tanto para vivienda familiar como para inversión por su alta valorización en el sector del Norte de Bogotá.</p>
      <div style="margin-top: 30px; text-align: center;">
          <a href="analisis.html" class="btn-analisis">
             📋 VER MÁS DETALLES
          </a>
      </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/Apartamento Nuevo en Venta en Cedritos - Bogotá.mp4",
    videoThumbnail: "assets/portada_video_fotos_redes_enlaces.png",
    imagesCount: 36,
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: [
      "assets/portada_video_fotos_redes_enlaces.png",
      ...Array.from({ length: 36 }, (_, i) => `assets/${i + 1}.jpg`)
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏡 *APARTAMENTO NUEVO EN VENTA CEDRITOS - BOGOTÁ:*
    
💰 *Precio: $1.300.000.000* (Negociables)
📍 *Ubicación:* Sector Cedritos, Norte de Bogotá
📏 *Distribución:* 151.7m² + Terraza Privada 84m²
✨ *Destacado:* Apartamento para estrenar. 3 Habitaciones cada una con baño. Conjunto con Gimnasio, Sauna y Terraza BBQ.

🔗 *Mira las fotos, video y Ficha Técnica aquí:* 👇
https://ap-nuevo-cedritos-bog.netlify.app/

#ApartamentoEnVentaBogota #Cedritos #InversionInmobiliaria #ViviendaNorteBogota #VecyBienesRaices`
  }
};
