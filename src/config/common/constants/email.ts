export const messageEmail = {
    welcome: "Tu compañero confiable en la gestión médica. Estamos aquí para hacer que la administración de tu atención médica sea sencilla y eficiente. Gracias por elegir Sami para mantener tu salud en el camino correcto.",
    
    dataUpdate: "Tus datos han sido actualizados exitosamente. Si no reconoces esta acción, por favor contáctanos inmediatamente.",
    
    passwordRecovery: "Has solicitado recuperar tu contraseña. Haz clic en el enlace a continuación para restablecerla. Si no solicitaste este cambio, ignora este mensaje.",
    
    passwordUpdate: "Tu contraseña ha sido actualizada correctamente. Si no reconoces esta acción, por favor contáctanos para proteger tu cuenta."
}

export const buttonUrlValue = {
    welcome: "http://localhost:4200/",
    dataUpdate: "http://localhost:4200/perfil",
    passwordRecovery: (token: string) => `http://localhost:4200/new-password?token=${token}`,
    passwordUpdate: "http://localhost:4200/perfil",
}

export const buttonTextValue = {
    welcome: "Bienvenido", 
    dataUpdate: "Ver Mis Datos",
    passwordRecovery: "Recuperar Contraseña", 
    passwordUpdate: "Ver Perfil", 
}

export const titleValue = {
    welcome: "¡Bienvenido a Sami!", 
    dataUpdate: "Datos Actualizados", 
    passwordRecovery: "Recuperación de Contraseña", 
    passwordUpdate: "Contraseña Actualizada", 
}

export const imgUrlValue = {
    welcome: "https://alamacenimagenes.blob.core.windows.net/fotosmedicos/6-removebg-preview.png",
    
    dataUpdate: "https://alamacenimagenes.blob.core.windows.net/fotosmedicos/Azul_y_Verde_Animales_6_Viñetas_Historieta-removebg-preview (1).png",
    
    passwordRecovery: "https://alamacenimagenes.blob.core.windows.net/fotosmedicos/7-removebg-preview.png",
    
    passwordUpdate: "https://alamacenimagenes.blob.core.windows.net/fotosmedicos/Azul_y_Verde_Animales_6_Viñetas_Historieta-removebg-preview (1).png",
}
