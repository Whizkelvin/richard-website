import React from "react";

const course = () => {
  const eduBackground = [
    {
      year: "1976-1981",
      school: "St. Augustine's College - G.C.E. Ordinary Level",
    },
    {
      year: "1982-1984",
      school: "Accra Workers College - G.C.E. Advanced Level",
    },
    {
      year: "1986-1988",
      school: "Institut Biblique d'Abidjan - Diplôme en Théologie",
    },
    {
      year: "1989-1990",
      school:
        "Instituut voor Inpassing (Utrecht) - Universitaire Taalcursus Nederlands",
    },
    {
      year: "1990-1992",
      school: "Universiteit Utrecht - Propaedeuse Franse Taal- en Letterkunde",
    },
    {
      year: "1992-2000",
      school:
        "niversiteit van Amsterdam - Doctoraal Franse Taal- en Letterkunde",
    },
    {
      year: "2003-2003",
      school:
        "Kwaliteitsregister Tolken en Vertalers - Cursus Spreek- en Luistervaardigheid",
    },
    {
      year: "2003-2004",
      school:
        "Stichting Instituut Gerechtstolken en Vertalers - Gerechtstolk in Strafzaken",
    },
  ];
  return (
    <div className="mt-[20%] font-Inter">
      <h1 className="text-center text-3xl font-semibold">Educucation background</h1>
      <div className=" grid grid-cols-2 gap-4 p-4 text-white text-center justify-center">
        {eduBackground.map((item, index) => (
          <div
            data-aos="fade-up"
            className="bg-red-900/90 w-full h-60px p-6 rounded-md"
          >
            <p className="font-bold">{item.year}</p>
            <p>
              {item.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default course;
