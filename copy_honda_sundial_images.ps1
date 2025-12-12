$sourceDir = "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Honda Sundial"
$destDir = "src\assets\images\projects"
$files = Get-ChildItem -Path $sourceDir -Filter "*.jpg" | Sort-Object Name

# Ensure destination directory exists
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$counter = 1
foreach ($file in $files) {
    $newName = "honda-sundial-gallery-$counter.jpg"
    $destPath = Join-Path -Path $destDir -ChildPath $newName
    Copy-Item -Path $file.FullName -Destination $destPath
    Write-Host "Copied $($file.Name) to $newName"
    $counter++
}
