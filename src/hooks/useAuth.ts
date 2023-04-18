'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { useSupabase } from '@/components/supabase/supabase-provider'

const useAuth = () => {
  const [loginLoading, setLoginLoading] = useState(false)
  const [signupLoading, setSignupLoading] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)

  const { supabase } = useSupabase()
  const router = useRouter()

  const handleEmailLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    setLoginLoading(true)
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data.user) {
      toast.success('Logged in successfully', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      setTimeout(() => {
        router.push('/analytics')
      }, 1500)
    }

    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
    setLoginLoading(false)

    return data
  }

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })

    if (error) {
      console.log({ error })
    }
  }

  const handleEmailSignup = async ({
    email,
    password,
    metadata,
  }: {
    email: string
    password: string
    metadata?: any
  }) => {
    setSignupLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: metadata,
      },
    })
    if (data.user) {
      toast.success('User registered successfully', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }

    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }

    setSignupLoading(false)

    return data
  }

  const handleLogout = async () => {
    setLogoutLoading(true)
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log({ error })
    }
    setLogoutLoading(false)
  }

  return {
    handleEmailLogin,
    loginLoading,

    handleGitHubLogin,

    handleLogout,
    logoutLoading,

    handleEmailSignup,
    signupLoading,
  }
}

export default useAuth
