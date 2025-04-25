# Better Auth Starter

<p align="center">
  <picture>
    <source srcset="./banner-dark.png" media="(prefers-color-scheme: dark)">
    <source srcset="./banner.png" media="(prefers-color-scheme: light)">
    <img src="./banner.png" alt="Better Auth Logo">
  </picture>
</p>

A Next.js app with Custom Sever. Better Auth template using Prisma.
You can use this template to deploy your app to CPanel.

## Prerequisites

1. MySQL or PostgreSQL
2. If you using MySQL from cpanel, please set correct DATABASE_URL in .env
   2.1 Create a new database in cpanel
   2.2 Create a new user database in cpanel (not required if already have)
   2.3 Set correct hostname
   2.3.1 Find the right hostname in phpMyAdmin → Variables → search for hostname
3. You can use another database provider like supabase, neon, etc

## CPanel Deployment

1. Clone this repository
2. Build the app locally
3. Setup Node.js application
   3.1 Application root directory: `/home/username/` (you can name it anything you want)
   3.2 Application url: your domain or subdomain
   3.3 Application startup file: `dist/server.js`
4. Set up environment variables
5. Upload files to CPanel File Manager → **Follow your application root directory**
6. run `npm install` in CPanel Terminal or SSH
   6.1 if you using cpanel terminal, you need to enter virtual environment
   `source /home/username/nodevenv/nodes/22/bin/activate && cd /home/username/nodes` this command usually show when you create new node.js application
   6.2 then run `npm install`
   6.3 then run `npx prisma generate` → **this command only works in SSH**, if you using cpanel terminal, there will be an error
7. Start/Restart the application

## Local Setup

1. Clone this repository
2. Install dependencies
3. Set up environment variables
4. Run the development server

## Development

```bash
npm run dev
```

## Vercel Deployment

If you want to deploy your app to vercel, just change the scripts in package.json

```json
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

#### Note

You can use another adapter beside prisma, just follow [better-auth.com](https://better-auth.com/docs) documentation. Other things will be the same.
