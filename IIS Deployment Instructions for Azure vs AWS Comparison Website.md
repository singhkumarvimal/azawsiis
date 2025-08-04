# IIS Deployment Instructions for Azure vs AWS Comparison Website

This document outlines the steps to deploy the built React application to Internet Information Services (IIS).

## Prerequisites

1.  **IIS Installed:** Ensure IIS is installed and configured on your Windows Server.
2.  **URL Rewrite Module (Optional but Recommended):** If you plan to use client-side routing (e.g., for direct access to `yourdomain.com/services`), install the URL Rewrite Module for IIS. You can download it from the official Microsoft website.

## Steps to Deploy

### Step 1: Locate the Built Application Files

After running the `pnpm run build` command, all the production-ready static files are located in the `dist` directory within your project folder. 

**Your `dist` folder is located at:** `/home/ubuntu/azure-aws-comparison/dist`

**Important:** You will need to transfer the contents of this `dist` folder to your Windows Server where IIS is running.

### Step 2: Create a New Website in IIS

1.  **Open IIS Manager:** On your Windows Server, open the IIS Manager (search for "IIS" in the Start Menu).
2.  **Add Website:** In the "Connections" pane on the left, right-click on "Sites" and select "Add Website...".
3.  **Fill in Website Information:**
    *   **Site name:** Enter a descriptive name for your website (e.g., `AzureVsAWSComparison`).
    *   **Physical path:** Browse to and select the `dist` folder that you transferred from your build environment (e.g., `C:\inetpub\wwwroot\AzureVsAWSComparison\dist`).
    *   **Binding:**
        *   **Type:** `http` (or `https` if you have an SSL certificate)
        *   **IP address:** `All Unassigned` (or a specific IP address if needed)
        *   **Port:** `80` (or `443` for HTTPS, or any other available port)
        *   **Host name:** (Optional) Enter your domain name (e.g., `compare.yourdomain.com`). If left blank, the site will be accessible via IP address or `localhost`.
4.  **Click OK.**

### Step 3: Configure URL Rewrite (for Client-Side Routing)

If your React application uses client-side routing (which it does, for navigation like `/services` or `/pricing`), you need to configure IIS to redirect all requests to `index.html` so that React Router can handle the routing.

1.  **Select Your Website:** In IIS Manager, select the website you just created.
2.  **Open URL Rewrite:** In the "Features View" pane (center), double-click on "URL Rewrite".
3.  **Add Rule(s):** In the "Actions" pane on the right, click "Add Rule(s)..." and select "Blank Rule" under "Inbound Rules".
4.  **Configure the Rule:**
    *   **Name:** `React App Routing`
    *   **Match URL:**
        *   **Requested URL:** `Matches the Pattern`
        *   **Using:** `Regular Expressions`
        *   **Pattern:** `(.*)`
    *   **Conditions:**
        *   **Logical grouping:** `Match All`
        *   **Add...**
            *   **Condition input:** `{REQUEST_FILENAME}`
            *   **Check if input string:** `Is Not a File`
        *   **Add...**
            *   **Condition input:** `{REQUEST_FILENAME}`
            *   **Check if input string:** `Is Not a Directory`
    *   **Action:**
        *   **Action type:** `Rewrite`
        *   **Rewrite URL:** `/index.html`
        *   **Append query string:** (Uncheck)
5.  **Click Apply** (on the right-hand side).

### Step 4: Test Your Deployment

Open a web browser and navigate to the URL or IP address configured for your IIS website. Your Azure vs AWS comparison website should now be accessible.

If you encounter any issues, check the IIS logs and ensure all necessary IIS features are installed (e.g., Static Content, ASP.NET if you were using a backend, though not needed for this static React app).

