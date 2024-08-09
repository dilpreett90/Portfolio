import React from 'react';

const experienceData = [
  {
    year: "06/2024-Present",
    role: "Technical Subject Matter Expert(DSA)",
    company: "TechCurators,TC group of companies",
    description: `Developed and reviewed high-quality DSA questions.Engineered engaging prompts to enhance critical thinking and problem-solving skills.`,
  },
  {
    year: "05/2023-07/2023",
    role: "SAP DEVELOPER INTERN",
    company: "GAIL INDIA LIMITED NOIDA",
    description: `Develop a comprehensive Passport Application System using Abap that streamlines the process of passport insurance,tracking,management.`,
  },
];

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {experienceData.map((exp, index) => (
          <div key={index} className='mb-8'>
            <h3 className='text-2xl font-semibold'>{exp.role} at {exp.company}</h3>
            <p className='text-lg text-gray-700'>{exp.year}</p>
            <p className='mt-2'>{exp.description}</p>
            <ul className='mt-2'>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
