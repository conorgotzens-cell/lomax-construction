$sourceDir = "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\North&South_SpencerHall"
$destDir = "src\assets\images\projects"
$files = Get-ChildItem -Path $sourceDir -Filter "*.*" | Where-Object { $_.Extension -match "jpe?g" } | Sort-Object Name

# Ensure destination directory exists
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$counter = 1
foreach ($file in $files) {
    if ($file.Name -match "IMG_3447.JPG") { continue } # Skip specific file if needed or just copy all. The list had IMG_3447.JPG.
    # Actually, I will just copy them all sequentially.
}
# Reset for clean loop
$files = Get-ChildItem -Path $sourceDir -Filter "*.*" | Where-Object { $_.Extension -match "jpe?g" } | Sort-Object Name

$counter = 1
foreach ($file in $files) {
    $newName = "spencer-hall-gallery-$counter.jpg"
    $destPath = Join-Path -Path $destDir -ChildPath $newName
    Copy-Item -Path $file.FullName -Destination $destPath
    Write-Host "Copied $($file.Name) to $newName"
    $counter++
}
