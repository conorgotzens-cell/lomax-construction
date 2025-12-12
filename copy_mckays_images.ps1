$sourceDir = "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\McKay's"
$destDir = "src\assets\images\projects"
$files = Get-ChildItem -Path $sourceDir -Filter "*.*" | Where-Object { $_.Extension -match "jpe?g" } | Sort-Object Name

# Ensure destination directory exists
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$counter = 1
foreach ($file in $files) {
    $newName = "mckays-gallery-$counter.jpg"
    $destPath = Join-Path -Path $destDir -ChildPath $newName
    Copy-Item -Path $file.FullName -Destination $destPath
    Write-Host "Copied $($file.Name) to $newName"
    $counter++
}
