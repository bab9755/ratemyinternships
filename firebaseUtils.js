import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { firestore } from './firebase'

export const addUser = async (userId, userData) => {
    try {
        const userRef = doc(firestore, 'users', userId);
        await setDoc(userRef, userData);
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user: ', error);
    }
}

export const updateUser = async (userId, userData) => {
    try {
        const userRef = doc(firestore, 'users', userId);
        await updateDoc(userRef, userData);
        console.log('User updated successfully');
    } catch (error) {
        console.error('Error updating user: ', error);
    }
}

export const getUser = async (userId) => {
    try {
        const userRef = doc(firestore, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting user: ', error);
        return null;
    }
}