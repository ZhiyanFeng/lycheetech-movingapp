// import AsyncStorage from '@react-native-async-storage/async-storage';
//
// export class StorageService {
//   /**
//    * Store data in AsyncStorage
//    */
//   static async setItem(key: string, value: any): Promise<void> {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem(key, jsonValue);
//     } catch (error) {
//       console.error('Error storing data:', error);
//       throw error;
//     }
//   }
//
//   /**
//    * Retrieve data from AsyncStorage
//    */
//   static async getItem<T>(key: string): Promise<T | null> {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch (error) {
//       console.error('Error retrieving data:', error);
//       throw error;
//     }
//   }
//
//   /**
//    * Remove data from AsyncStorage
//    */
//   static async removeItem(key: string): Promise<void> {
//     try {
//       await AsyncStorage.removeItem(key);
//     } catch (error) {
//       console.error('Error removing data:', error);
//       throw error;
//     }
//   }
//
//   /**
//    * Clear all data from AsyncStorage
//    */
//   static async clear(): Promise<void> {
//     try {
//       await AsyncStorage.clear();
//     } catch (error) {
//       console.error('Error clearing storage:', error);
//       throw error;
//     }
//   }
//
//   /**
//    * Get all keys from AsyncStorage
//    */
//   static async getAllKeys(): Promise<string[]> {
//     try {
//       return await AsyncStorage.getAllKeys();
//     } catch (error) {
//       console.error('Error getting all keys:', error);
//       throw error;
//     }
//   }
// }
