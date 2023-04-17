'use client'

import { useSupabase } from '@/components/supabase/supabase-provider'

const useAuth = () => {
  const { supabase } = useSupabase()

  const handleEmailLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.log({ error })
    }
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
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: metadata,
      },
    })

    if (error) {
      console.log({ error })
    }

    return data
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log({ error })
    }
  }

  return {
    handleEmailLogin,
    handleGitHubLogin,
    handleLogout,
    handleEmailSignup,
  }
}

export default useAuth
