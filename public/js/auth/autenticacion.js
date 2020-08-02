class Autenticacion {
  async autEmailPass(email, password) {
    try {
      // TODO
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      console.log(result);
      if (result.user.emailVerified) {
        console.log("dentro del if");
        return result;
      } else {
        await firebase.auth.signOut();
        return null;
      }
    } catch (error) {
      console.error(error);
      Materialize.toast(error.message, 4000);
    }
  }

  async crearCuentaEmailPass(email, password, nombres) {
    try {
      // TODO
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({
        //este es el nombre del usuario
        displayName: nombres,
      });
      //para que verirfique el usuario mediante correo electronico
      const configuracion = {
        url: "https://parkingboris.firebaseapp.com",
      };
      //esto eenviara el correo de verificacion
      await result.user.sendEmailVerification(configuracion);

      //esto evita que inicie sesion si no ha verificado cuenta
      await firebase.auth().signOut();
      return true;
    } catch (error) {
      console.error(error);
      Materialize.toast(error.message, 4000);
    }
  }

  async authCuentaGoogle() {
    try {
      // TODO
    } catch (error) {
      console.error(error);
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000);
    }
  }

  async authCuentaFacebook() {
    try {
      // TODO
    } catch (error) {
      console.error(error);
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000);
    }
  }

  authTwitter() {
    // TODO: Crear auth con twitter
  }
}
