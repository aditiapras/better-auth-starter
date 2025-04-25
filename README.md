# Better Auth Starter Kit for Nextjs
![Logo](/public/banner.png)

A Next.js auth starter kit with Custom Sever. You can use this template to deploy your app to ***cPanel***.

## Prerequisites

1. MySQL or PostgreSQL
2. If you using MySQL from cpanel, please set correct DATABASE\_URL in .env
* Create a new database in cpanel
* Create a new user database in cpanel (not required if already have)
* Set correct hostname, find the right hostname in phpMyAdmin → Variables → search for hostname
3. You can use another database provider like supabase, neon, etc

## cPanel Deployment

1. Clone this repository
2. Build the app locally
3. Setup Node.js application
* Application root directory: `/home/username/` (you can name it anything you want)
* Application url: your domain or subdomain
* Application startup file:&#x20;
* Application startup file: `dist/server.js`

4. Set up environment variables
5. Upload files to cPanel File Manager → **Follow your application root directory**
6. run `npm install` in cPanel Terminal or SSH
* if you using cpanel terminal, you need to enter virtual environment, `source /home/username/nodevenv/nodes/22/bin/activate && cd /home/username/nodes` this command usually show when you create new node.js application
* run `npm install`
* run `npx prisma generate` → **this command only works in SSH,** if you using cPanel terminal, there will be an error
7. Start/Restart the application

## Local Setup

1. Clone this repository
2. Install dependencies
3. Set up environment variables
4. Run the development server

## **Development**

```txt
npm run dev
```

## **Vercel Deployment**

If you want to deploy your app to vercel, just change the scripts in package.json

```txt
"scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
```

### Note

You can use another adapter beside prisma, just follow [Better-Auth](https://better-auth.com/docs "Better-Auth") documentation. Other things will be the same.
