#!/bin/bash

# Step 1: Open Windows search bar and type 'qbittorrent'
powershell.exe -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{LWin}qbittorrent{Enter}')"

# Wait for qbittorrent to open (adjust this sleep duration if needed)
sleep 3

# Step 2: Simulate keyboard shortcuts (Ctrl + Shift + O, Ctrl + A, Ctrl + V)
powershell.exe -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('^+o'); [System.Windows.Forms.SendKeys]::SendWait('^a'); [System.Windows.Forms.SendKeys]::SendWait('^v')"
