const widgets = [
     {
       "id": "weather-widget",
       "type": "weather",
       "title": "Weather",
       "position": { "x": 0, "y": 0 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "temperature": "28°C",
         "condition": "Sunny",
         "location": "Chennai",
         "icon": "☀️"
       }
     },
     {
       "id": "news-widget",
       "type": "news",
       "title": "Latest News",
       "position": { "x": 2, "y": 0 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "articles": [
           { "headline": "Stock Market Hits Record High", "source": "CNBC" },
           { "headline": "New AI Breakthrough Announced", "source": "TechCrunch" },
           { "headline": "Electric Vehicles on the Rise", "source": "Forbes" }
         ]
       }
     },
     {
       "id": "calendar-widget",
       "type": "calendar",
       "title": "Calendar",
       "position": { "x": 0, "y": 1 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "events": [
           { "date": "2025-02-03", "title": "Project Meeting" },
           { "date": "2025-02-05", "title": "Doctor Appointment" },
           { "date": "2025-02-07", "title": "Birthday Party" }
         ]
       }
     },
     {
       "id": "stocks-widget",
       "type": "stocks",
       "title": "Stock Prices",
       "position": { "x": 2, "y": 2 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "stocks": [
           { "symbol": "AAPL", "price": "185.75", "change": "+1.23%" },
           { "symbol": "GOOGL", "price": "2850.50", "change": "-0.75%" },
           { "symbol": "TSLA", "price": "725.30", "change": "+2.10%" }
         ]
       }
     },
     {
       "id": "crypto-widget",
       "type": "crypto",
       "title": "Crypto Prices",
       "position": { "x": 4, "y": 0 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "cryptos": [
           { "symbol": "BTC", "price": "42,500", "change": "+3.12%" },
           { "symbol": "ETH", "price": "3,200", "change": "-1.45%" },
           { "symbol": "DOGE", "price": "0.085", "change": "+5.89%" }
         ]
       }
     },
     {
       "id": "todo-widget",
       "type": "tasks",
       "title": "To-Do List",
       "position": { "x": 0, "y": 3 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "tasks": [
           { "task": "Finish React project", "completed": false },
           { "task": "Buy groceries", "completed": true },
           { "task": "Call mom", "completed": false }
         ]
       }
     },
     {
       "id": "notes-widget",
       "type": "notes",
       "title": "Notes",
       "position": { "x": 2, "y": 3 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "notes": [
           { "title": "Meeting Notes", "content": "Discuss app updates" },
           { "title": "Ideas", "content": "Plan for new dashboard feature" }
         ]
       }
     },
     {
       "id": "finance-widget",
      "type": "finance",
      "title": "Personal Finance",
       "position": { "x": 4, "y": 1 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "income": "₹75,000",
         "expenses": "₹45,000",
         "savings": "₹30,000"
       }
     },
     {
       "id": "fitness-widget",
       "type": "fitness",
       "title": "Fitness Tracker",
       "position": { "x": 0, "y": 5 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "steps": 8500,
         "goal": 10000,
         "caloriesBurned": 400
       }
     },
     {
       "id": "music-widget",
       "type": "music",
       "title": "Now Playing",
       "position": { "x": 2, "y": 5 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "song": "Blinding Lights",
         "artist": "The Weeknd"
       }
     },
     {
       "id": "email-widget",
       "type": "email",
       "title": "Emails",
       "position": { "x": 4, "y": 3 },
       "size": { "width": 120, "height": 120 },
       "data": {
         "unreadEmails": 12,
         "latestEmail": { "subject": "Meeting Update", "sender": "John Doe" }
       }
     }
   ];

export default widgets;