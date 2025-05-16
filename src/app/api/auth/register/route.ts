import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_CONFIRM_REDIRECT_URL || 'http://localhost:3000/login',
    },
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  // If user needs to confirm email
  if (!data.session) {
    return NextResponse.json({ message: 'Check your email for confirmation.' }, { status: 200 });
  }
  return NextResponse.json({ session: data.session, user: data.user });
}
