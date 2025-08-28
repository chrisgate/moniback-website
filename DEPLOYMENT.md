# Deploying Moniback Website to Azure Static Web Apps

## Prerequisites

1. **Azure Account**: You need an active Azure subscription
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Azure CLI** (optional but recommended): For local Azure management

## Method 1: Deploy via Azure Portal (Recommended for first deployment)

### Step 1: Create Static Web App in Azure Portal

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"

### Step 2: Configure the Static Web App

Fill in the basic information:
- **Subscription**: Select your Azure subscription
- **Resource Group**: Create new or select existing
- **Name**: `moniback-website` (or your preferred name)
- **Region**: Choose a region close to your users
- **Source**: GitHub
- **Repository**: Select your GitHub repository
- **Branch**: `main`
- **Build Preset**: Custom
- **App location**: `/` (root of your repository)
- **Output location**: `out` (this is where Next.js exports static files)

### Step 3: Configure Build Settings

In the build details:
- **App build command**: `npm run build`
- **Output location**: `out`
- **API build command**: Leave empty (not needed for static sites)

### Step 4: Deploy

1. Click "Review + create"
2. Review the settings and click "Create"
3. Wait for deployment to complete (usually 5-10 minutes)

## Method 2: Deploy via Azure CLI

### Step 1: Install Azure CLI

```bash
# Windows (using winget)
winget install Microsoft.AzureCLI

# Or download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
```

### Step 2: Login to Azure

```bash
az login
```

### Step 3: Create Static Web App

```bash
# Set variables
RESOURCE_GROUP="moniback-rg"
LOCATION="eastus"
STATIC_WEB_APP_NAME="moniback-website"
REPO_URL="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME"
BRANCH="main"

# Create resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create static web app
az staticwebapp create \
  --name $STATIC_WEB_APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --source $REPO_URL \
  --branch $BRANCH \
  --app-location "/" \
  --output-location "out" \
  --build-command "npm run build"
```

## Method 3: Deploy via GitHub Actions (Automated)

The GitHub Actions workflow has been created in `.github/workflows/azure-static-web-apps.yml`. To use it:

### Step 1: Get Deployment Token

1. Go to your Static Web App in Azure Portal
2. Navigate to "Configuration" → "Deployment tokens"
3. Copy the deployment token

### Step 2: Add GitHub Secret

1. Go to your GitHub repository
2. Navigate to "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: Paste the deployment token from Azure

### Step 3: Push to Main Branch

The workflow will automatically trigger when you push to the main branch.

## Post-Deployment

### Access Your Website

After deployment, you can access your website at:
`https://YOUR_APP_NAME.azurestaticapps.net`

### Custom Domain (Optional)

1. Go to your Static Web App in Azure Portal
2. Navigate to "Custom domains"
3. Add your custom domain
4. Configure DNS records as instructed

### Environment Variables

If you need environment variables:
1. Go to "Configuration" → "Application settings"
2. Add your environment variables

## Troubleshooting

### Common Issues

1. **Build Failures**: Check the build logs in Azure Portal or GitHub Actions
2. **404 Errors**: Ensure your `staticwebapp.config.json` is properly configured
3. **Image Loading Issues**: Verify images are in the correct `public` folder

### Local Testing

Test your static build locally:

```bash
npm run build
npx serve out
```

### Support

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Azure Static Web Apps GitHub Actions](https://github.com/Azure/static-web-apps-deploy)

## Notes

- Your Next.js app is now configured for static export
- The `out` folder will contain your static files after build
- Azure Static Web Apps automatically handles routing and fallbacks
- Updates are automatically deployed when you push to the main branch
