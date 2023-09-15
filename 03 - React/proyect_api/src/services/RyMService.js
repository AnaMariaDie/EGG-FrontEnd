import { API_RM } from "../constants/ApiRyM";

class RyMService {
  async getAllCaracters() {
    const response = await fetch(API_RM.CHARACTERS());
    // Interceptor
    return response.json();
  }

  async getCaracterById(id) {
    const response = await fetch(API_RM.CHARACTER_BY_ID(id));
    // Interceptor
    return response.json();
  }
}

export default new RyMService();

// export async function getCaracter() {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();
//   return data;
// }
