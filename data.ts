export const DummyAppointments: Appointment[] = [
  {
    doctorId: "1",
    patientId: "1",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    status: "pending",
  },
  {
    doctorId: "1",
    patientId: "2",
    date: new Date().toISOString().split("T")[0],
    time: "11:00",
    status: "pending",
  },
  {
    doctorId: "1",
    patientId: "3",
    date: new Date().toISOString().split("T")[0],
    time: "12:00",
    status: "pending",
  },
  {
    doctorId: "1",
    patientId: "1",
    date: new Date().toISOString().split("T")[0],
    time: "13:00",
    status: "pending",
  },
  {
    doctorId: "1",
    patientId: "5",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
    status: "pending",
  },
  {
    doctorId: "2",
    patientId: "2",
    date: "2021-03-02",
    time: "11:00",
    status: "pending",
  },
  {
    doctorId: "3",
    patientId: "3",
    date: "2021-03-03",
    time: "12:00",
    status: "pending",
  },
  {
    doctorId: "4",
    patientId: "4",
    date: "2021-03-04",
    time: "13:00",
    status: "pending",
  },
  {
    doctorId: "5",
    patientId: "5",
    date: "2021-03-05",
    time: "14:00",
    status: "pending",
  },
];

export const DummyDoctors: Doctor[] = [
  {
    id: "1",
    firstName: "Adam",
    lastName: "Levin",
    gender: "Male",
    dateOfBirth: "1980-01-01",
    email: "adamlevin@gmail.com",
    phoneNumber: "1234567890",
    specialization: "Cardiologist",
    qualification: "MBBS, MD",
    experienceYears: "10",
    licenseNumber: "123456",
    clinicLocation: "231, 5th Avenue, New York",
    associatedPatients: [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        phoneNumber: "1234567890",
        dateOfBirth: "1990-01-01",
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        phoneNumber: "1234567890",
        dateOfBirth: "1991-01-01",
      },
      {
        id: "3",
        firstName: "Alice",
        lastName: "Smith",
        email: "alicesmith@gmail.com",
        phoneNumber: "1234567890",
        dateOfBirth: "1992-01-01",
      },
    ],
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Williams",
    gender: "Female",
    dateOfBirth: "1978-02-14",
    email: "sarahwilliams@clinic.com",
    phoneNumber: "9876543210",
    specialization: "Dermatologist",
    qualification: "MBBS, MD (Dermatology)",
    experienceYears: "12",
    licenseNumber: "654321",
    clinicLocation: "45, East Street, San Francisco",
    associatedPatients: [],
  },
  {
    id: "3",
    firstName: "James",
    lastName: "Anderson",
    gender: "Male",
    dateOfBirth: "1985-07-20",
    email: "jamesanderson@healthcare.com",
    phoneNumber: "2345678901",
    specialization: "Orthopedic Surgeon",
    qualification: "MBBS, MS (Orthopedics)",
    experienceYears: "8",
    licenseNumber: "789012",
    clinicLocation: "320, Westside Blvd, Los Angeles",
    associatedPatients: [],
  },
  {
    id: "4",
    firstName: "Emma",
    lastName: "Thompson",
    gender: "Female",
    dateOfBirth: "1990-04-05",
    email: "emmathompson@medical.org",
    phoneNumber: "3456789012",
    specialization: "Pediatrician",
    qualification: "MBBS, DCH",
    experienceYears: "6",
    licenseNumber: "890123",
    clinicLocation: "19, Green Lane, Chicago",
    associatedPatients: [],
  },
  {
    id: "5",
    firstName: "Michael",
    lastName: "Scott",
    gender: "Male",
    dateOfBirth: "1975-10-10",
    email: "michaelscott@hospital.com",
    phoneNumber: "4567890123",
    specialization: "General Physician",
    qualification: "MBBS",
    experienceYears: "15",
    licenseNumber: "234567",
    clinicLocation: "87, High Road, Dallas",
    associatedPatients: [],
  },
];

// create 5 dummy patients
export const DummyPatients: Patient[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "1234567890",
    dateOfBirth: "1990-01-01",
    associatedDoctors: [DummyDoctors[0]],
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    phoneNumber: "1234567890",
    dateOfBirth: "1991-01-01",
    associatedDoctors: [DummyDoctors[0]],
  },
  {
    id: "3",
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@gmail.com",
    phoneNumber: "1234567890",
    dateOfBirth: "1992-01-01",
    associatedDoctors: [DummyDoctors[0]],
  },
  {
    id: "4",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bobjohnson@gmail.com",
    phoneNumber: "1234567890",
    dateOfBirth: "1993-01-01",
  },
  {
    id: "5",
    firstName: "Charlie",
    lastName: "Brown",
    email: "cbrown@outlook.com",
    phoneNumber: "1234567890",
    dateOfBirth: "1994-01-01",
  },
];
