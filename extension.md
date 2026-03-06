# Supabase & GitHub Auth Setup Guide

Ikuti langkah-langkah berikut untuk mengaktifkan fitur login GitHub pada proyek NLFTs.

## 1. Persiapan Supabase Dashboard

1.  Buat proyek baru di [Supabase Dashboard](https://supabase.com/dashboard).
2.  Buka menu **Authentication > Providers** dan aktifkan **GitHub**.
3.  Salin **Callback URL** yang disediakan oleh Supabase (formatnya: `https://<project-id>.supabase.co/auth/v1/callback`).

https://fnzvgosyyflrrbcrnsvy.supabase.co/auth/v1/callback

## 2. Persiapan GitHub OAuth App

1.  Buka **GitHub > Settings > Developer settings > OAuth Apps > New OAuth App**.
2.  **Homepage URL**: Gunakan URL development (`http://localhost:3000`) atau URL production Anda.
3.  **Authorization callback URL**: Tempelkan URL yang Anda salin dari dashboard Supabase tadi.
4.  Setelah dibuat, salin **Client ID** dan buat **Client Secret** baru.

## 3. Konfigurasi Dashboard Supabase (Lanjutan)

1.  Kembali ke menu **Authentication > Providers > GitHub** di Supabase.
2.  Masukkan **Client ID** dan **Client Secret** dari GitHub.
3.  Simpan perubahan.

## 4. Environment Variables

Buat file `.env` di root proyek dan tambahkan variabel berikut:

> [!IMPORTANT]
> Gunakan **Anon Key** (Public), bukan Service Role Key (Secret) atau Publishable Key.
> Anon Key adalah deretan karakter yang sangat panjang dan **selalu diawali dengan `ey...`** (ini adalah format JWT).

```bash
SUPABASE_URL=https://<your-project-id>.supabase.co
SUPABASE_KEY=<your-anon-key>
```

Variabel ini bisa ditemukan di **Project Settings > API** di dashboard Supabase.

## 5. Implementasi Database (SQL)

Meskipun Supabase mengelola tabel `auth.users` secara otomatis, Anda mungkin ingin membuat tabel profil untuk menyimpan data tambahan. Jalankan SQL berikut di **SQL Editor** Supabase:

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via GitHub/Email
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 6. Selesai!

Sekarang tombol "Log In" di navigasi akan otomatis melakukan redirect ke GitHub dan kembali ke proyek setelah sukses.
