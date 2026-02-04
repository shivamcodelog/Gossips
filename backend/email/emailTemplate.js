export const welcomeEmailTemplate = (username, clientURL) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Gossips</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Roboto', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          .header {
            background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
            color: #ffffff;
            padding: 40px 20px;
            text-align: center;
            position: relative;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          }
          .header::before {
            content: '🎉';
            font-size: 50px;
            position: absolute;
            top: 10px;
            left: 20px;
          }
          .content {
            padding: 30px 20px;
            text-align: center;
            background-color: #f9f9f9;
          }
          .content p {
            font-size: 18px;
            line-height: 1.6;
            margin: 20px 0;
            color: #555;
          }
          .highlight {
            font-weight: 700;
            color: #ff6b6b;
          }
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 700;
            font-size: 16px;
            margin-top: 20px;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            transition: transform 0.3s ease;
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(102, 126, 234, 0.6);
          }
          .features {
            display: flex;
            justify-content: space-around;
            margin: 30px 0;
            flex-wrap: wrap;
          }
          .feature {
            flex: 1;
            min-width: 150px;
            margin: 10px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .feature h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
            color: #667eea;
          }
          .feature p {
            margin: 0;
            font-size: 14px;
            color: #777;
          }
          .footer {
            background-color: #333;
            color: #cccccc;
            padding: 20px;
            text-align: center;
            font-size: 12px;
          }
          .footer a {
            color: #667eea;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Gossips, ${username}!</h1>
          </div>
          <div class="content">
            <p>Hey there! 🌟 We're thrilled to have you join the <span class="highlight">Gossips</span> community. Get ready for an amazing experience filled with connections, stories, and fun!</p>
            <p>Here's what you can look forward to:</p>
            <div class="features">
              <div class="feature">
                <h3>🤝 Connect</h3>
                <p>Meet like-minded people and build lasting friendships.</p>
              </div>
              <div class="feature">
                <h3>📖 Share Stories</h3>
                <p>Share your thoughts and discover fascinating tales from others.</p>
              </div>
              <div class="feature">
                <h3>🎉 Have Fun</h3>
                <p>Engage in exciting discussions and community events.</p>
              </div>
            </div>
            <a href="${clientURL}" class="button">Start Your Journey</a>
          </div>
          <div class="footer">
            <p>Questions? <a href="mailto:support@gossips.com">Contact Support</a></p>
            <p>&copy; 2026 Gossips. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
};
