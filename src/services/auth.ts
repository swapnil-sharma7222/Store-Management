import auth from '@react-native-firebase/auth'

export const registerUser = async ({ email, password }) => {
  try {
    const userCredentials= await auth().createUserWithEmailAndPassword(email, password);
    await userCredentials.user.sendEmailVerification();
    return userCredentials.user;
  } catch (error) {
    console.error(error);
  }
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  try {
    // Sign in the user using Firebase authentication
    const userCredentials = await auth().signInWithEmailAndPassword(email, password);
    const user=  userCredentials.user;
    console.log(user);
    return {user, emailVerified: user.emailVerified};
  } catch (error: any) {
    // Handle login errors
    if (error.code === 'auth/invalid-email') {
      throw new Error('Invalid email format.');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Incorrect password.');
    } else if (error.code === 'auth/user-not-found') {
      throw new Error('User not found.');
    } else {
      console.log(error);
      throw new Error('Login failed. Please try again.');
    }
  }
};