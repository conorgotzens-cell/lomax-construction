$projects = @(
    @{ Slug = "unc-mri"; Source = "UNC Hospitals\3rd Floor West" },
    @{ Slug = "first-presbyterian"; Source = "First Pres" },
    @{ Slug = "culp-showroom"; Source = "Culp Showroom Renovation" },
    @{ Slug = "natty-greenes"; Source = "Natty Greenes" },
    @{ Slug = "te-connectivity"; Source = "TE Pegg Road_Project Titan" },
    @{ Slug = "joymongers-gso"; Source = "Joymongers Greensboro" },
    @{ Slug = "childrens-museum"; Source = "Greensboro Childrens Museum" },
    @{ Slug = "harley-davidson-gso"; Source = "Harley Davidson" }
)

$baseSourcePath = "C:\Users\conor\Documents\Lomax Website Anti Gravity\Lomax Construction Website\Project Photos"
$destPath = "c:\Users\conor\Documents\Lomax Website Anti Gravity\lomax-construction\src\assets\images\projects"

foreach ($proj in $projects) {
    $src = Join-Path $baseSourcePath $proj.Source
    $slug = $proj.Slug
    
    if (Test-Path $src) {
        $files = Get-ChildItem -Path $src -File | Where-Object { $_.Extension -match "\.(jpg|jpeg|png)$" }
        $count = 0
        
        Write-Host "Processing $slug from $src..."
        
        foreach ($file in $files) {
            $count++
            # Naming convention: [slug]-gallery-[i].jpg
            # We standardize to .jpg for simplicity if possible, but better keep valid extension
            $ext = $file.Extension.ToLower()
            $newName = "$slug-gallery-$count$ext"
            $destFile = Join-Path $destPath $newName
            
            Copy-Item -Path $file.FullName -Destination $destFile -Force
        }
        
        Write-Host "  Copied $count images for $slug"
        # Output strictly structured data for parsing if needed
        Write-Host "DATA_OUTPUT: $slug=$count"
    } else {
        Write-Warning "Source path not found: $src"
    }
}
