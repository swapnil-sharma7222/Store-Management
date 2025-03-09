import firestore from '@react-native-firebase/firestore'

export const addData= async (userData)=> {
    try {
        const data= await firestore().collection('users').add(userData);
        console.log("This is new data ",data);
    } catch (error) {
        console.error("Error creating new user ", error);
        
    }
}

export const getData= async ()=> {
    try {
        const data= await firestore().collection('users').get();
        const users= data.docs.map(doc=> ({id: doc.id, ...doc.data()}))
        console.log("This is data ",users);
    } catch (error) {
        console.error("Error fetching data ", error);
        
    }
}