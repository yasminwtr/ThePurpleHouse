import api from "../../api";

export const signIn = async (loginData) => {
  try {
    console.log("loginData services/auth", loginData)
    const response = await api.post('/login', loginData);
    console.log("response @ services/auth.js, ", response)

    if (response.data?.user) {
      console.log("@@@@@ Existe usuário, entrou no if")
      return response.data.user;
    }
  } catch (error) {
    throw new Error(error)
  }
}