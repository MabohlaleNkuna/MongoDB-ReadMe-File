db.Facilitators.insertOne([{
      Name: "Vukona",
      Location: "Pretoria",
      Course: "Web Development"
      },
        {
        Name: "Zack",
        Location: "Soweto",
        Course: "Web Development"
        }
    ])

  db.Trainees.insertMany([
    {
      Name: "Mabohlale Nkuna",
      Location: "Pretoria",
      Facilitator: "John Doe"
    },
    {
      Name: "Leon Nkuna",
      Location: "Pretoria",
      Facilitator: "John Doe"
    }
  ])
  

  db.Projects.insertMany([
    {
      Name: "Weather App",
      Course: "React.js",
      Lesson: "APIs"
    },
    {
      Name: "Hotel app",
      Course: "React.js",
      Lesson: "DOM Manipulation"
    }
  ])
  db.Facilitators.find().pretty()
  db.Projects.find().pretty()
  db.Trainees.find().pretty()