// doctorsData.js

export const doctors = [
    // Dermatologists
    {
        id: "dermatologist-1",
        name: "Dr. Attia Tabassum",
        specialty: "Dermatology",
        location: "Lahore",
        rating: 4.9,
        experience: 10,
        image: "female.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["09:00 AM", "10:30 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "10:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"],
            "Wednesday": ["09:00 AM", "10:30 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "10:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"],
            "Friday": ["09:00 AM", "10:30 AM", "02:00 PM"]
        },
        education: "M.B.B.S., F.C.P.S (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Video Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (659)",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Fatima Ali",
                rating: 5,
                comment: "Dr. Tabassum is excellent with skin treatments. Very professional and caring.",
                date: "2024-01-15"
            },
            {
                name: "Ahmed Hassan",
                rating: 5,
                comment: "Great dermatologist. Solved my skin problems effectively.",
                date: "2024-01-10"
            }
        ]
    },
    {
        id: "dermatologist-2",
        name: "Dr. Saira Jabeen",
        specialty: "Dermatology",
        location: "Lahore",
        rating: 5.0,
        experience: 8,
        image: "female.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["08:00 AM", "09:30 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "09:30 AM", "01:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["08:00 AM", "09:30 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "09:30 AM", "01:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["08:00 AM", "09:30 AM", "01:00 PM"]
        },
        education: "MBBS, FCPS (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Video Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (72)",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sana Khan",
                rating: 5,
                comment: "Dr. Jabeen is very knowledgeable and explains everything clearly.",
                date: "2024-01-20"
            }
        ]
    },
    {
        id: "dermatologist-3",
        name: "Dr. Syed Adeel Ur Rehman",
        specialty: "Dermatology",
        location: "Karachi",
        rating: 4.8,
        experience: 12,
        image: "male.jpg", // Placeholder
        fees: 1200,
        availability: {
            "Monday": ["10:00 AM", "11:30 AM", "02:30 PM"],
            "Tuesday": ["10:00 AM", "11:30 AM", "02:30 PM", "04:30 PM", "05:30 PM"],
            "Wednesday": ["10:00 AM", "11:30 AM", "02:30 PM"],
            "Thursday": ["10:00 AM", "11:30 AM", "02:30 PM", "04:30 PM", "05:30 PM"],
            "Friday": ["10:00 AM", "11:30 AM", "02:30 PM"]
        },
        education: "M.B.B.S., Fellow Medical Dermatology (USA)",
        languages: ["English", "Urdu"],
        consultationType: "Derm MD Care (Gulshan e Iqbal)",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (3084)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Zara Ahmed",
                rating: 5,
                comment: "Dr. Rehman is very skilled and provides excellent laser treatments.",
                date: "2024-01-22"
            }
        ]
    },
    {
        id: "dermatologist-4",
        name: "Dr. Salman Mansoor",
        specialty: "Dermatology",
        location: "Karachi",
        rating: 4.7,
        experience: 24,
        image: "male.jpg", // Placeholder
        fees: 2500,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "01:30 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "01:30 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "01:30 PM"]
        },
        education: "MBBS, MD (USA), D Derm (London), DRCP Derm (London)",
        languages: ["English", "Urdu"],
        consultationType: "The Skin (DHA, Phase 6)",
        waitTime: "Under 15 Min",
        satisfactionRate: "94% (6172)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Hina Malik",
                rating: 5,
                comment: "Dr. Mansoor is highly experienced and provides excellent aesthetic treatments.",
                date: "2024-01-25"
            }
        ]
    },
    {
        id: "dermatologist-5",
        name: "Dr. Lubna Rani",
        specialty: "Dermatology",
        location: "Islamabad",
        rating: 4.9,
        experience: 16,
        image: "female.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["08:30 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:30 AM", "10:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"],
            "Wednesday": ["08:30 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:30 AM", "10:00 AM", "01:00 PM", "03:30 PM", "05:00 PM"],
            "Friday": ["08:30 AM", "10:00 AM", "01:00 PM"]
        },
        education: "MBBS, FCPS (Dermatology), MHPE",
        languages: ["English", "Urdu"],
        consultationType: "Riphah IIMCT",
        waitTime: "15 - 30 Min",
        satisfactionRate: "98% (57)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Ayesha Tariq",
                rating: 5,
                comment: "Dr. Rani is very thorough and provides excellent cosmetic treatments.",
                date: "2024-01-28"
            }
        ]
    },
    {
        id: "dermatologist-6",
        name: "Dr. Muhammad Khurram Ahmad",
        specialty: "Dermatology",
        location: "Islamabad",
        rating: 5.0,
        experience: 35,
        image: "male.jpg", // Placeholder
        fees: 4400,
        availability: {
            "Monday": ["09:30 AM", "11:30 AM", "02:00 PM"],
            "Tuesday": ["09:30 AM", "11:30 AM", "02:00 PM", "04:00 PM", "06:30 PM"],
            "Wednesday": ["09:30 AM", "11:30 AM", "02:00 PM"],
            "Thursday": ["09:30 AM", "11:30 AM", "02:00 PM", "04:00 PM", "06:30 PM"],
            "Friday": ["09:30 AM", "11:30 AM", "02:00 PM"]
        },
        education: "MBBS, FCPS (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Shifa International Hospitals",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (75)",
        subspecialty: "Aesthetic Physician, Laser Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Farah Noor",
                rating: 5,
                comment: "Dr. Ahmad is highly experienced and provides top-quality dermatological care.",
                date: "2024-01-30"
            }
        ]
    },
    {
        id: "dermatologist-7",
        name: "Dr. Anum Sadia",
        specialty: "Dermatology",
        location: "Karachi",
        rating: 4.8,
        experience: 10,
        image: "female.jpg", // Placeholder
        fees: 1200,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:30 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:30 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:30 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:30 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:30 PM"]
        },
        education: "M.B.B.S., F.C.P.S (Dermatology)",
        languages: ["English", "Urdu"],
        consultationType: "Online Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (50)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sana Aslam",
                rating: 5,
                comment: "Dr. Sadia provides excellent dermatological care with modern techniques.",
                date: "2024-02-01"
            }
        ]
    },
    {
        id: "dermatologist-8",
        name: "Dr. Abdul Latif Khan Niazi",
        specialty: "Dermatology",
        location: "Karachi",
        rating: 5.0,
        experience: 33,
        image: "male.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:30 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:30 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:30 PM"]
        },
        education: "MBBS, DDV (Austria)",
        languages: ["English", "Urdu"],
        consultationType: "Online Consultation",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (29)",
        subspecialty: "Cosmetologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Khalid Mahmood",
                rating: 5,
                comment: "Dr. Niazi has extensive experience and provides exceptional dermatological care.",
                date: "2024-02-02"
            }
        ]
    },
    {
        id: "dermatologist-9",
        name: "Dr. Reema Sunil",
        specialty: "Dermatology",
        location: "Karachi",
        rating: 5.0,
        experience: 5,
        image: "female.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "02:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "02:00 PM", "04:30 PM", "06:30 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "02:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "02:00 PM", "04:30 PM", "06:30 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "02:00 PM"]
        },
        education: "MBBS, Dermatology",
        languages: ["English", "Urdu"],
        consultationType: "Derm MD Care (Clifton)",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (23)",
        subspecialty: "Dermatologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Faiza Sheikh",
                rating: 5,
                comment: "Dr. Sunil is very professional and provides excellent skin treatments.",
                date: "2024-02-03"
            }
        ]
    },

    // Gynecologists
    {
        id: "gynecologist-1",
        name: "Dr. Mehjabeen",
        specialty: "Gynecology",
        location: "Karachi",
        rating: 4.9,
        experience: 7,
        image: "female.jpg", // Placeholder
        fees: 1000,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "02:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "02:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "02:00 PM"]
        },
        education: "M.B.B.S, M.C.P.S (Gynecology & Obstetrician)",
        languages: ["English", "Urdu"],
        consultationType: "Atiya General Hospital",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (1583)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sadia Malik",
                rating: 5,
                comment: "Dr. Mehjabeen is very caring and provides excellent gynecological care.",
                date: "2024-02-01"
            }
        ]
    },
    {
        id: "gynecologist-2",
        name: "Dr. Naseem Nabeel",
        specialty: "Gynecology",
        location: "Karachi",
        rating: 5.0,
        experience: 18,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["08:00 AM", "10:30 AM", "01:30 PM"],
            "Tuesday": ["08:00 AM", "10:30 AM", "01:30 PM", "03:00 PM", "05:30 PM"],
            "Wednesday": ["08:00 AM", "10:30 AM", "01:30 PM"],
            "Thursday": ["08:00 AM", "10:30 AM", "01:30 PM", "03:00 PM", "05:30 PM"],
            "Friday": ["08:00 AM", "10:30 AM", "01:30 PM"]
        },
        education: "MBBS, MCPS (Gynecology and Obstetrics), MRCOG",
        languages: ["English", "Urdu"],
        consultationType: "Ibn e Seena Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (13)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Rabia Khan",
                rating: 5,
                comment: "Dr. Nabeel is highly skilled and provides excellent obstetric care.",
                date: "2024-02-03"
            }
        ]
    },
    {
        id: "gynecologist-3",
        name: "Dr. Areej Azhar Siddiqui",
        specialty: "Gynecology",
        location: "Lahore",
        rating: 5.0,
        experience: 11,
        image: "female.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:30 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:30 PM", "04:30 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:30 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:30 PM", "04:30 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:30 PM"]
        },
        education: "MBBS, FCPS",
        languages: ["English", "Urdu"],
        consultationType: "Niazi Poly Clinic",
        waitTime: "15 - 30 Min",
        satisfactionRate: "100% (49)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Amna Riaz",
                rating: 5,
                comment: "Dr. Siddiqui is very professional and provides excellent gynecological services.",
                date: "2024-02-05"
            }
        ]
    },
    {
        id: "gynecologist-4",
        name: "Dr. Tanzeela Rehman",
        specialty: "Gynecology",
        location: "Lahore",
        rating: 4.8,
        experience: 15,
        image: "female.jpg", // Placeholder
        fees: 3000,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "03:00 PM"]
        },
        education: "M.B.B.S, F.C.P.S (Gynecology & Obstetrics)",
        languages: ["English", "Urdu"],
        consultationType: "Omar Hospital and Cardiac Center",
        waitTime: "15 - 30 Min",
        satisfactionRate: "97% (392)",
        subspecialty: "Aesthetic Gynecologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Khadija Akram",
                rating: 5,
                comment: "Dr. Rehman specializes in aesthetic gynecology and provides excellent care.",
                date: "2024-02-07"
            }
        ]
    },
    {
        id: "gynecologist-5",
        name: "Prof. Dr. Saira Afghan",
        specialty: "Gynecology",
        location: "Islamabad",
        rating: 4.8,
        experience: 39,
        image: "female.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:00 PM"]
        },
        education: "M.B.B.S, F.C.P.S (Gynecology & Obstetrics)",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Medical And Surgical Center",
        waitTime: "Under 15 Min",
        satisfactionRate: "97% (1148)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Rubina Akhtar",
                rating: 5,
                comment: "Prof. Dr. Afghan has vast experience and provides excellent gynecological care.",
                date: "2024-02-08"
            }
        ]
    },
    {
        id: "gynecologist-6",
        name: "Lt. Col (R) Assoc. Prof. Dr. Sadia Arif",
        specialty: "Gynecology",
        location: "Islamabad",
        rating: 4.9,
        experience: 25,
        image: "female.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, DGO MCPS, FCPS, CHPE",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Gynae Center",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (447)",
        subspecialty: "Obstetrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Shazia Malik",
                rating: 5,
                comment: "Lt. Col Dr. Arif is highly professional and provides excellent obstetric care.",
                date: "2024-02-09"
            }
        ]
    },

    // Neurologists
    {
        id: "neurologist-1",
        name: "Dr. Huma Khan",
        specialty: "Neurology",
        location: "Karachi",
        rating: 4.9,
        experience: 6,
        image: "female.jpg", // Placeholder
        fees: 1200,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "M.B.B.S., F.C.P.S. (Neurology)",
        languages: ["English", "Urdu"],
        consultationType: "Zubaida Medical Center",
        waitTime: "15 - 30 Min",
        satisfactionRate: "99% (214)",
        subspecialty: "Neurologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sarah Ahmed",
                rating: 5,
                comment: "Dr. Khan is very skilled in neurology and provides excellent care.",
                date: "2024-02-10"
            }
        ]
    },
    {
        id: "neurologist-2",
        name: "Dr. Deepa Kumari",
        specialty: "Neurology",
        location: "Karachi",
        rating: 4.9,
        experience: 10,
        image: "female.jpg", // Placeholder
        fees: 1500,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:30 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:30 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:30 PM"]
        },
        education: "MBBS, FCPS Neurology",
        languages: ["English", "Urdu"],
        consultationType: "Karachi Adventist Hospital",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (89)",
        subspecialty: "Neurologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Hassan Ali",
                rating: 5,
                comment: "Dr. Kumari is very professional and provides excellent neurological care.",
                date: "2024-02-11"
            }
        ]
    },
    {
        id: "neurologist-3",
        name: "Dr. Ahmad Nawaz",
        specialty: "Neurology",
        location: "Lahore",
        rating: 5.0,
        experience: 6,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:30 AM", "11:30 AM", "02:30 PM"],
            "Tuesday": ["09:30 AM", "11:30 AM", "02:30 PM", "04:30 PM", "06:30 PM"],
            "Wednesday": ["09:30 AM", "11:30 AM", "02:30 PM"],
            "Thursday": ["09:30 AM", "11:30 AM", "02:30 PM", "04:30 PM", "06:30 PM"],
            "Friday": ["09:30 AM", "11:30 AM", "02:30 PM"]
        },
        education: "M.B.B.S., F.C.P.S. (Neurology)",
        languages: ["English", "Urdu"],
        consultationType: "Central Park Hospital",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (8)",
        subspecialty: "Neurologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Zainab Malik",
                rating: 5,
                comment: "Dr. Nawaz is excellent and provides comprehensive neurological treatment.",
                date: "2024-02-12"
            }
        ]
    },
    {
        id: "neurologist-4",
        name: "Assoc. Prof. Dr. Shahid Mukhtar",
        specialty: "Neurology",
        location: "Lahore",
        rating: 4.6,
        experience: 15,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "03:00 PM"]
        },
        education: "M.B.B.S., F.C.P.S. (Neurology)",
        languages: ["English", "Urdu"],
        consultationType: "Farooq Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "96% (3395)",
        subspecialty: "Neurologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Tariq Sheikh",
                rating: 5,
                comment: "Prof. Dr. Mukhtar has extensive experience in neurology and provides excellent care.",
                date: "2024-02-13"
            }
        ]
    },
    {
        id: "neurologist-5",
        name: "Dr. Naveed Javed",
        specialty: "Neurology",
        location: "Islamabad",
        rating: 4.4,
        experience: 18,
        image: "male.jpg", // Placeholder
        fees: 4000,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:00 PM"]
        },
        education: "MBChB (UK), MD (Neuro - Medicine) USA, MRCPsych UK, PhD (Oxford)",
        languages: ["English", "Urdu"],
        consultationType: "Saeed International Hospital",
        waitTime: "Under 15 Min",
        satisfactionRate: "94% (1162)",
        subspecialty: "Neurologist, Psychiatrist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Amjad Ali",
                rating: 5,
                comment: "Dr. Javed has international qualifications and provides excellent neurological care.",
                date: "2024-02-14"
            }
        ]
    },
    {
        id: "neurologist-6",
        name: "Col. (R) Dr. Zahid Rustam",
        specialty: "Neurology",
        location: "Islamabad",
        rating: 4.8,
        experience: 25,
        image: "male.jpg", // Placeholder
        fees: 2500,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, FCPS Physical medicine & rehabilitation",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Medical Center",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (2369)",
        subspecialty: "Neurologist, Rehab Medicine, Pain Management Specialist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Farhan Khan",
                rating: 5,
                comment: "Col. Dr. Rustam is excellent in pain management and rehabilitation.",
                date: "2024-02-15"
            }
        ]
    },

    // Pediatricians
    {
        id: "pediatrician-1",
        name: "Assist. Prof. Dr. Javaid Iqbal",
        specialty: "Pediatrics",
        location: "Karachi",
        rating: 4.7,
        experience: 12,
        image: "male.jpg", // Placeholder
        fees: 1800,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:00 PM"]
        },
        education: "MBBS, FCPS (Pediatric), FCPS (Neonatology)",
        languages: ["English", "Urdu"],
        consultationType: "Mamji Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "97% (295)",
        subspecialty: "Neonatologist, Pediatrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sobia Ahmad",
                rating: 5,
                comment: "Dr. Iqbal is excellent with children and provides comprehensive pediatric care.",
                date: "2024-02-16"
            }
        ]
    },
    {
        id: "pediatrician-2",
        name: "Dr.Sana Abbas",
        specialty: "Pediatrics",
        location: "Karachi",
        rating: 3.8,
        experience: 5,
        image: "female.jpg", // Placeholder
        fees: 1800,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, FCPS (Pediatrics)",
        languages: ["English", "Urdu"],
        consultationType: "Saifee Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "75% (3)",
        subspecialty: "Pediatrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Naseem Shah",
                rating: 4,
                comment: "Dr. Abbas is caring and provides good pediatric care.",
                date: "2024-02-17"
            }
        ]
    },
    {
        id: "pediatrician-3",
        name: "Dr. Surriya Jabeen",
        specialty: "Pediatrics",
        location: "Lahore",
        rating: 4.9,
        experience: 30,
        image: "female.jpg", // Placeholder
        fees: 3000,
        availability: {
            "Monday": ["08:30 AM", "10:30 AM", "01:30 PM"],
            "Tuesday": ["08:30 AM", "10:30 AM", "01:30 PM", "03:30 PM", "05:30 PM"],
            "Wednesday": ["08:30 AM", "10:30 AM", "01:30 PM"],
            "Thursday": ["08:30 AM", "10:30 AM", "01:30 PM", "03:30 PM", "05:30 PM"],
            "Friday": ["08:30 AM", "10:30 AM", "01:30 PM"]
        },
        education: "M.B.B.S., F.C.P.S. (Pediatrics), M.C.P.S (Pediatrics)",
        languages: ["English", "Urdu"],
        consultationType: "Iqra Medical Complex",
        waitTime: "15 - 30 Min",
        satisfactionRate: "99% (191)",
        subspecialty: "Pediatrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Farah Malik",
                rating: 5,
                comment: "Dr. Jabeen has vast experience in pediatrics and is excellent with children.",
                date: "2024-02-18"
            }
        ]
    },
    {
        id: "pediatrician-4",
        name: "Dr. Sadia Sharif",
        specialty: "Pediatrics",
        location: "Lahore",
        rating: 4.5,
        experience: 18,
        image: "female.jpg", // Placeholder
        fees: 4000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "M.B.B.S, FRCPCH (UK), MRCPCH (Paeds), F.C.P.S (Paeds)",
        languages: ["English", "Urdu"],
        consultationType: "Fatima Memorial Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "95% (144)",
        subspecialty: "Pediatrician, Asthma Specialist, Neonatologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Mariam Ali",
                rating: 5,
                comment: "Dr. Sharif has international qualifications and provides excellent pediatric care.",
                date: "2024-02-19"
            }
        ]
    },
    {
        id: "pediatrician-5",
        name: "Dr. Imrana Salahuddin",
        specialty: "Pediatrics",
        location: "Islamabad",
        rating: 2.5,
        experience: 30,
        image: "female.jpg", // Placeholder
        fees: 3000,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:00 PM"]
        },
        education: "MBBS, MCPS (Pediatrics), MRCGP (Int) RCGP UK, MCPS (Family Medicine)",
        languages: ["English", "Urdu"],
        consultationType: "MedCity International Hospital",
        waitTime: "15 - 30 Min",
        satisfactionRate: "50% (3)",
        subspecialty: "Pediatrician, Lifestyle Medicine Physician, Consultant Physician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Zubair Khan",
                rating: 3,
                comment: "Dr. Salahuddin has vast experience but needs improvement in patient care.",
                date: "2024-02-20"
            }
        ]
    },
    {
        id: "pediatrician-6",
        name: "Dr. Maliha Akhtar Qureshi",
        specialty: "Pediatrics",
        location: "Islamabad",
        rating: 4.6,
        experience: 30,
        image: "female.jpg", // Placeholder
        fees: 2500,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, FCPS (Pediatrics)",
        languages: ["English", "Urdu"],
        consultationType: "Islamabad Specialists Clinic",
        waitTime: "Under 15 Min",
        satisfactionRate: "96% (95)",
        subspecialty: "Pediatrician",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Sameera Iqbal",
                rating: 5,
                comment: "Dr. Qureshi is highly experienced and provides excellent pediatric care.",
                date: "2024-02-21"
            }
        ]
    },

    // Dentists
    {
        id: "dentist-1",
        name: "Dr. Lareb Khattak",
        specialty: "Dentistry",
        location: "Karachi",
        rating: 4.7,
        experience: 3,
        image: "female.jpg", // Placeholder
        fees: 3000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "BDS, RDS",
        languages: ["English", "Urdu"],
        consultationType: "Altamash Dental Clinic",
        waitTime: "Under 15 Min",
        satisfactionRate: "97% (68)",
        subspecialty: "Dentist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Adnan Sheikh",
                rating: 5,
                comment: "Dr. Khattak provides excellent dental care and is very professional.",
                date: "2024-02-22"
            }
        ]
    },
    {
        id: "dentist-2",
        name: "Dr. Zeeshan Faiz",
        specialty: "Dentistry",
        location: "Karachi",
        rating: 4.9,
        experience: 21,
        image: "male.jpg", // Placeholder
        fees: 1000,
        availability: {
            "Monday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Tuesday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Wednesday": ["08:00 AM", "10:00 AM", "01:00 PM"],
            "Thursday": ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
            "Friday": ["08:00 AM", "10:00 AM", "01:00 PM"]
        },
        education: "B.D.S., post Graduation In Clinical Dental Sciences (UK,London)",
        languages: ["English", "Urdu"],
        consultationType: "Faiz Dental Clinic",
        waitTime: "Under 15 Min",
        satisfactionRate: "99% (366)",
        subspecialty: "Dentist, Periodontist, Implantologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Saima Raza",
                rating: 5,
                comment: "Dr. Faiz has international qualifications and provides excellent dental treatments.",
                date: "2024-02-23"
            }
        ]
    },
    {
        id: "dentist-3",
        name: "Dr. Hamza Jawed",
        specialty: "Dentistry",
        location: "Lahore",
        rating: 4.1,
        experience: 6,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "03:00 PM"]
        },
        education: "BDS, FCPS (Oral And Maxillo-facial Surgery)",
        languages: ["English", "Urdu"],
        consultationType: "Dental Avenue Hospital",
        waitTime: "45 - 60 Min",
        satisfactionRate: "83% (64)",
        subspecialty: "Oral and Maxillofacial Surgeon, Dentist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Taimur Khan",
                rating: 4,
                comment: "Dr. Jawed is skilled in oral surgery but wait times can be long.",
                date: "2024-02-24"
            }
        ]
    },
    {
        id: "dentist-4",
        name: "Dr. Aleena Chaudhary",
        specialty: "Dentistry",
        location: "Lahore",
        rating: 5.0,
        experience: 14,
        image: "female.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "BDS, NBDE (USA)",
        languages: ["English", "Urdu"],
        consultationType: "House of Dentistry",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (29)",
        subspecialty: "Dentist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Fawad Ali",
                rating: 5,
                comment: "Dr. Chaudhary has US qualifications and provides excellent dental care.",
                date: "2024-02-25"
            }
        ]
    },
    {
        id: "dentist-5",
        name: "Dr. Zain Ahmad Qureshi",
        specialty: "Dentistry",
        location: "Islamabad",
        rating: 4.8,
        experience: 8,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "B.D.S.",
        languages: ["English", "Urdu"],
        consultationType: "Z Care Dental Experts",
        waitTime: "Under 15 Min",
        satisfactionRate: "N/A", // This was N/A, keep it.
        subspecialty: "Dentist, Cosmetic Dentist, Oral and Maxillofacial Surgeon",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Ahmed Hassan",
                rating: 5,
                comment: "Excellent cosmetic dentistry services with modern techniques.",
                date: "2024-02-20"
            }
        ]
    },
    {
        id: "dentist-6",
        name: "Dr. Ayesha Khan",
        specialty: "Dentistry",
        location: "Islamabad",
        rating: 5.0,
        experience: 15,
        image: "female.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "BDS, RDS, C-Endo, C-Ortho, C-Implants, AST in Periodentology",
        languages: ["English", "Urdu"],
        consultationType: "Dental Art & Science",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (1009)",
        subspecialty: "Dentist, Restorative Dentist, Cosmetic Dentist, Implantologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Fatima Sheikh",
                rating: 5,
                comment: "Dr. Khan is highly skilled in implantology and restorative dentistry.",
                date: "2024-02-18"
            }
        ]
    },
    // Cardilogists
    {
        id: "cardiologist-1",
        name: "Dr. Imran Khan",
        specialty: "Cardiology",
        location: "Karachi",
        rating: 4.9,
        experience: 15,
        image: "male.jpg", // Placeholder
        fees: 2000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, FCPS (Cardiology)",
        languages: ["English", "Urdu"],
        consultationType: "National Medical Centre",
        waitTime: "Under 15 Min",
        satisfactionRate: "98% (500)",
        subspecialty: "Interventional Cardiologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Asif Javed",
                rating: 5,
                comment: "Dr. Imran is a highly skilled cardiologist, very thorough and knowledgeable.",
                date: "2024-03-01"
            }
        ]
    },
    {
        id: "cardiologist-2",
        name: "Dr. Sara Bilal",
        specialty: "Cardiology",
        location: "Lahore",
        rating: 4.8,
        experience: 10,
        image: "female.jpg", // Placeholder
        fees: 1800,
        availability: {
            "Monday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Tuesday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Wednesday": ["10:00 AM", "12:00 PM", "03:00 PM"],
            "Thursday": ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"],
            "Friday": ["10:00 AM", "12:00 PM", "03:00 PM"]
        },
        education: "MBBS, Diplomate American Board of Cardiology",
        languages: ["English", "Urdu"],
        consultationType: "Omar Hospital and Cardiac Center",
        waitTime: "15 - 30 Min",
        satisfactionRate: "97% (300)",
        subspecialty: "General Cardiologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.405021272714!2d74.32135661440626!3d31.54562235287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a300d1%3A0x60c2d3a3c2b8c59!2sLahore%20Medical%20College!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Usman Tariq",
                rating: 5,
                comment: "Dr. Bilal is excellent, very attentive and explains conditions thoroughly.",
                date: "2024-03-02"
            }
        ]
    },
    {
        id: "cardiologist-3",
        name: "Prof. Dr. Zahid Pervaiz",
        specialty: "Cardiology",
        location: "Islamabad",
        rating: 5.0,
        experience: 25,
        image: "male.jpg", // Placeholder
        fees: 3000,
        availability: {
            "Monday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Tuesday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Wednesday": ["09:00 AM", "11:00 AM", "02:00 PM"],
            "Thursday": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"],
            "Friday": ["09:00 AM", "11:00 AM", "02:00 PM"]
        },
        education: "MBBS, FRCP (Cardiology), FCPS (Cardiology)",
        languages: ["English", "Urdu"],
        consultationType: "Shifa International Hospitals",
        waitTime: "Under 15 Min",
        satisfactionRate: "100% (750)",
        subspecialty: "Interventional Cardiologist",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467889100067!2d73.04780511441865!3d33.68442098071887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff1a44e6b1d%3A0x1d3a5e8c1b3f9b1d!2sShifa%20International%20Hospital%20Islamabad!5e0!3m2!1sen!2spk!4v1678901234567!5m2!1sen!2spk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        testimonials: [
            {
                name: "Faizan Ahmed",
                rating: 5,
                comment: "Prof. Dr. Pervaiz is a leading cardiologist, highly recommend for heart conditions.",
                date: "2024-03-03"
            }
        ]
    }
];