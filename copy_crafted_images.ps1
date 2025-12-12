$sourceDir = "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos\Crafted Art of the Taco"
$destDir = "c:\Users\conor\Documents\Lomax Website Anti Gravity\lomax-construction\src\assets\images\projects"
$files = Get-ChildItem -Path $sourceDir -Filter "*.jpg"
$count = 1

foreach ($file in $files) {
    $newName = "crafted-taco-gallery-$count.jpg"
    $destPath = Join-Path -Path $destDir -ChildPath $newName
    Copy-Item -Path $file.FullName -Destination $destPath
    Write-Host "Copied $($file.Name) to $newName"
    $count++
}
