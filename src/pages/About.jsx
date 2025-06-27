import { useState } from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const About = () => {
  const [visibleCareerIndexes, setVisibleCareerIndexes] = useState([]);
  const [visibleEduIndexes, setVisibleEduIndexes] = useState([]);

  const toggleCareerResponsibilities = (index) => {
    setVisibleCareerIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleEduResponsibilities = (index) => {
    setVisibleEduIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const education = [/* ... (data seperti di atas, tidak berubah) ... */];
  const careerExperiences = [/* ... (data seperti di atas, tidak berubah) ... */];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Education Section */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        Pendidikan
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period} · {edu.location}</p>
            </div>
          </div>
          <button
            className="mt-2 text-blue-600 text-sm underline"
            onClick={() => toggleEduResponsibilities(index)}
          >
            {visibleEduIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleEduIndexes.includes(index) && (
            <>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {edu.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {edu.projects.map((item, i) => (
                  <li key={i}><strong>Proyek:</strong> {item}</li>
                ))}
              </ul>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {edu.achievements.map((item, i) => (
                  <li key={i}><strong>Pencapaian:</strong> {item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

      {/* Career Section */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
        <Briefcase className="w-6 h-6" />
        Pengalaman Karier
      </h2>
      {careerExperiences.map((career, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img src={career.logo} alt={career.company} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">{career.title}</h3>
              <p className="text-sm">{career.company}</p>
              <p className="text-sm text-gray-500">{career.period} · {career.location}</p>
            </div>
          </div>
          <button
            className="mt-2 text-blue-600 text-sm underline"
            onClick={() => toggleCareerResponsibilities(index)}
          >
            {visibleCareerIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleCareerIndexes.includes(index) && (
            <>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {career.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {career.description && (
                <p className="mt-2 text-sm italic text-gray-600">{career.description}</p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
