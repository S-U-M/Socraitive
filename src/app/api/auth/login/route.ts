'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server'

export async function login(formData: any) {
  const supabase = await createClient();
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    redirect('/error');
  }
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect('/login?error=1');
  }
  redirect('/'); // Redirect to homepage after login
}

export async function signup(formData: any) {
  const supabase = await createClient();
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const { data: signUpData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_CONFIRM_REDIRECT_URL || 'http://localhost:3000/login',
    },
  });
  if (error) {
    redirect('/error');
  }
  // If user is signed up but needs email verification
  if (!signUpData.session) {
    redirect('/login?check_email=1');
  }
  revalidatePath('/', 'layout');
  redirect('/'); // Redirect to homepage after signup
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const supabase = await createClient();
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Login error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
  return NextResponse.json({ session: data.session, user: data.user });
}