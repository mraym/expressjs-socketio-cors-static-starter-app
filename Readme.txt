# Install nodejs packages
npm install express --save
npm install socket.io --save
npm install cors --save

# Run the server in the background in ubuntu
nodejs expressjs-socketio-cors-static-starter-app.js >> out.log 2>&1 &
