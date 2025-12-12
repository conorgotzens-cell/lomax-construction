
function Copy-ProjectImages {
    param (
        [string]$SourcePath,
        [string]$ProjectSlug,
        [string]$Extension = "*.jpg"
    )

    $destDir = "src\assets\images\projects"
    if (-not (Test-Path -Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }

    # Get files, excluding directories
    $files = Get-ChildItem -Path $SourcePath -Filter $Extension -File | Sort-Object Name

    $counter = 1
    foreach ($file in $files) {
        # Determine extension from original file to handle PNG/JPG
        $ext = $file.Extension.ToLower()
        $newName = "$ProjectSlug-gallery-$counter$ext"
        $destPath = Join-Path -Path $destDir -ChildPath $newName
        
        Copy-Item -Path $file.FullName -Destination $destPath
        Write-Host "Copied $($file.Name) to $newName"
        $counter++
    }
}

# Greensboro Dermatology (PNGs)
Copy-ProjectImages -SourcePath "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Greensboro Dermatology" -ProjectSlug "greensboro-dermatology" -Extension "*.png"

# Archdale Hall (JPGs)
Copy-ProjectImages -SourcePath "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Archdale_Hall" -ProjectSlug "archdale-hall" -Extension "*.jpg"

# Dillard Elementary (JPGs)
Copy-ProjectImages -SourcePath "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Dillard Elementary" -ProjectSlug "dillard-elementary" -Extension "*.jpg"

# Goodwill Industries (JPGs)
Copy-ProjectImages -SourcePath "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Goodwill Industires_West Market Street" -ProjectSlug "goodwill-west-market" -Extension "*.jpg"
