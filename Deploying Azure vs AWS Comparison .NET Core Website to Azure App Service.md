# Deploying Azure vs AWS Comparison .NET Core Website to Azure App Service

This guide outlines the steps to deploy your built ASP.NET Core MVC application to Azure App Service.

## Prerequisites

1.  **Azure Account:** You need an active Azure subscription.
2.  **Azure CLI (Optional but Recommended):** For command-line deployments, install Azure CLI on your local machine.
3.  **.NET SDK:** Ensure you have the .NET SDK installed on your local machine to build the project.
4.  **Built Application:** You will first need to publish your .NET Core application for deployment.

## Steps to Deploy

### Step 1: Publish Your .NET Core Application

Before deploying, you need to publish your .NET Core application. This compiles your code and prepares it for deployment, placing all necessary files in a designated output folder.

1.  **Open your terminal or command prompt.**
2.  **Navigate to your project directory:**
    ```bash
    cd /path/to/AzureAwsComparisonDotNet
    ```
3.  **Publish the application:**
    ```bash
    dotnet publish -c Release -o ./publish
    ```
    This command will create a `publish` folder within your project directory, containing all the files needed for deployment.

    **Your `publish` folder will be located at:** `/home/ubuntu/AzureAwsComparisonDotNet/publish`

### Method 1: Azure CLI Deployment (Recommended)

This method is efficient and scriptable for repeated deployments.

1.  **Login to Azure CLI:**
    ```bash
    az login
    ```
2.  **Set Subscription (if you have multiple):**
    ```bash
    az account set --subscription "Your Subscription Name or ID"
    ```
3.  **Create an App Service Plan (if you don't have one or want a new one):**
    ```bash
    az appservice plan create --name <your-app-service-plan> --resource-group <your-resource-group> --sku B1 --is-linux
    ```
    (Replace `B1` with your desired pricing tier, e.g., `S1`, `P1V2`. `B1` is Basic tier, suitable for testing. `--is-linux` is important if you prefer Linux-based App Service.)

4.  **Create the Web App:**
    ```bash
    az webapp create --resource-group <your-resource-group> --plan <your-app-service-plan> --name <your-app-name> --runtime "DOTNET|6.0"
    ```
    (Replace `<your-app-name>` with a unique name for your web app. `DOTNET|6.0` specifies the runtime. Ensure it matches your project's target framework.)

5.  **Deploy the Published Application:**
    *   Ensure you are in your project's root directory (e.g., `/home/ubuntu/AzureAwsComparisonDotNet`).
    *   Then, run the deployment command:
        ```bash
        az webapp deploy --resource-group <your-resource-group> --name <your-app-name> --src-path ./publish --clean true
        ```
        The `--src-path ./publish` specifies that the contents of the `publish` folder should be deployed. `--clean true` ensures that existing files in `wwwroot` are removed before deployment.

### Method 2: Manual Deployment (FTP/Kudu)

This is suitable for quick, one-time deployments, similar to the React app.

1.  **Create an Azure App Service:**
    *   Go to the Azure Portal (portal.azure.com).
    *   Click `+ Create a resource` -> `Web` -> `Web App`.
    *   Fill in the details: Subscription, Resource Group, Name (e.g., `azure-aws-comparison-dotnet`), Publish (Code), Runtime stack (.NET), Operating System (Windows or Linux), Region, App Service Plan.
    *   Click `Review + create` and then `Create`.
2.  **Get Deployment Credentials:**
    *   Once the App Service is created, navigate to its overview page in the Azure Portal.
    *   Go to `Deployment Center` or `Deployment credentials` (under `Deployment`).
    *   Note down the FTP/FTPS hostname, username, and password.
3.  **Upload `publish` Folder Contents:**
    *   Using an FTP client (like FileZilla) or the Kudu console (accessible via `https://<your-app-name>.scm.azurewebsites.net`), connect to your App Service.
    *   Navigate to the `site/wwwroot` directory.
    *   **Delete all existing files** in `wwwroot` (if any).
    *   **Upload the entire content of your local `publish` folder** (not the `publish` folder itself, but its contents) into the `wwwroot` directory.

### Method 3: Visual Studio / Visual Studio Code Deployment

If you are developing on Windows or macOS, Visual Studio and Visual Studio Code offer integrated deployment tools.

*   **Visual Studio:** Right-click on your project in Solution Explorer -> `Publish...` -> Choose `Azure` -> `Azure App Service (Windows/Linux)` and follow the wizard.
*   **Visual Studio Code:** Install the Azure App Service extension. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), search for `Azure App Service: Deploy to Web App`, and follow the prompts.

## Important Considerations

*   **Custom Domains:** You can configure custom domains for your App Service in the Azure Portal.
*   **SSL/TLS:** Azure App Service provides free managed certificates for custom domains.
*   **Application Settings:** Manage application settings (e.g., connection strings, environment variables) in App Service `Configuration` -> `Application settings`.
*   **Troubleshooting:** Use the `Log stream` in the Azure Portal (under `Monitoring`) to view real-time application logs for debugging deployment or runtime issues.

