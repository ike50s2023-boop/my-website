$ports = 3000..3010
foreach ($port in $ports) {
    $process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    if ($process) {
        Write-Host "Killing process $process on port $port..."
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
    }
}

$lockFile = ".next/dev/lock"
if (Test-Path $lockFile) {
    Write-Host "Removing stale lock file..."
    Remove-Item $lockFile -Force
}

Start-Sleep -Seconds 1

Write-Host "Starting Next.js server..."
npm run dev

