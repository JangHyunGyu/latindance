
Add-Type -AssemblyName System.Drawing

$imageDir = "$PSScriptRoot\..\assets\images"
$maxSize = 512
$thresholdBytes = 300 * 1024 # 300KB

Write-Host "Checking images in $imageDir..."

if (-not (Test-Path $imageDir)) {
    Write-Error "Image directory not found: $imageDir"
    exit 1
}

$files = Get-ChildItem $imageDir -Filter *.png

$count = 0

foreach ($file in $files) {
    if ($file.Length -gt $thresholdBytes) {
        Write-Host "Optimizing $($file.Name) ($([math]::round($file.Length/1KB)) KB)..."
        
        try {
            $img = [System.Drawing.Image]::FromFile($file.FullName)
            
            # Calculate new dimensions
            $newWidth = $img.Width
            $newHeight = $img.Height
            
            if ($img.Width -gt $maxSize -or $img.Height -gt $maxSize) {
                $ratio = $img.Width / $img.Height
                if ($ratio -gt 1) {
                    $newWidth = $maxSize
                    $newHeight = [math]::Round($maxSize / $ratio)
                } else {
                    $newHeight = $maxSize
                    $newWidth = [math]::Round($maxSize * $ratio)
                }
            }
            
            $newImg = new-object System.Drawing.Bitmap $newWidth, $newHeight
            $graph = [System.Drawing.Graphics]::FromImage($newImg)
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            
            $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            $img.Dispose()
            
            # Save overwriting the original
            $newImg.Save($file.FullName, [System.Drawing.Imaging.ImageFormat]::Png)
            
            $newImg.Dispose()
            $graph.Dispose()
            
            $newFile = Get-Item $file.FullName
            Write-Host "  -> Done. New size: $([math]::round($newFile.Length/1KB)) KB"
            $count++
        }
        catch {
            Write-Host "  -> Error processing $($file.Name): $_"
        }
    }
}

if ($count -eq 0) {
    Write-Host "All images are already optimized!"
} else {
    Write-Host "Optimized $count images."
}
