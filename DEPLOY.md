# Deployment Instructions

To save Netlify build credits, we use the Netlify CLI to build locally and deploy.

## Prerequisites
1.  **Login** (One time only):
    ```powershell
    npx netlify login
    ```
2.  **Link Site** (One time only):
    ```powershell
    npx netlify link
    ```
    (Select "Use current git remote origin" -> `aesthetic-longma-e50041`)

## How to Deploy

### 1. Create a Preview (Draft)
Run this to see your changes on a live URL *without* affecting the main site.
```powershell
npm run build
npx netlify deploy
```
*   **Cost:** 0 Credits
*   **Result:** You get a 'Website Draft URL' to view.

### 2. Publish to Production
Run this when you are ready to go live.
```powershell
npm run build
npx netlify deploy --prod
```
*   **Cost:** 0 Credits
*   **Result:** Updates `lomaxconstruction.com` (or your Netlify subdomain).
