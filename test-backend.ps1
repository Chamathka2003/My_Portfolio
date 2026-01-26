# Backend Test Script
# Run this in PowerShell to test if your backend is working

Write-Host "Testing Backend API..." -ForegroundColor Cyan

# Test 1: Check if backend is accessible
Write-Host "`nTest 1: Checking backend endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost/myportfilo/backend/" -UseBasicParsing
    Write-Host "✓ Backend is accessible" -ForegroundColor Green
} catch {
    Write-Host "✗ Backend not accessible. Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Make sure XAMPP/WAMP is running and backend folder is in htdocs/www" -ForegroundColor Yellow
    exit
}

# Test 2: Get contact messages
Write-Host "`nTest 2: Getting contact messages..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost/myportfilo/backend/contact" -Method Get
    Write-Host "✓ Contact endpoint working" -ForegroundColor Green
    Write-Host "Messages found: $($response.Count)" -ForegroundColor Cyan
} catch {
    Write-Host "✗ Contact endpoint error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 3: Send test message
Write-Host "`nTest 3: Sending test contact message..." -ForegroundColor Yellow
$testData = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message from backend verification script"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost/myportfilo/backend/contact" -Method Post -Body $testData -ContentType "application/json"
    Write-Host "✓ Message sent successfully!" -ForegroundColor Green
    Write-Host "Response: $($response.message)" -ForegroundColor Cyan
} catch {
    Write-Host "✗ Failed to send message: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Error details: $responseBody" -ForegroundColor Red
    }
}

# Test 4: Get projects
Write-Host "`nTest 4: Getting projects..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost/myportfilo/backend/projects" -Method Get
    Write-Host "✓ Projects endpoint working" -ForegroundColor Green
    Write-Host "Projects found: $($response.Count)" -ForegroundColor Cyan
} catch {
    Write-Host "✗ Projects endpoint error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n=== Backend Test Complete ===" -ForegroundColor Cyan
Write-Host "Check the results above to ensure all endpoints are working correctly.`n" -ForegroundColor White
