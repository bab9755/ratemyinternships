'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from '../onboarding/_actions'

export default function OnboardingComponent() {
  const [error, setError] = React.useState('')
  const { user } = useUser()
  const router = useRouter()

  const universities = ["Harvard", "MIT", "Stanford", "Oxford", "Cambridge"];
  const degreePrograms = ["Bachelors", "Masters", "PhD"];
  const majors = ["Computer Science", "Software Engineering", "Data Science", "Information Technology"];

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      // Reloads the user's data from Clerk's API
      await user?.reload()
      //redirect to the home page
      router.push('/')
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
    <div>
      <form
      action={handleSubmit} // Replace with your actual server endpoint
      method="POST"
      className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Onboarding</h1>
      
      {/* First Name */}
      <div className="mb-6">
        <label htmlFor="firstName" className="block mb-2 text-lg">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        />
      </div>

      {/* Last Name */}
      <div className="mb-6">
        <label htmlFor="lastName" className="block mb-2 text-lg">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        />
      </div>

      {/* University Selector */}
      <div className="mb-6">
        <label htmlFor="university" className="block mb-2 text-lg">Select Your University</label>
        <select
          name="university"
          id="university"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        >
          <option value="" disabled selected>Select a university</option>
          {universities.map((uni, index) => (
            <option key={index} value={uni}>{uni}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        
        {/* Input for Custom University */}
        <input
          type="text"
          name="customUniversity"
          id="customUniversity"
          placeholder="Specify your university"
          className="w-full p-3 rounded-lg mt-3 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        />
      </div>

      {/* Degree Program Selector */}
      <div className="mb-6">
        <label htmlFor="degreeProgram" className="block mb-2 text-lg">Select Your Degree Program</label>
        <select
          name="degreeProgram"
          id="degreeProgram"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        >
          <option value="" disabled selected>Select a degree program</option>
          {degreePrograms.map((program, index) => (
            <option key={index} value={program}>{program}</option>
          ))}
        </select>
      </div>

      {/* Major Selector */}
      <div className="mb-6">
        <label htmlFor="major" className="block mb-2 text-lg">Select Your Major</label>
        <select
          name="major"
          id="major"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
        >
          <option value="" disabled selected>Select a major</option>
          {majors.map((maj, index) => (
            <option key={index} value={maj}>{maj}</option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 focus:outline-none"
      >
        Continue
      </button>
    </form>
    </div>
  )
}