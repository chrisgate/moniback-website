# 🚀 Quick Deploy to Azure Static Web Apps

## Immediate Steps (No CLI needed)

### 1. Go to Azure Portal
- Open [portal.azure.com](https://portal.azure.com)
- Sign in with your Azure account

### 2. Create Static Web App
- Click "Create a resource"
- Search for "Static Web App"
- Click "Create"

### 3. Fill in Basic Info
```
Subscription: [Your Azure Subscription]
Resource Group: Create new → "moniback-rg"
Name: "moniback-website"
Region: "East US" (or closest to you)
Source: GitHub
Repository: [Select your GitHub repo]
Branch: main
Build Preset: Custom
```

### 4. Build Configuration
```
App location: /
Output location: out
App build command: npm run build
API build command: [Leave empty]
```

### 5. Deploy
- Click "Review + create"
- Click "Create"
- Wait 5-10 minutes for deployment

### 6. Access Your Site
- Your site will be at: `https://moniback-website.azurestaticapps.net`
- You can add a custom domain later

## What Happens Next

✅ **Automatic Deployment**: Every push to main branch triggers deployment
✅ **Global CDN**: Your site is served from Azure's global network
✅ **SSL Certificate**: HTTPS is automatically configured
✅ **Custom Domains**: Add your own domain later

## Need Help?

- Check deployment status in Azure Portal
- View build logs if deployment fails
- Refer to `DEPLOYMENT.md` for detailed troubleshooting
