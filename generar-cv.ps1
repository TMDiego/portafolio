# ====================================================================
#  generar-cv.ps1
#  Convierte assets/cv/cv.html en assets/cv/CV.pdf usando Edge en
#  modo headless. El PDF resultante tiene TEXTO REAL (seleccionable),
#  a diferencia de una imagen.
#
#  Uso:  .\generar-cv.ps1
#  Edite primero cv.html si quiere cambiar algo y luego ejecute esto.
# ====================================================================

$ErrorActionPreference = 'Stop'

$raiz     = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlPath = Join-Path $raiz 'assets\cv\cv.html'
$pdfPath  = Join-Path $raiz 'assets\cv\CV.pdf'

# --- Localizar Microsoft Edge ---
$candidatos = @(
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
)
$navegador = $candidatos | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $navegador) {
    Write-Host "ERROR: no se encontro Edge ni Chrome." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $htmlPath)) {
    Write-Host "ERROR: no existe $htmlPath" -ForegroundColor Red
    exit 1
}

# --- Convertir a PDF ---
Write-Host "Generando PDF con:" $navegador
$uri = ([System.Uri]$htmlPath).AbsoluteUri

& $navegador --headless --disable-gpu --no-pdf-header-footer `
    "--print-to-pdf=$pdfPath" $uri | Out-Null

# --- Verificar ---
Start-Sleep -Milliseconds 800
if (Test-Path $pdfPath) {
    $kb = [math]::Round((Get-Item $pdfPath).Length / 1KB)
    Write-Host "OK -> $pdfPath ($kb KB)" -ForegroundColor Green
} else {
    Write-Host "ERROR: no se genero el PDF." -ForegroundColor Red
    exit 1
}