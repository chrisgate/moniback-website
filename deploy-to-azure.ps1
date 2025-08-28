# Deploy Moniback Website to Azure Static Web Apps
# Run this script after restarting your terminal (Azure CLI needs to be in PATH)

Write-Host "🚀 Deploying Moniback Website to Azure Static Web Apps..." -ForegroundColor Green

# Check if Azure CLI is available
try {
    $azVersion = az --version
    Write-Host "✅ Azure CLI is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI not found. Please restart your terminal and try again." -ForegroundColor Red
    Write-Host "If the issue persists, use the Azure Portal method instead." -ForegroundColor Yellow
    exit 1
}

# Login to Azure
Write-Host "🔐 Logging in to Azure..." -ForegroundColor Yellow
az login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to login to Azure" -ForegroundColor Red
    exit 1
}

# Set variables - MODIFY THESE VALUES
$RESOURCE_GROUP = "moniback-rg"
$LOCATION = "eastus"
$STATIC_WEB_APP_NAME = "moniback-website"
$REPO_URL = "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME"  # CHANGE THIS
$BRANCH = "main"

Write-Host "📝 Using the following configuration:" -ForegroundColor Cyan
Write-Host "   Resource Group: $RESOURCE_GROUP" -ForegroundColor White
Write-Host "   Location: $LOCATION" -ForegroundColor White
Write-Host "   App Name: $STATIC_WEB_APP_NAME" -ForegroundColor White
Write-Host "   Repository: $REPO_URL" -ForegroundColor White
Write-Host "   Branch: $BRANCH" -ForegroundColor White

# Confirm before proceeding
$confirm = Read-Host "`nDo you want to proceed with these settings? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Deployment cancelled." -ForegroundColor Yellow
    exit 0
}

# Create resource group
Write-Host "🏗️  Creating resource group..." -ForegroundColor Yellow
az group create --name $RESOURCE_GROUP --location $LOCATION

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to create resource group" -ForegroundColor Red
    exit 1
}

# Create static web app
Write-Host "🌐 Creating Static Web App..." -ForegroundColor Yellow
az staticwebapp create `
    --name $STATIC_WEB_APP_NAME `
    --resource-group $RESOURCE_GROUP `
    --source $REPO_URL `
    --branch $BRANCH `
    --app-location "/" `
    --output-location "out" `
    --build-command "npm run build"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to create Static Web App" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌍 Your website will be available at: https://$STATIC_WEB_APP_NAME.azurestaticapps.net" -ForegroundColor Cyan
Write-Host "📱 You can monitor the deployment in the Azure Portal" -ForegroundColor Yellow
