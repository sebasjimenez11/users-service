export const messageEmail = {
    welcome: "Tu compañero confiable en la gestión médica. Estamos aquí para hacer que la administración de tu atención médica sea sencilla y eficiente. Gracias por elegir Sami para mantener tu salud en el camino correcto.",
    
    dataUpdate: "Tus datos han sido actualizados exitosamente. Si no reconoces esta acción, por favor contáctanos inmediatamente.",
    
    passwordRecovery: "Has solicitado recuperar tu contraseña. Haz clic en el enlace a continuación para restablecerla. Si no solicitaste este cambio, ignora este mensaje.",
    
    passwordUpdate: "Tu contraseña ha sido actualizada correctamente. Si no reconoces esta acción, por favor contáctanos para proteger tu cuenta."
}

export const buttonUrlValue = {
    welcome: "http://localhost:4200/",
    dataUpdate: "http://localhost:4200/perfil",
    passwordRecovery: (token: string) => `http://localhost:4200/recovery-password?token=${token}`,
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
    welcome: "https://alamacenimagenes.blob.core.windows.net/fotoperfil/agendaminetoCItas.jpg",
    
    dataUpdate: "https://alamacenimagenes.blob.core.windows.net/fotoperfil/actualizacion.jpg",
    
    passwordRecovery: "https://alamacenimagenes.blob.core.windows.net/fotoperfil/recovery.jpg",
    
    passwordUpdate: "https://alamacenimagenes.blob.core.windows.net/fotoperfil/passwordUpdate.jpg",
}
