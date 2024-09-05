//this is where we update the user metadata
'use server'
import { firestore } from '../../firebase'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { addUser, updateUser, getUser } from '../../firebaseUtils'
export const completeOnboarding = async (formData: FormData) => {
  const { userId } = auth()

  if (!userId) {
    return { message: 'No Logged In User' }
  }

  //now we update the user metadata with the form data
  try {
    const res = await clerkClient().users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        university: formData.get('university'),
        customUniversity: formData.get('customUniversity'),
        degreeProgram: formData.get('degreeProgram'),
        major: formData.get('major'),
      },
    })
    addUser(userId, {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      primaryEmail: res.primaryEmailAddress?.emailAddress,
      university: formData.get('university'),
      customUniversity: formData.get('customUniversity'),
      degreeProgram: formData.get('degreeProgram'),
      major: formData.get('major'),
    })

    return { message: res.publicMetadata }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }
}