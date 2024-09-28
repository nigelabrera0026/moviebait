const express = require('express');
const { exec } = require('child_process');
const path = require('path');  // Path module to handle file paths
const app = express();

// Correctly reference the bash script located in moviebait/moviebait/automate_qbittorrent.sh
const scriptPath = path.join(__dirname, '../moviebait/automate_qbittorrent.sh');

// Endpoint to trigger the bash script
app.get('/run-script', (req, res) => {
  // Execute the bash script
  exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return res.status(500).send('Error executing script');
    }
    console.log(`Script executed successfully: ${stdout}`);
    res.send('Script executed successfully');
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

