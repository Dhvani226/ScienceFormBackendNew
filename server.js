const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint to fetch applications
app.get('/applications', async (req, res) => {
  try {
    const applications = await prisma.scienceDayApplication.findMany(); // Adjust the model name as per your Prisma schema
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Existing submit endpoint
app.post('/submit', async (req, res) => {
  const { studentName, schoolName, schoolAddress, schoolCity, schoolState, schoolPincode, teacherName, teacherEmail, modelType, participationType } = req.body;
  try {
    const newApplication = await prisma.scienceDayApplication.create({
      data: {
        studentName,
        schoolName,
        schoolAddress,
        schoolCity,
        schoolState,
        schoolPincode,
        teacherName,
        teacherEmail,
        modelType,
        participationType,
      },
    });
    res.json(newApplication);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Failed to create application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
